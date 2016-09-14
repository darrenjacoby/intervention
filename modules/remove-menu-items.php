<?php namespace Sober\Intervention\RemoveDashboardItems;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;
use Sober\Intervention\Util;

/**
 * Module: remove-menu-items
 *
 * Hooks into admin_init to removes menu item/s for user role/s.
 *
 * @example intervention('remove-menu-items', $items(string|array), $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/functions/current_user_can/
 * @link https://developer.wordpress.org/reference/functions/remove_menu_page/
 * @link https://developer.wordpress.org/reference/functions/remove_submenu_page/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('admin_init', function () {
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        // Instance config
        $config = Instance::getConfig($instance);
        $config = Instance::setDefaults('danger-zone', $config);
        // Instance roles
        $roles = Instance::getRoles($instance);
        $roles = Instance::setDefaults(Util::toArray('all-not-admin'), $roles);
        $roles = Alias::addUserRoles($roles);
        // Run instance
        foreach ($roles as $role) {
            if (current_user_can($role)) {
                // Removals
                // Dashboard
                if (in_array('dashboard', $config) || in_array('all', $config)) {
                    remove_menu_page('index.php');
                }
                if (in_array('updates', $config) || in_array('danger-zone', $config)) {
                    remove_submenu_page('index.php', 'update-core.php');
                }
                // Posts
                if (in_array('posts', $config) || in_array('all', $config)) {
                    remove_menu_page('edit.php');
                }
                if (in_array('post-new', $config)) {
                    remove_submenu_page('edit.php', 'post-new.php');
                }
                if (in_array('post-categories', $config)) {
                    remove_submenu_page('edit.php', 'edit-tags.php?taxonomy=category');
                }
                if (in_array('post-tags', $config)) {
                    remove_submenu_page('edit.php', 'edit-tags.php?taxonomy=post_tag');
                }
                // Media
                if (in_array('media', $config) || in_array('all', $config)) {
                    remove_menu_page('upload.php');
                }
                if (in_array('media-new', $config)) {
                    remove_submenu_page('upload.php', 'media-new.php');
                }
                // Pages
                if (in_array('pages', $config) || in_array('all', $config)) {
                    remove_menu_page('edit.php?post_type=page');
                }
                if (in_array('page-new', $config)) {
                    remove_menu_page('edit.php?post_type=page', 'post-new.php?post_type=page');
                }
                // Comments
                if (in_array('comments', $config) || in_array('all', $config)) {
                    remove_menu_page('edit-comments.php');
                }
                // Appearance
                if (in_array('themes', $config) || in_array('all', $config) || in_array('danger-zone', $config)) {
                    remove_menu_page('themes.php');
                }
                if (in_array('theme-widgets', $config)) {
                    remove_submenu_page('themes.php', 'widgets.php');
                }
                if (in_array('theme-menus', $config)) {
                    remove_submenu_page('themes.php', 'widgets.php');
                }
                if (in_array('theme-editor', $config)) {
                    remove_submenu_page('themes.php', 'theme-editor.php');
                }
                // Plugins
                if (in_array('plugins', $config) || in_array('all', $config) || in_array('danger-zone', $config)) {
                    remove_menu_page('plugins.php');
                }
                if (in_array('plugin-new', $config)) {
                    remove_submenu_page('plugins.php', 'plugin-install.php');
                }
                if (in_array('plugin-editor', $config)) {
                    remove_submenu_page('plugins.php', 'plugin-editor.php');
                }
                // Users
                if (in_array('users', $config) || in_array('all', $config) || in_array('danger-zone', $config)) {
                    remove_menu_page('users.php');
                }
                if (in_array('user-new', $config)) {
                    remove_submenu_page('users.php', 'user-new.php');
                }
                if (in_array('user-profile', $config) || in_array('all', $config) || in_array('danger-zone', $config)) {
                    remove_menu_page('profile.php');
                    remove_submenu_page('users.php', 'profile.php');
                }
                // Tools
                if (in_array('tools', $config) || in_array('all', $config) || in_array('danger-zone', $config)) {
                    remove_menu_page('tools.php');
                }
                if (in_array('tool-import', $config)) {
                    remove_submenu_page('tools.php', 'import.php');
                }
                if (in_array('tool-export', $config)) {
                    remove_submenu_page('tools.php', 'export.php');
                }
                // Settings
                if (in_array('settings', $config) || in_array('all', $config) || in_array('danger-zone', $config)) {
                    remove_menu_page('options-general.php');
                }
                if (in_array('setting-writing', $config)) {
                    remove_submenu_page('options-general.php', 'options-writing.php');
                }
                if (in_array('setting-reading', $config)) {
                    remove_submenu_page('options-general.php', 'options-reading.php');
                }
                if (in_array('setting-media', $config)) {
                    remove_submenu_page('options-general.php', 'options-media.php');
                }
                if (in_array('setting-permalink', $config)) {
                    remove_submenu_page('options-general.php', 'options-permalink.php');
                }
                if (in_array('setting-discussion', $config)) {
                    remove_submenu_page('options-general.php', 'options-discussion.php');
                }
                if (in_array('setting-media', $config)) {
                    remove_submenu_page('options-general.php', 'options-media.php');
                }
                // Settings - disable comments plugin
                if (in_array('setting-disable-comments', $config) || in_array('all', $config)) {
                    remove_submenu_page('options-general.php', 'disable_comments_settings');
                }
                // Advanced Custom Fields
                if (in_array('acf', $config) || in_array('all', $config) || in_array('danger-zone', $config)) {
                    add_filter('acf/settings/show_admin', '__return_false');
                }
                if (in_array('acf-new', $config)) {
                    remove_submenu_page('edit.php?post_type=acf-field-group', 'post-new.php?post_type=acf-field-group');
                }
                if (in_array('acf-tools', $config)) {
                    remove_submenu_page('edit.php?post_type=acf-field-group', 'acf-settings-tools');
                }
                if (in_array('acf-updates', $config)) {
                    remove_submenu_page('edit.php?post_type=acf-field-group', 'acf-settings-updates');
                }
            }
        }
    }
});
