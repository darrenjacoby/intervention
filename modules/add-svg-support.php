<?php namespace Sober\Intervention\AddSvgSupport;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;

/**
 * Module: add-svg-support
 *
 * Filters upload_mimes to add svg file support for user role/s.
 *
 * @example intervention('add-svg-support', $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/upload_mimes/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
$instances = Module::getInstances(__FILE__);
foreach ($instances as $instance) {
    // Instance config
    $config = Instance::getConfig($instance);
    $config = Instance::setDefaults(['admin', 'editor', 'author'], $config);
    $config = Alias::addUserRoles($config);
    // Run instance
    foreach ($config as $role) {
        if (current_user_can($role)) {
            add_filter('upload_mimes', function ($mimes) {
                $mimes['svg'] = 'image/svg+xml';
                return $mimes;
            });
        }
    }
}
