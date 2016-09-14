<?php
/*
Plugin Name:        Intervention
Plugin URI:         http://github.com/soberwp/intervention
Description:        Modules for developers to help clean up and modify the WordPress backend.
Version:            1.0.0
Author:             Sober
Author URI:         http://github.com/soberwp/
License:            MIT License
License URI:        http://opensource.org/licenses/MIT
GitHub Plugin URI: soberwp/intervention
GitHub Branch:     master
*/
namespace Sober\Intervention;

foreach (glob(__DIR__ . '/lib/*.php') as $file) {
    require_once $file;
}

function intervention($module = false, $args = false, $roles = false)
{
    Module::setInstance($module, $args, $roles);
}

function autoloader()
{
    $modules = Module::getInitializedList();
    foreach (glob(__DIR__ . '/modules/*.php') as $file) {
        $module = Module::getFromFile($file);
        if (in_array($module, $modules)) {
            require_once $file;
        }
    }
}
add_action('after_setup_theme', __NAMESPACE__ . '\\autoloader', 100);
