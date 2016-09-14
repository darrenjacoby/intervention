<?php namespace Sober\Intervention\RemoveToolbarItems;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Util;
use Sober\Intervention\Alias;

/**
 * Module: remove-toolbar-items
 *
 * Hooks into wp_before_admin_bar_render to remove toolbar item/s for user role/s.
 *
 * @example intervention('remove-toolbar-items', $items(string|array), $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_before_admin_bar_render/
 * @link https://codex.wordpress.org/Global_Variables
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/remove_node/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('wp_before_admin_bar_render', function () {
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        // Instance config
        $config = Instance::getConfig($instance);
        $config = Instance::setDefaults(['logo', 'updates', 'customize', 'comments', 'new'], $config);
        // Instance roles
        $roles = Instance::getRoles($instance);
        $roles = Instance::setDefaults(Util::toArray('all'), $roles);
        $roles = Alias::addUserRoles($roles);
        // Run instance
        foreach ($roles as $role) {
            if (current_user_can($role)) {
                global $wp_admin_bar;
                // General
                if (in_array('logo', $config) || in_array('all', $config)) {
                    $wp_admin_bar->remove_node('wp-logo');
                }
                if (in_array('updates', $config) || in_array('all', $config)) {
                    $wp_admin_bar->remove_node('updates');
                }
                if (in_array('site-name', $config) || in_array('all', $config)) {
                    $wp_admin_bar->remove_node('site-name');
                }
                // Comments
                if (in_array('comments', $config) || in_array('all', $config)) {
                    $wp_admin_bar->remove_node('comments');
                }
                // Customizer
                if (in_array('customize', $config) || in_array('all', $config)) {
                    $wp_admin_bar->remove_node('customize');
                }
                // New
                if (in_array('new', $config) || in_array('all', $config)) {
                    $wp_admin_bar->remove_node('new-content');
                }
                if (in_array('new-post', $config)) {
                    $wp_admin_bar->remove_node('new-post');
                }
                if (in_array('new-page', $config)) {
                    $wp_admin_bar->remove_node('new-page');
                }
                if (in_array('new-media', $config)) {
                    $wp_admin_bar->remove_node('new-media');
                }
                if (in_array('new-user', $config)) {
                    $wp_admin_bar->remove_node('new-user');
                }
                // Account
                if (in_array('account', $config) || in_array('all', $config)) {
                    array_push($config, 'account-user', 'account-profile');
                }
                if (in_array('account-user', $config)) {
                    $wp_admin_bar->remove_node('user-info');
                }
                if (in_array('account-profile', $config)) {
                    $wp_admin_bar->remove_node('edit-profile');
                }
                /*
                Exclude logout as the user will always require this
                if (in_array('account-logout', $config)) {
                    $wp_admin_bar->remove_node('logout');
                }
                */
            }
        }
    }
});
