<?php namespace Sober\Intervention\RemoveHowdy;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Util;

/**
 * Module: remove-howdy
 *
 * Hooks into wp_before_admin_bar_render to remove/replace howdy.
 *
 * @example intervention('remove-howdy', $replace(string));
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_before_admin_bar_render/
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/get_node/
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/add_node/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('wp_before_admin_bar_render', function () {
    // Instance config
    $instance = Module::getInstances(__FILE__, false);
    $replace = Util::escapeArray(Instance::getConfig($instance));
    // Run instance
    global $wp_admin_bar;
    $account = $wp_admin_bar->get_node('my-account');
    $title = str_replace('Howdy,', $replace, $account->title);
    $wp_admin_bar->add_node([
        'id' => 'my-account',
        'title' => $title
    ]);
});
