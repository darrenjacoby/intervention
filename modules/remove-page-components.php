<?php namespace Sober\Intervention\RemovePageSupport;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;

/**
 * Module: remove-page-components
 *
 * Hooks into admin_init to remove page component/s.
 *
 * @example intervention('remove-page-components', $components(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/functions/remove_post_type_support/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('admin_init', function () {
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        // Instance config
        $type = 'page';
        $config = Instance::getConfig($instance);
        $config = Instance::setDefaults(['author', 'thumbnail', 'page-attributes', 'custom-fields', 'comments'], $config);
        $components = ['editor', 'author', 'thumbnail', 'page-attributes', 'custom-fields', 'comments'];
        // Run instance
        if (in_array('all', $config)) {
            foreach ($components as $component) {
                remove_post_type_support($type, $component);
            }
        } else {
            foreach ($config as $component) {
                remove_post_type_support($type, $component);
            }
        }
    }
});
