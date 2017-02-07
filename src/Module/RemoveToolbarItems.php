<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

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
class RemoveToolbarItems extends Instance
{
    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig(['logo', 'updates', 'customize', 'comments', 'new']);
        $this->setDefaultRoles('all');
        $this->roles = $this->aliasUserRoles($this->roles);
        return $this;
    }

    protected function hook()
    {
        add_action('wp_before_admin_bar_render', [$this, 'removeToolbarItems']);
    }

    public function removeToolbarItems()
    {
        foreach ($this->roles as $role) {
            if (current_user_can($role)) {
                global $wp_admin_bar;
                // General
                if (in_array('logo', $this->config) || in_array('all', $this->config)) {
                    $wp_admin_bar->remove_node('wp-logo');
                }
                if (in_array('updates', $this->config) || in_array('all', $this->config)) {
                    $wp_admin_bar->remove_node('updates');
                }
                if (in_array('site-name', $this->config) || in_array('all', $this->config)) {
                    $wp_admin_bar->remove_node('site-name');
                }
                // Comments
                if (in_array('comments', $this->config) || in_array('all', $this->config)) {
                    $wp_admin_bar->remove_node('comments');
                }
                // Customizer
                if (in_array('customize', $this->config) || in_array('all', $this->config)) {
                    $wp_admin_bar->remove_node('customize');
                }
                // New
                if (in_array('new', $this->config) || in_array('all', $this->config)) {
                    $wp_admin_bar->remove_node('new-content');
                }
                if (in_array('new-post', $this->config)) {
                    $wp_admin_bar->remove_node('new-post');
                }
                if (in_array('new-page', $this->config)) {
                    $wp_admin_bar->remove_node('new-page');
                }
                if (in_array('new-media', $this->config)) {
                    $wp_admin_bar->remove_node('new-media');
                }
                if (in_array('new-user', $this->config)) {
                    $wp_admin_bar->remove_node('new-user');
                }
                // View
                if (in_array('view', $this->config) || in_array('all', $this->config)) {
                    $wp_admin_bar->remove_node('view');
                }
                if (in_array('preview', $this->config) || in_array('all', $this->config)) {
                    $wp_admin_bar->remove_node('preview');
                }
                if (in_array('archive', $this->config) || in_array('all', $this->config)) {
                    $wp_admin_bar->remove_node('archive');
                }
                // Account
                if (in_array('account', $this->config) || in_array('all', $this->config)) {
                    array_push($this->config, 'account-user', 'account-profile');
                }
                if (in_array('account-user', $this->config)) {
                    $wp_admin_bar->remove_node('user-info');
                }
                if (in_array('account-profile', $this->config)) {
                    $wp_admin_bar->remove_node('edit-profile');
                }
                /*
                Exclude logout from plugin options; required for safety
                if (in_array('account-logout', $this->config)) {
                    $wp_admin_bar->remove_node('logout');
                }
                */
            }
        }
    }
}
