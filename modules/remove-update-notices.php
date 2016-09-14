<?php namespace Sober\Intervention\RemoveUpdateNotice;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;

/**
 * Module: remove-update-notice
 *
 * Run function remove_updates_hook to remove toolbar item/s for user role/s.
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
$instances = Module::getInstances(__FILE__);
foreach ($instances as $instance) {
    // Instance config
    $config = Instance::getConfig($instance);
    $config = Instance::setDefaults(['all-not-admin'], $config);
    $config = Alias::addUserRoles($config);
    // Run instance
    foreach ($config as $role) {
        if (current_user_can($role)) {
            remove_updates_hook();
        }
    }
}

// Remove notices
function remove_update_notices()
{
    global $wp_version;
    return(object) [
        'last_checked'=> time(),
        'version_checked'=> $wp_version,
        'updates' => []
    ];
}

// Remove menu item
function remove_update_page()
{
    remove_submenu_page('index.php', 'update-core.php');
}

// Remove nag
function remove_update_nag()
{
    remove_action('admin_notices', 'update_nag', 3);
}

// Remove Hooks
function remove_updates_hook()
{
    add_filter('pre_site_transient_update_core', __NAMESPACE__ . '\\remove_update_notices');
    add_filter('pre_site_transient_update_plugins', __NAMESPACE__ . '\\remove_update_notices');
    add_filter('pre_site_transient_update_themes', __NAMESPACE__ . '\\remove_update_notices');
    add_action('admin_init', __NAMESPACE__ . '\\remove_update_page');
    add_action('admin_menu', __NAMESPACE__ . '\\remove_update_nag');
}
