<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\OptionsApi;
use Sober\Intervention\Support\Arr;

/**
 * Reading
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
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
    protected $api;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalize($config);
        $this->api = OptionsApi::set($this->config);
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('init', [$this, 'options']);
        add_action('admin_head-options-reading.php', [$this->api, 'disableKeys']);
    }

    /**
     * Options
     */
    public function options()
    {
        $this->api->saveKeys([
            'reading.posts-per-page',
            'reading.posts-per-rss',
        ]);

        // frontpage
        if ($this->config->has('reading.front-page') || $this->config->has('reading.front-page.posts')) {
            $value = $this->config->get('reading.front-page');
            $type = $value === 'posts' ? 'posts' : 'page';
            $this->api->save('reading.front-page', $type);

            if ($type === 'page') {
                $this->api->save('reading.front-page.page', $value);
            }

            if ($type === 'page' && $this->config->has('reading.front-page.posts')) {
                $this->api->save('reading.front-page.posts', $this->config->get('reading.front-page.posts'));
            }
        }

        // rss excerpt
        if ($this->config->has('reading.rss-excerpt')) {
            $rss = $this->config->get('reading.rss-excerpt');
            $rss_arr = [
                'full' => 0,
                'full-text' => 0,
                'summary' => 1,
            ];

            // return key/index of array item
            if (is_string($rss) && isset($rss_arr[$rss])) {
                $rss = $rss_arr[$rss];
            }

            $this->api->save('reading.rss-excerpt', $rss);
        }

        // discourage search
        if ($this->config->has('reading.discourage-search')) {
            $value = !$this->config->get('reading.discourage-search');
            $this->api->save('reading.discourage-search', $value);
        }
    }
}
