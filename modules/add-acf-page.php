<?php namespace Sober\Intervention\AddAcfPage;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;
use Sober\Intervention\Util;

/**
 * Module: add-acf-page
 *
 * Uses Advanced Custom Fields function acf_add_options_page to add an options page.
 *
 * @example intervention('add-acf-page', $config(string|array), $roles(string|array));
 *
 * @link https://www.advancedcustomfields.com/resources/acf_add_options_page/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */

$instances = Module::getInstances(__FILE__);
foreach ($instances as $instance) {
    // Instance config
    $config = Instance::getConfig($instance);
    $config = Instance::setDefaults([], $config);
    if (Util::isArrayValueSet(0, $config)) {
        $config = Util::escapeArray($config);
        $config = [
            'page_title' => $config,
            'menu_title' => $config,
            'menu_slug'  => strtolower(str_replace(' ', '_', $config))
        ];
    }
    // Instance roles
    $roles = Instance::getRoles($instance);
    $roles = Instance::setDefaults(Util::toArray(['admin', 'editor']), $roles);
    $roles = Alias::addUserRoles($roles);
    // Run instance
    foreach ($roles as $role) {
        if (current_user_can($role)) {
            if (function_exists('acf_add_options_page')) {
                acf_add_options_page($config);
            }
        }
    }
}
