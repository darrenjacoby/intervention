<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: remove-update-notices
 *
 * Multiple hooks and filters to remove toolbar item/s for user role/s.
 *
 * @example intervention('remove-update-notices', $roles(string|array));
 *
 * @link https://codex.wordpress.org/Global_Variables
 * @link https://developer.wordpress.org/reference/functions/current_user_can/
 * @link http://jasonjalbuena.com/disable-wordpress-update-notifications/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class RemoveUpdateNotices extends Instance
{
    public function run()
    {
        $this->setup()->delegateHook();
    }

    protected function setup()
    {
        $this->setDefaultConfig('all-not-admin');
        $this->config = $this->aliasUserRoles($this->config);
        return $this;
    }

    protected function delegateHook()
    {
        foreach ($this->config as $role) {
            if (current_user_can($role)) {
                $this->hook();
            }
        }
    }

    protected function hook()
    {
        add_filter('pre_site_transient_update_core', [$this, 'removeUpdateNotices']);
        add_filter('pre_site_transient_update_plugins', [$this, 'removeUpdateNotices']);
        add_filter('pre_site_transient_update_themes', [$this, 'removeUpdateNotices']);
        add_action('admin_init', [$this, 'removeUpdatePage']);
        add_action('admin_init', [$this, 'removeUpdateFooter']);
        add_action('admin_menu', [$this, 'removeUpdateNag']);
    }

    public function removeUpdateNotices()
    {
        global $wp_version;
        return(object) [
            'last_checked'=> time(),
            'version_checked'=> $wp_version,
            'updates' => []
        ];
    }

    public function removeUpdatePage()
    {
        remove_submenu_page('index.php', 'update-core.php');
    }

    public function removeUpdateFooter()
    {
        remove_filter('update_footer', 'core_update_footer');
    }

    public function removeUpdateNag()
    {
        remove_action('admin_notices', 'update_nag', 3);
    }
}
