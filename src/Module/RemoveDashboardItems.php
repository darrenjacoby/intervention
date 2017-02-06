<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

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
class RemoveDashboardItems extends Instance
{
    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig(['welcome', 'notices', 'activity', 'right-now', 'recent-comments', 'incoming-links', 'plugins', 'quick-draft', 'drafts', 'news']);
        $this->setDefaultRoles('all');
        $this->roles = $this->aliasUserRoles($this->roles);
        return $this;
    }

    protected function hook()
    {
        add_action('wp_dashboard_setup', [$this, 'removeDashboardItems']);
    }

    public function removeDashboardItems()
    {
        foreach ($this->roles as $role) {
            if (current_user_can($role)) {
                if (in_array('welcome', $this->config) || in_array('all', $this->config)) {
                    remove_action('welcome_panel', 'wp_welcome_panel');
                }
                if (in_array('notices', $this->config) || in_array('all', $this->config)) {
                    remove_meta_box('dashboard_browser_nag', 'dashboard', 'normal');
                }
                if (in_array('activity', $this->config) || in_array('all', $this->config)) {
                    remove_meta_box('dashboard_activity', 'dashboard', 'normal');
                }
                if (in_array('right-now', $this->config) || in_array('all', $this->config)) {
                    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
                }
                if (in_array('recent-comments', $this->config) || in_array('all', $this->config)) {
                    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
                }
                if (in_array('incoming-links', $this->config) || in_array('all', $this->config)) {
                    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
                }
                if (in_array('plugins', $this->config) || in_array('all', $this->config)) {
                    remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
                }
                if (in_array('quick-draft', $this->config) || in_array('all', $this->config)) {
                    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
                }
                if (in_array('drafts', $this->config) || in_array('all', $this->config)) {
                    remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side');
                }
                if (in_array('news', $this->config) || in_array('all', $this->config)) {
                    remove_meta_box('dashboard_primary', 'dashboard', 'side');
                }
            }
        }
    }
}
