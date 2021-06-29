<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\OptionsApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Str;

/**
 * General
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://wordpress.org/support/article/roles-and-capabilities/
 * @link https://gist.github.com/mj1856/f0eaa302d56cd7b3dd3e
 * @link https://www.php.net/manual/en/datetime.formats.date.php
 * @link https://www.php.net/manual/en/datetime.formats.time.php
 * @link https://www.php.net/manual/en/datetime.formats.relative.php
 *
 * @param
 * [
 *     'general.site-title' => (string) $title,
 *     'general.tagline' => (string) $tagline,
 *     'general.wp-address' => (string) $wp_url,
 *     'general.site-address' => (string) $site_url,
 *     'general.admin-email' => (string) $admin_email,
 *     'general.admin-email.verification' => (boolean|int) $email_verification,
 *     'general.email-from' => (string) $email_from,
 *     'general.email-from-name' => (string) $email_from_name,
 *     'general.membership' => (boolean) $enable_membership,
 *     'general.default-role' => (string) $role,
 *     'general.language' => (string) $language,
 *     'general.timezone' => (string) $timezone,
 *     'general.date-format' => (string) $date_format,
 *     'general.time-format' => (string) $time_format,
 *     'general.week-starts' => (string) $week_starts,
 * ]
 */
class General
{
    protected $config;
    protected $api;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalize($config);
        $this->api = OptionsApi::set($this->config);
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('init', [$this, 'options']);
        add_action('admin_head-options-general.php', [$this->api, 'disableKeys']);
    }

    /**
     * Options
     */
    public function options()
    {
        $this->api->saveKeys([
            'general.site-title',
            'general.tagline',
            'general.wp-address',
            'general.site-address',
            'general.admin-email',
            'general.membership',
            'general.default-role',
            'general.timezone',
            'general.date-format',
            'general.time-format',
        ]);

        // disable login email verification screen
        if ($this->config->has('general.admin-email')) {
            add_filter('admin_email_check_interval', '__return_false');
        }

        // only show login email verification screen if `general.admin-email` is not set
        if ($this->config->has('general.admin-email.verification') && !$this->config->has('general.admin-email')) {
            $value = $this->config->get('general.admin-email.verification');

            add_filter('admin_email_check_interval', function () use ($value) {
                return $value;
            });
        }

        if ($this->config->has('general.email-from')) {
            $from = $this->config->get('general.email-from');
            add_filter('wp_mail_from', function () use ($from) {
                return $from;
            });
        }

        if ($this->config->has('general.email-from-name')) {
            $from_name = $this->config->get('general.email-from-name');
            add_filter('wp_mail_from_name', function () {
                return $from_name;
            });
        }

        if ($this->config->has('general.week-starts')) {
            $day = Str::lower($this->config->get('general.week-starts'));
            $days = [
                'sunday' => 0,
                'sun' => 0,
                'monday' => 1,
                'mon' => 1,
                'tuesday' => 2,
                'tue' => 2,
                'wednesday' => 3,
                'wed' => 3,
                'thursday' => 4,
                'thu' => 4,
                'friday' => 5,
                'fri' => 5,
                'saturday' => 6,
                'sat' => 6,
            ];

            // return value of array item
            if (is_string($day) && isset($days[$day])) {
                $day = $days[$day];
            }

            $this->api->save('general.week-starts', $day);
        }

        if ($this->config->has('general.language')) {
            $general_language = $this->config->get('general.language');

            if (!empty($general_language) && !in_array($general_language, get_available_languages())) {
                require_once(ABSPATH . 'wp-admin/includes/file.php');
                require_once(ABSPATH . 'wp-admin/includes/translation-install.php');
                wp_download_language_pack($general_language);
            }

            switch_to_locale($general_language);
        }
    }
}
