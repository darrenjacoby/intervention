<?php namespace Sober\Intervention\RemoveWidgets;

use Sober\Intervention\Module;
use Sober\Intervention\Instance;
use Sober\Intervention\Util;
use Sober\Intervention\Alias;

/**
 * Module: remove-widgets
 *
 * Hooks into widgets_init to remove widget item/s for user role/s.
 *
 * @example intervention('remove-widgets', $widgets(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/widgets_init/
 * @link https://developer.wordpress.org/reference/functions/unregister_widget/
 * @link https://developer.wordpress.org/reference/functions/current_user_can/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('widgets_init', function () {
    // Instance config
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        // Instance config
        $config = Instance::getConfig($instance);
        $config = Instance::setDefaults(Util::toArray('all'), $config);

        if (in_array('pages', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Pages');
        }
        if (in_array('calendar', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Calendar');
        }
        if (in_array('archives', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Archives');
        }
        if (in_array('links', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Links');
        }
        if (in_array('meta', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Meta');
        }
        if (in_array('search', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Search');
        }
        if (in_array('text', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Text');
        }
        if (in_array('categories', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Categories');
        }
        if (in_array('recent-posts', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Recent_Posts');
        }
        if (in_array('recent-comments', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Recent_Comments');
        }
        if (in_array('rss', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_RSS');
        }
        if (in_array('tag-cloud', $config) || in_array('all', $config)) {
            unregister_widget('WP_Widget_Tag_Cloud');
        }
        if (in_array('custom-menu', $config) || in_array('all', $config)) {
            unregister_widget('WP_Nav_Menu_Widget');
        }
    }
});
