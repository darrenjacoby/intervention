<?php

namespace Sober\Intervention\Admin\Settings;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Settings/Reading
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'settings.reading',
 *     'settings.reading' => (string) $route,
 *     'settings.reading.title' => (string) $title,
 *     'settings.reading.title.[menu, page]' => (string) $title,
 *     'settings.reading.tabs',
 *     'settings.reading.tabs.[screen-options, help]',
 *     'settings.reading.front-page',
 *     'settings.reading.front-page.posts',
 *     'settings.reading.posts-per-page',
 *     'settings.reading.posts-per-rss',
 *     'settings.reading.rss-excerpt',
 *     'settings.reading.discourage-search',
 * ]
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
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('settings.reading.all')->add('settings.reading.', [
            'tabs', 'front-page', 'posts-per-page', 'posts-per-rss', 'rss-excerpt', 'discourage-search',
        ]);

        $compose = $compose->has('settings.reading.title')->add('settings.reading.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('settings.reading.tabs')->add('settings.reading.tabs.', [
            'screen-options', 'help',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('settings.reading', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-options-reading.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('settings.reading.front-page')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#front-static-pages").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.reading.front-page.posts')) {
            echo
                '<script>
                jQuery(document).ready(function() {
                    jQuery("#front-static-pages input[value=posts").parents("p").remove();
                    jQuery("#front-static-pages label[for=page_for_posts").parents("li").remove();
                });
            </script>';
        }

        if ($this->config->has('settings.reading.posts-per-page')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#posts_per_page").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.reading.posts-per-rss')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#posts_per_rss").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.reading.rss-excerpt')) {
            echo '<script>jQuery(document).ready(function() {jQuery("input[name=rss_use_excerpt]").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.reading.discourage-search')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#blog_public").parents("tr").remove()});</script>';
        }
    }
}
