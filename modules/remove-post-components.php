<?php namespace Sober\Intervention\RemovePostSupport;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;

/**
 * Module: remove-post-components
 *
 * Hooks into admin_init to remove post component/s.
 *
 * @example intervention('remove-post-components', $components(string|array));
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
        $type = 'post';
        $config = Instance::getConfig($instance);
        $config = Instance::setDefaults(['author', 'excerpt', 'trackbacks', 'custom-fields', 'comments'], $config);
        $components = ['editor', 'author', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'slug', 'revisions', 'thumbnail'];
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
