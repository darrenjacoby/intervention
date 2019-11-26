<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: remove-menu-items
 *
 * Hooks into admin_menu to removes menu item/s for user role/s.
 *
 * @example intervention('remove-menu-items', $items(string|array), $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_menu/
 * @link https://developer.wordpress.org/reference/functions/current_user_can/
 * @link https://developer.wordpress.org/reference/functions/remove_menu_page/
 * @link https://developer.wordpress.org/reference/functions/remove_submenu_page/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class RemoveMenuItems extends Instance
{
    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig('danger-zone');
        $this->setDefaultRoles('all-not-admin');
        $this->roles = $this->aliasUserRoles($this->roles);
        return $this;
    }

    protected function hook()
    {
        if (!wp_doing_ajax()) {
            add_action('admin_init', [$this, 'removeMenuItems']);
        }
    }

    public function removeMenuItems()
    {
        foreach ($this->roles as $role) {
            if (current_user_can($role)) {
                // Dashboard
                if (in_array('dashboard', $this->config) || in_array('all', $this->config)) {
                    remove_menu_page('index.php');
                }
                if (in_array('updates', $this->config) || in_array('danger-zone', $this->config)) {
                    remove_submenu_page('index.php', 'update-core.php');
                }
                // Posts
                if (in_array('posts', $this->config) || in_array('all', $this->config)) {
                    remove_menu_page('edit.php');
                }
                if (in_array('post-new', $this->config)) {
                    remove_submenu_page('edit.php', 'post-new.php');
                }
                if (in_array('post-categories', $this->config)) {
                    remove_submenu_page('edit.php', 'edit-tags.php?taxonomy=category');
                }
                if (in_array('post-tags', $this->config)) {
                    remove_submenu_page('edit.php', 'edit-tags.php?taxonomy=post_tag');
                }
                // Media
                if (in_array('media', $this->config) || in_array('all', $this->config)) {
                    remove_menu_page('upload.php');
                }
                if (in_array('media-new', $this->config)) {
                    remove_submenu_page('upload.php', 'media-new.php');
                }
                // Pages
                if (in_array('pages', $this->config) || in_array('all', $this->config)) {
                    remove_menu_page('edit.php?post_type=page');
                }
                if (in_array('page-new', $this->config)) {
                    remove_menu_page('edit.php?post_type=page', 'post-new.php?post_type=page');
                }
                // Comments
                if (in_array('comments', $this->config) || in_array('all', $this->config)) {
                    remove_menu_page('edit-comments.php');
                }
                // Appearance
                if (in_array('themes', $this->config) || in_array('all', $this->config) || in_array('danger-zone', $this->config)) {
                    remove_menu_page('themes.php');
                }
                if (in_array('theme-widgets', $this->config)) {
                    remove_submenu_page('themes.php', 'widgets.php');
                }
                if (in_array('theme-menus', $this->config)) {
                    remove_submenu_page('themes.php', 'widgets.php');
                }
                if (in_array('theme-editor', $this->config)) {
                    remove_submenu_page('themes.php', 'theme-editor.php');
                }
                // Plugins
                if (in_array('plugins', $this->config) || in_array('all', $this->config) || in_array('danger-zone', $this->config)) {
                    remove_menu_page('plugins.php');
                }
                if (in_array('plugin-new', $this->config)) {
                    remove_submenu_page('plugins.php', 'plugin-install.php');
                }
                if (in_array('plugin-editor', $this->config)) {
                    remove_submenu_page('plugins.php', 'plugin-editor.php');
                }
                // Users
                if (in_array('users', $this->config) || in_array('all', $this->config) || in_array('danger-zone', $this->config)) {
                    remove_menu_page('users.php');
                }
                if (in_array('user-new', $this->config)) {
                    remove_submenu_page('users.php', 'user-new.php');
                }
                if (in_array('user-profile', $this->config) || in_array('all', $this->config) || in_array('danger-zone', $this->config)) {
                    remove_menu_page('profile.php');
                    remove_submenu_page('users.php', 'profile.php');
                }
                // Tools
                if (in_array('tools', $this->config) || in_array('all', $this->config) || in_array('danger-zone', $this->config)) {
                    remove_menu_page('tools.php');
                }
                if (in_array('tool-import', $this->config)) {
                    remove_submenu_page('tools.php', 'import.php');
                }
                if (in_array('tool-export', $this->config)) {
                    remove_submenu_page('tools.php', 'export.php');
                }
                // Settings
                if (in_array('settings', $this->config) || in_array('all', $this->config) || in_array('danger-zone', $this->config)) {
                    remove_menu_page('options-general.php');
                }
                if (in_array('setting-writing', $this->config)) {
                    remove_submenu_page('options-general.php', 'options-writing.php');
                }
                if (in_array('setting-reading', $this->config)) {
                    remove_submenu_page('options-general.php', 'options-reading.php');
                }
                if (in_array('setting-media', $this->config)) {
                    remove_submenu_page('options-general.php', 'options-media.php');
                }
                if (in_array('setting-permalink', $this->config)) {
                    remove_submenu_page('options-general.php', 'options-permalink.php');
                }
                if (in_array('setting-discussion', $this->config)) {
                    remove_submenu_page('options-general.php', 'options-discussion.php');
                }
                if (in_array('setting-media', $this->config)) {
                    remove_submenu_page('options-general.php', 'options-media.php');
                }
                // Settings; Disable Comments
                if (in_array('setting-disable-comments', $this->config) || in_array('all', $this->config)) {
                    remove_submenu_page('options-general.php', 'disable_comments_settings');
                }
                // Advanced Custom Fields
                if (in_array('acf', $this->config) || in_array('all', $this->config) || in_array('danger-zone', $this->config)) {
                    remove_menu_page('edit.php?post_type=acf-field-group');
                }
                if (in_array('acf-new', $this->config)) {
                    remove_submenu_page('edit.php?post_type=acf-field-group', 'post-new.php?post_type=acf-field-group');
                }
                if (in_array('acf-tools', $this->config)) {
                    remove_submenu_page('edit.php?post_type=acf-field-group', 'acf-settings-tools');
                }
                if (in_array('acf-updates', $this->config)) {
                    remove_submenu_page('edit.php?post_type=acf-field-group', 'acf-settings-updates');
                }
            }
        }
    }
}
