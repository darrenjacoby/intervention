<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

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
class RemoveWidgets extends Instance
{
    public function run()
    {
        $this->setup();
        $this->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig('all');
    }

    protected function hook()
    {
        add_action('widgets_init', [$this, 'removeWidgets']);
    }

    public function removeWidgets()
    {
        if (in_array('pages', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Pages');
        }
        if (in_array('calendar', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Calendar');
        }
        if (in_array('archives', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Archives');
        }
        if (in_array('links', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Links');
        }
        if (in_array('meta', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Meta');
        }
        if (in_array('search', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Search');
        }
        if (in_array('text', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Text');
        }
        if (in_array('categories', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Categories');
        }
        if (in_array('recent-posts', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Recent_Posts');
        }
        if (in_array('recent-comments', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Recent_Comments');
        }
        if (in_array('rss', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_RSS');
        }
        if (in_array('tag-cloud', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Widget_Tag_Cloud');
        }
        if (in_array('custom-menu', $this->config) || in_array('all', $this->config)) {
            unregister_widget('WP_Nav_Menu_Widget');
        }
    }
}
