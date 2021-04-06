<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\Support\Element;
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
 * @link https://developer.wordpress.org/reference/functions/update_option/
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

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalize($config);
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('init', [$this, 'options']);
        add_action('admin_head-options-general.php', [$this, 'admin']);
    }

    /**
     * Options
     */
    public function options()
    {
        if ($this->config->has('general.site-title')) {
            update_option('blogname', $this->config->get('general.site-title'));
        }

        if ($this->config->has('general.tagline')) {
            update_option('blogdescription', $this->config->get('general.tagline'));
        }

        if ($this->config->has('general.wp-address')) {
            update_option('siteurl', $this->config->get('general.wp-address'));
        }

        if ($this->config->has('general.site-address')) {
            update_option('home', $this->config->get('general.site-address'));
        }

        if ($this->config->has('general.admin-email')) {
            update_option('admin_email', $this->config->get('general.admin-email'));
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

        if ($this->config->has('general.membership')) {
            update_option('users_can_register', $this->config->get('general.membership'));
        }

        if ($this->config->has('general.default-role')) {
            update_option('default_role', $this->config->get('general.default-role'));
        }

        if ($this->config->has('general.timezone')) {
            update_option('timezone_string', $this->config->get('general.timezone'));
        }

        if ($this->config->has('general.date-format')) {
            update_option('date_format', $this->config->get('general.date-format'));
        }

        if ($this->config->has('general.time-format')) {
            update_option('time_format', $this->config->get('general.time-format'));
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

            // Return value of array item
            if (is_string($day) && isset($days[$day])) {
                $day = $days[$day];
            }

            update_option('start_of_week', $day);
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

    /**
     * Admin
     */
    public function admin()
    {
        if ($this->config->has('general.site-title')) {
            Element::disabled('#blogname');
        }

        if ($this->config->has('general.tagline')) {
            Element::disabled('#blogdescription');
        }

        if ($this->config->has('general.wp-address')) {
            Element::disabled('#siteurl');
        }

        if ($this->config->has('general.site-address')) {
            Element::disabled('#home');
        }

        if ($this->config->has('general.admin-email')) {
            Element::disabled('#new_admin_email');
        }

        if ($this->config->has('general.membership')) {
            Element::disabled('#users_can_register');
        }

        if ($this->config->has('general.default-role')) {
            Element::disabled('#default_role');
        }

        if ($this->config->has('general.timezone')) {
            Element::disabled('#timezone_string');
        }

        if ($this->config->has('general.date-format')) {
            Element::disabled('input[name=date_format], #date_format_custom');
        }

        if ($this->config->has('general.time-format')) {
            Element::disabled('input[name=time_format], #time_format_custom');
        }

        if ($this->config->has('general.week-starts')) {
            Element::disabled('#start_of_week');
        }

        if ($this->config->has('general.language')) {
            Element::disabled('#WPLANG');
        }
    }
}
