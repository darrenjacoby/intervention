<?php namespace Sober\Intervention\RemoveDefaultTaxonomies;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;
use Sober\Intervention\Util;

/**
 * Module: remove-default-taxonomies
 *
 * Hooks into init to remove default taxonomies.
 *
 * @example intervention('remove-taxonomies', $taxonomies(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/functions/taxonomy_exists/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('init', function () {
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        // Instance config
        $config = Instance::getConfig($instance);
        $config = Instance::setDefaults(Util::toArray('all'), $config);
        $config = Alias::addTaxTag($config);
        $taxonomies = ['category', 'post_tag'];
        // Run instance
        global $wp_taxonomies;
        if (in_array('all', $config)) {
            foreach ($taxonomies as $taxonomy) {
                if (taxonomy_exists($taxonomy)) {
                    unset($wp_taxonomies[$taxonomy]);
                }
            }
        } else {
            foreach ($config as $taxonomy) {
                if (taxonomy_exists($taxonomy)) {
                    unset($wp_taxonomies[$taxonomy]);
                }
            }
        }
    }
});
