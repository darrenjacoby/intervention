<?php

namespace Sober\Intervention\Admin\Posts\Categories;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Posts/Categories/Item
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'posts.categories.item',
 *     'posts.categories.item' => (string) $route,
 *     'posts.categories.item.title' => (string) $title,
 *     'posts.categories.item.title.page' => (string) $title,
 *     'posts.categories.item.slug',
 *     'posts.categories.item.parent',
 *     'posts.categories.item.description',
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
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('posts.categories.item.all')->add('posts.categories.item.', [
            'slug', 'parent', 'description',
        ]);

        $compose = $compose->has('posts.categories.item.title')->add('posts.categories.item.title.', [
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
        $shared = SharedApi::set('posts.categories.item', $this->config);
        $shared->router();
        $shared->menu();

        if (!isset($_GET['taxonomy'])) {
            return;
        }

        if ($_GET['taxonomy'] !== 'category') {
            return;
        }

        $shared->title();

        add_action('admin_head-edit-tags.php', [$this, 'headAll']);
        add_action('admin_head-term.php', [$this, 'headItem']);
    }

    /**
     * Head All
     */
    public function headAll()
    {
        if ($this->config->has('posts.categories.item.slug')) {
            echo '<style>.edit-tags-php .term-slug-wrap {display: none;}</style>';
        }

        if ($this->config->has('posts.categories.item.parent')) {
            echo '<style>.edit-tags-php .term-parent-wrap {display: none;}</style>';
        }

        if ($this->config->has('posts.categories.item.description')) {
            echo '<style>.edit-tags-php .term-description-wrap {display: none;}</style>';
        }
    }

    /**
     * Head Item
     */
    public function headItem()
    {
        if ($this->config->has('posts.categories.item.slug')) {
            echo '<style>.term-php .term-slug-wrap {display: none;}</style>';
        }

        if ($this->config->has('posts.categories.item.parent')) {
            echo '<style>.term-php .term-parent-wrap {display: none;}</style>';
        }

        if ($this->config->has('posts.categories.item.description')) {
            echo '<style>.term-php .term-description-wrap {display: none;}</style>';
        }
    }
}
