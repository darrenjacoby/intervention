<?php namespace Sober\Intervention\UpdateLabelPost;

use Sober\Intervention\Module;
use Sober\Intervention\Instance;
use Sober\Intervention\Label;

/**
 * Module: update-label-post
 *
 * Hooks into admin_menu to change post label/s and dashicon/s.
 *
 * @example intervention('update-label-post', $labels(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/hooks/admin_menu/
 * @link https://codex.wordpress.org/Global_Variables
 * @link https://developer.wordpress.org/resource/dashicons/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('init', function () {
    // Instance config
    $instance = Module::getInstances(__FILE__, false);
    $config = Instance::getConfig($instance);
    // Run instance
    Label::setLabels('post', $config);
});

add_action('admin_menu', function () {
    // Instance config
    $instance = Module::getInstances(__FILE__, false);
    $config = Instance::getConfig($instance);
    // Run instance
    Label::setIcon('post', $config);
});
