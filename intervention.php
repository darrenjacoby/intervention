<?php
/*
Plugin Name:        Intervention
Plugin URI:         http://github.com/soberwp/intervention
Description:        Easily customize wp-admin and configure application options.
Version:            2.0.0-rc.2
Author:             Sober
Author URI:         http://github.com/soberwp/
License:            MIT License
License URI:        http://opensource.org/licenses/MIT
GitHub Plugin URI:  soberwp/intervention
GitHub Branch:      master
*/
namespace Sober\Intervention;

/**
 * Restrict direct access
 */
if (!defined('ABSPATH')) {
    die;
};

define('INTERVENTION_DIR', dirname(__FILE__));

/**
 * Support for Bedrock/Composer
 */
include file_exists($composer = __DIR__ . '/vendor/autoload.php') ? $composer : __DIR__ . '/dist/autoload.php';

/**
 * Return user config for Intervention
 */
function get()
{
    $theme = get_stylesheet_directory();

    $default = file_exists($theme . '/config/') ?
        $theme . '/config/intervention.php' :
        $theme . '/intervention.php';

    $config = has_filter('sober/intervention/return') ?
        apply_filters('sober/intervention/return', rtrim($path)) :
        $default;

    if (!file_exists($config)) {
        return;
    }

    $read = include($config);

    return $read === 1 ? false : $read;
}

/**
 * Initialize
 */
$intervention = new Intervention(get());
