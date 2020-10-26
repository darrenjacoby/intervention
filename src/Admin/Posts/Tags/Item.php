<?php

namespace Sober\Intervention\Admin\Posts\Tags;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Posts/Tags/Item
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'posts.tags.item',
 *     'posts.tags.item' => (string) $route,
 *     'posts.tags.item.title' => (string) $title,
 *     'posts.tags.item.title.page' => (string) $title,
 *     'posts.tags.item.slug',
 *     'posts.tags.item.parent',
 *     'posts.tags.item.description',
 * ]
 */
class Item
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

        $compose = $compose->has('posts.tags.item.all')->add('posts.tags.item.', [
            'slug', 'parent', 'description',
        ]);

        $compose = $compose->has('posts.tags.item.title')->add('posts.tags.item.title.', [
            'page',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('posts.tags.item', $this->config);
        $shared->router();
        $shared->title();

        if (!isset($_GET['taxonomy'])) {
            return;
        }

        if ($_GET['taxonomy'] !== 'post_tag') {
            return;
        }

        add_action('admin_head-edit-tags.php', [$this, 'headAll']);
        add_action('admin_head-term.php', [$this, 'headItem']);
    }

    /**
     * Head All
     */
    public function headAll()
    {
        if ($this->config->has('posts.tags.item.slug')) {
            echo '<style>.edit-tags-php .term-slug-wrap {display: none;}</style>';
        }

        if ($this->config->has('posts.tags.item.parent')) {
            echo '<style>.edit-tags-php .term-parent-wrap {display: none;}</style>';
        }

        if ($this->config->has('posts.tags.item.description')) {
            echo '<style>.edit-tags-php .term-description-wrap {display: none;}</style>';
        }
    }

    /**
     * Head Single
     */
    public function headItem()
    {
        if ($this->config->has('posts.tags.item.slug')) {
            echo '<style>.term-php .term-slug-wrap {display: none;}</style>';
        }

        if ($this->config->has('posts.tags.item.parent')) {
            echo '<style>.term-php .term-parent-wrap {display: none;}</style>';
        }

        if ($this->config->has('posts.tags.item.description')) {
            echo '<style>.term-php .term-description-wrap {display: none;}</style>';
        }
    }
}
