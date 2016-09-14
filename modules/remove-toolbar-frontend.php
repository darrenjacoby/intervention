<?php namespace Sober\Intervention\RemoveFrontendToolbar;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;
use Sober\Intervention\Util;

/**
 * Module: remove-toolbar-frontend
 *
 * Add filter to return false for show_admin_bar for user role/s.
 *
 * @example intervention('remove-toolbar-frontend', $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/functions/show_admin_bar/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
$instances = Module::getInstances(__FILE__);
foreach ($instances as $instance) {
    // Instance config
    $config = Instance::getConfig($instance);
    $config = Instance::setDefaults(Util::toArray('all'), $config);
    $config = Alias::addUserRoles($config);
    // Run instance
    foreach ($config as $role) {
        if (current_user_can($role)) {
            add_filter('show_admin_bar', '__return_false');
        }
    }
}
