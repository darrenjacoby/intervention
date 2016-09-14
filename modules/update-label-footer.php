<?php namespace Sober\Intervention\UpdateLabelFooter;

use Sober\Intervention\Module;
use Sober\Intervention\Instance;
use Sober\Intervention\Util;

/**
 * Module: update-label-footer
 *
 * Filters admin_footer_text to change footer label.
 *
 * @example intervention('update-label-footer', $label(string));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_footer_text/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_filter('admin_footer_text', function () {
    // Instance config
    $instance = Module::getInstances(__FILE__, false);
    // Run instance
    return Util::escapeArray(Instance::getConfig($instance));
});
