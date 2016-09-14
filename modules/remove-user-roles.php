<?php namespace Sober\Intervention\RemoveUserRoles;

use Sober\Intervention\Module;
use Sober\Intervention\Instance;
use Sober\Intervention\Util;
use Sober\Intervention\Alias;

/**
 * Module: remove-user-roles
 *
 * Filters editable_roles to remove user role/s.
 *
 * @example intervention('remove-user-roles', $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/editable_roles/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_filter('editable_roles', function ($roles) {
    // Instance config
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
      $config = Instance::getConfig($instance);
      $config = Instance::setDefaults(['author', 'subscriber', 'contributor'], $config);
      $config = Alias::addUserRoles($config);
      // Run instance
      foreach ($config as $role) {
          if (isset($roles[$role])) {
              unset($roles[$role]);
          }
      }
      return $roles;
    }
});
