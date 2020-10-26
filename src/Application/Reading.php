<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Admin;
use Sober\Intervention\Support\Arr;

/**
 * Reading
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/functions/update_option/
 *
 * @param
 * [
 *     'reading.front-page' => (string|int) 'post'|$page_id,
 *     'reading.front-page.posts' => (string) $page_id_for_posts,
 *     'reading.posts-per-page' => (int) $posts_per_page,
 *     'reading.posts-per-rss' => (string) $posts_per_rss,
 *     'reading.rss-excerpt' => (string) 'full'|'summary'
 *     'reading.discourage-search' => (boolean) $show_in_search
 * ];
 */
class Reading
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalize($config);
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('init', [$this, 'options']);
        
        $this->admin();
    }

    /**
     * Options
     */
    public function options()
    {
        // Front Page
        if ($this->config->has('reading.front-page') || $this->config->has('reading.front-page.posts')) {
            $value = $this->config->get('reading.front-page');
            $type = $value === 'posts' ? 'posts' : 'page';
            update_option('show_on_front', $type);

            if ($type === 'page') {
                update_option('page_on_front', $value);
            }

            if ($type === 'page' && $this->config->has('reading.front-page.posts')) {
                update_option('page_for_posts', $this->config->get('reading.front-page.posts'));
            }
        }

        // Posts Per Page
        if ($this->config->has('reading.posts-per-page')) {
            update_option('posts_per_page', $this->config->get('reading.posts-per-page'));
        }

        // Posts Per RSS
        if ($this->config->has('reading.posts-per-rss')) {
            update_option('posts_per_rss', $this->config->get('reading.posts-per-rss'));
        }

        // RSS Excerpt
        if ($this->config->has('reading.rss-excerpt')) {
            $rss = $this->config->get('reading.rss-excerpt');
            $rss_arr = [
                'full' => 0,
                'full-text' => 0,
                'summary' => 1,
            ];

            // Return key/index of array item
            if (is_string($rss) && isset($rss_arr[$rss])) {
                $rss = $rss_arr[$rss];
            }

            update_option('rss_use_excerpt', $rss);
        }

        // Discourage Search
        if ($this->config->has('reading.discourage-search')) {
            update_option('blog_public', !$this->config->get('reading.discourage-search'));
        }
    }

    /**
     * Admin
     */
    public function admin()
    {
        if ($this->config->has('reading.front-page')) {
            Admin::set('settings.reading', ['front-page']);
        }

        if ($this->config->has('reading.front-page.posts')) {
            Admin::set('settings.reading', ['front-page.posts']);
        }

        if ($this->config->has('reading.posts-per-page')) {
            Admin::set('settings.reading', ['posts-per-page']);
        }

        if ($this->config->has('reading.posts-per-rss')) {
            Admin::set('settings.reading', ['posts-per-rss']);
        }

        if ($this->config->has('reading.rss-excerpt')) {
            Admin::set('settings.reading', ['rss-excerpt']);
        }

        if ($this->config->has('reading.discourage-search')) {
            Admin::set('settings.reading', ['discourage-search']);
        }
    }
}
