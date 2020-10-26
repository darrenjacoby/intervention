<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Admin;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Str;

/**
 * Site
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
 *     'site.site-title' => (string) $title,
 *     'site.tagline' => (string) $tagline,
 *     'site.wp-address' => (string) $wp_url,
 *     'site.site-address' => (string) $site_url,
 *     'site.admin-email' => (string) $admin_email,
 *     'site.membership' => (boolean) $enable_membership,
 *     'site.default-role' => (string) $role,
 *     'site.timezone' => (string) $timezone,
 *     'site.date-format' => (string) $date_format,
 *     'site.time-format' => (string) $time_format,
 *     'site.week-starts' => (string) $week_starts,
 * ]
 */
class Site
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
        
        $this->admin();
    }

    /**
     * Options
     */
    public function options()
    {
        if ($this->config->has('site.site-title')) {
            update_option('blogname', $this->config->get('site.site-title'));
        }

        if ($this->config->has('site.tagline')) {
            update_option('blogdescription', $this->config->get('site.tagline'));
        }

        if ($this->config->has('site.wp-address')) {
            update_option('siteurl', $this->config->get('site.wp-address'));
        }

        if ($this->config->has('site.site-address')) {
            update_option('home', $this->config->get('site.site-address'));
        }

        if ($this->config->has('site.admin-email')) {
            update_option('admin_email', $this->config->get('site.admin-email'));
        }

        if ($this->config->has('site.membership')) {
            update_option('users_can_register', $this->config->get('site.membership'));
        }

        if ($this->config->has('site.default-role')) {
            update_option('default_role', $this->config->get('site.default-role'));
        }

        if ($this->config->has('site.timezone')) {
            update_option('timezone_string', $this->config->get('site.timezone'));
        }

        if ($this->config->has('site.date-format')) {
            update_option('date_format', $this->config->get('site.date-format'));
        }

        if ($this->config->has('site.time-format')) {
            update_option('time_format', $this->config->get('site.time-format'));
        }

        if ($this->config->has('site.week-starts')) {
            $day = Str::lower($this->config->get('site.week-starts'));
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
    }

    /**
     * Admin
     */
    public function admin()
    {
        if ($this->config->has('site.site-title')) {
            // Admin::set('settings.general', ['site-title']);
        }

        if ($this->config->has('site.tagline')) {
            Admin::set('settings.general', ['tagline']);
        }

        if ($this->config->has('site.wp-address')) {
            Admin::set('settings.general', ['wp-address']);
        }

        if ($this->config->has('site.site-address')) {
            Admin::set('settings.general', ['site-address']);
        }

        if ($this->config->has('site.admin-email')) {
            Admin::set('settings.general', ['admin-email']);
        }

        if ($this->config->has('site.membership')) {
            Admin::set('settings.general', ['membership']);
        }

        if ($this->config->has('site.default-role')) {
            Admin::set('settings.general', ['default-role']);
        }

        if ($this->config->has('site.timezone')) {
            Admin::set('settings.general', ['timezone']);
        }

        if ($this->config->has('site.date-format')) {
            Admin::set('settings.general', ['date-format']);
        }

        if ($this->config->has('site.time-format')) {
            Admin::set('settings.general', ['time-format']);
        }

        if ($this->config->has('site.week-starts')) {
            Admin::set('settings.general', ['week-starts']);
        }
    }
}
