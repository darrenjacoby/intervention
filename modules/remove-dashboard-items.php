<?php namespace Sober\Intervention\RemoveDashboardItems;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;
use Sober\Intervention\Util;

/**
 * Module: remove-dashboard-items
 *
 * Hooks into wp_dashboard_setup to remove dashboard item/s for user role/s.
 *
 * @example intervention('remove-dashboard-items', $items(string|array), $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/functions/wp_dashboard_setup/
 * @link https://developer.wordpress.org/reference/functions/remove_action
 * @link https://developer.wordpress.org/reference/functions/remove_meta_box/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('wp_dashboard_setup', function () {

    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        // Instance config
        $config = Instance::getConfig($instance);
        $config = Instance::setDefaults(['welcome', 'right-now', 'notices', 'recent-comments', 'incoming-links', 'plugins', 'quick-draft', 'drafts', 'news'], $config);
        // Instance roles
        $roles = Instance::getRoles($instance);
        $roles = Instance::setDefaults(Util::toArray('all'), $roles);
        $roles = Alias::addUserRoles($roles);
        // Run instance
        foreach ($roles as $role) {
            if (current_user_can($role)) {
                if (in_array('welcome', $config) || in_array('all', $config)) {
                    remove_action('welcome_panel', 'wp_welcome_panel');
                }
                if (in_array('notices', $config) || in_array('all', $config)) {
                    remove_meta_box('dashboard_browser_nag', 'dashboard', 'normal');
                }
                if (in_array('activity', $config) || in_array('all', $config)) {
                    remove_meta_box('dashboard_activity', 'dashboard', 'normal');
                }
                if (in_array('right-now', $config) || in_array('all', $config)) {
                    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
                }
                if (in_array('recent-comments', $config) || in_array('all', $config)) {
                    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
                }
                if (in_array('incoming-links', $config) || in_array('all', $config)) {
                    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
                }
                if (in_array('plugins', $config) || in_array('all', $config)) {
                    remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
                }
                if (in_array('quick-draft', $config) || in_array('all', $config)) {
                    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
                }
                if (in_array('drafts', $config) || in_array('all', $config)) {
                    remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side');
                }
                if (in_array('news', $config) || in_array('all', $config)) {
                    remove_meta_box('dashboard_primary', 'dashboard', 'side');
                }
            }
        }
    }
});
