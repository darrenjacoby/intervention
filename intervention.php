<?php
/*
Plugin Name:        Intervention
Plugin URI:         http://github.com/soberwp/intervention
Description:        Lightweight WordPress plugin containing modules to cleanup and customize wp-admin easily.
Version:            1.0.1
Author:             Sober
Author URI:         http://github.com/soberwp/
License:            MIT License
License URI:        http://opensource.org/licenses/MIT
GitHub Plugin URI:  soberwp/intervention
GitHub Branch:      master
*/
namespace Sober\Intervention;

/**
 * Restrict direct access to file
 */
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Require Composer PSR-4 autoloader, fallback dist/autoload.php
 */
if (file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
    require $composer;
} else {
    require __DIR__ . '/dist/autoload.php';
}

/**
 * Setup $loader object from function intervention
 *
 * @param string $module
 * @param string|array $config
 * @param string|array $roles
 */
function intervention($module = false, $config = false, $roles = false)
{
    $class = __NAMESPACE__ . '\Module\\' . str_replace('-', '', ucwords($module, '-'));
    $instance = (new $class($config, $roles))->run();
}
