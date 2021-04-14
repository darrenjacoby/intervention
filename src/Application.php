<?php

namespace Sober\Intervention;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Routes;

/**
 * Application
 *
 * Programmatic API for application.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Application
{
    protected $key;
    protected $config;

    /**
     * Set
     */
    public static function set($key = false, $config = false)
    {
        return new self($key, $config);
    }

    /**
     * Construct
     *
     * @param array $config
     */
    public function __construct($key = false, $config = false)
    {
        $this->key = $key;

        // `::set()` shorthand is used
        if ($config) {
            $this->init($config);
            add_filter('pre_update_option', [$this, 'optionIntToString'], 10, 2);
        }
    }

    /**
     * Init
     *
     * Direct routing to avoid action required for config file
     *
     * @param array $config
     */
    public function init($config = false)
    {
        $this->config = Arr::normalize([$this->key => $config]);

        Routes::set('application')->map(function ($class, $k) {
            (new Intervention())->init($this->config, $class, $k);
        });
    }

    /**
     * Option int to string
     *
     * Prevent DB update some options on every page load.
     *
     * update_option() strict compare $value === $old_value before update
     * but $old_value from DB is string so always return false.
     *
     * @param  mixed $value
     * @param  string $option
     * @return mixed
     */
    public function optionIntToString($value, $option)
    {
        $string_options = [
            // absint( $value )
            'thumbnail_size_w',
            'thumbnail_size_h',
            'medium_size_w',
            'medium_size_h',
            'medium_large_size_w',
            'medium_large_size_h',
            'large_size_w',
            'large_size_h',
            'mailserver_port',
            'comment_max_links',
            'page_on_front',
            'page_for_posts',
            'rss_excerpt_length',
            'default_category',
            'default_email_category',
            'default_link_category',
            'close_comments_days_old',
            'comments_per_page',
            'thread_comments_depth',
            'users_can_register',
            'start_of_week',
            'site_icon',
            // (int) $value
            'blog_public',
            'default_post_format',
            'posts_per_page',
            'posts_per_rss',
            'rss_use_excerpt',
        ];

        return in_array($option, $string_options) ? "$value" : $value;
    }
}
