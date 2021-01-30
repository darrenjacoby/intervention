<?php

namespace Sober\Intervention\Admin\Settings;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Settings/General
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'settings.general',
 *     'settings.general' => (string) $route,
 *     'settings.general.title' => (string) $title,
 *     'settings.general.title.[menu, page]' => (string) $title,
 *     'settings.general.tabs',
 *     'settings.general.tabs.[screen-options, help]',
 *     'settings.general.site-title',
 *     'settings.general.tagline',
 *     'settings.general.wp-address',
 *     'settings.general.site-address',
 *     'settings.general.admin-email',
 *     'settings.general.membership',
 *     'settings.general.default-role',
 *     'settings.general.site-lang',
 *     'settings.general.timezone',
 *     'settings.general.date-format',
 *     'settings.general.time-format',
 *     'settings.general.week-starts',
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
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('settings.general.all')->add('settings.general.', [
            'tabs',
            'site-title',
            'tagline',
            'wp-address',
            'site-address',
            'admin-email',
            'membership',
            'default-role',
            'site-lang',
            'timezone',
            'date-format',
            'time-format',
            'week-starts',
        ]);

        $compose = $compose->has('settings.general.title')->add('settings.general.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('settings.general.tabs')->add('settings.general.tabs.', [
            'screen-options', 'help',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('settings.general', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-options-general.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('settings.general.site-title')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#blogname").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.tagline')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#blogdescription").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.wp-address')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#siteurl").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.site-address')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#home").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.admin-email')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#new_admin_email").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.membership')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#users_can_register").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.default-role')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#default_role").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.site-lang')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#WPLANG").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.timezone')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#timezone_string").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.date-format')) {
            echo '<script>jQuery(document).ready(function() {jQuery("input[name=date_format]").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.time-format')) {
            echo '<script>jQuery(document).ready(function() {jQuery("input[name=time_format]").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.general.week-starts')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#start_of_week").parents("tr").remove()});</script>';
        }
    }
}
