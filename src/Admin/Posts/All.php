<?php

namespace Sober\Intervention\Admin\Posts;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\Title;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Posts/All
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/functions/wp_dashboard_setup/
 * @link https://developer.wordpress.org/reference/hooks/disable_months_dropdown/
 *
 * @param
 * [
 *     'posts.all',
 *     'posts.all' => (string) $route,
 *     'posts.all.title' => (string) $title,
 *     'posts.all.title.[menu, page]' => (string) $title,
 *     'posts.all.title-link',
 *     'posts.all.tabs',
 *     'posts.all.tabs.[screen-options, help]',
 *     'posts.all.pagination' => (int) $pagination,
 *     'posts.all.search',
 *     'posts.all.subsets',
 *     'posts.all.subsets.[all, published, scheduled, draft, pending]',
 *     'posts.all.subsets.counts',
 *     'posts.all.actions',
 *     'posts.all.actions.bulk',
 *     'posts.all.filter',
 *     'posts.all.filter.[date, category]',
 *     'posts.all.list',
 *     'posts.all.list.cols',
 *     'posts.all.list.cols.[author, categories, tags, comments, date]',
 *     'posts.all.list.actions',
 *     'posts.all.list.actions.[edit, quick-edit, trash, view]',
 *     'posts.all.list.count',
 * ]
 */
class All
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

        $compose = $compose->has('posts.all.all')->add('posts.all.', [
            'title-link', 'tabs', 'pagination', 'search', 'subsets', 'actions', 'filter', 'list',
        ]);

        $compose = $compose->has('posts.all.title')->add('posts.all.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('posts.all.tabs')->add('posts.all.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('posts.all.actions')->add('posts.all.actions.', [
            'bulk',
        ]);

        $compose = $compose->has('posts.all.filter')->add('posts.all.filter.', [
            'date', 'category',
        ]);

        $compose = $compose->has('posts.all.list')->add('posts.all.list.', [
            'cols', 'actions', 'count',
        ]);

        $compose = $compose->has('posts.all.list.cols')->add('posts.all.list.cols.', [
            'author', 'categories', 'tags', 'comments', 'date',
        ]);

        $compose = $compose->has('posts.all.list.actions.quick-edit')->add('posts.all.list.actions.', [
            'inline hide-if-no-js',
        ]);

        $compose = $compose->has('posts.all.subsets.published')->add('posts.all.subsets.', [
            'publish',
        ]);

        $compose = $compose->has('posts.all.subsets.scheduled')->add('posts.all.subsets.', [
            'future',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('posts.all', $this->config);
        $shared->router();
        $shared->menu();

        if (isset($_GET['post_type']) && $_GET['post_type'] !== null) {
            return;
        }

        $checkbox = $this->config->has('posts.all.actions') || $this->config->has('posts.all.actions.bulk');

        $shared->title();
        $shared->tabs();
        $shared->pagination();
        $shared->search();
        $shared->subsets();
        $shared->actionBulk();
        $shared->lists($checkbox);

        if ($this->config->has('posts.all.filter.date')) {
            add_filter('disable_months_dropdown', '__return_true', 10, 2);
        }

        add_action('admin_head-edit.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('posts.all.filter.date')) {
            echo '<style>.edit-php #filter-by-date {display: none;}</style>';
        }

        if ($this->config->has('posts.all.filter.category')) {
            echo '<style>.edit-php #cat {display: none;}</style>';
        }

        if ($this->config->has('posts.all.filter.date') && $this->config->has('posts.all.filter.category')) {
            echo '<style>.edit-php #post-query-submit {display: none;}</style>';
        }
    }
}
