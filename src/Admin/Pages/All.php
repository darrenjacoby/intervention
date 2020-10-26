<?php

namespace Sober\Intervention\Admin\Pages;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\Title;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Pages/All
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/hooks/disable_months_dropdown/
 *
 * @param
 * [
 *     'pages.all',
 *     'pages.all' => (string) $route,
 *     'pages.all.title' => (string) $title,
 *     'pages.all.title.[menu, page]' => (string) $title,
 *     'pages.all.title-link',
 *     'pages.all.tabs',
 *     'pages.all.tabs.[screen-options, help]',
 *     'pages.all.pagination' => (int) $pagination,
 *     'pages.all.search',
 *     'pages.all.subsets',
 *     'pages.all.subsets.[all, published, scheduled, draft, pending]',
 *     'pages.all.subsets.counts',
 *     'pages.all.actions',
 *     'pages.all.actions.bulk',
 *     'pages.all.filter',
 *     'pages.all.filter.date',
 *     'pages.all.list',
 *     'pages.all.list.cols',
 *     'pages.all.list.cols.[author, comments, date]',
 *     'pages.all.list.actions',
 *     'pages.all.list.actions.[edit, quick-edit, trash, view]',
 *     'pages.all.list.count',
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

        $compose = $compose->has('pages.all.all')->add('pages.all.', [
            'title-link', 'tabs', 'pagination', 'search', 'subsets', 'actions', 'filter', 'list',
        ]);

        $compose = $compose->has('pages.all.title')->add('pages.all.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('pages.all.tabs')->add('pages.all.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('pages.all.actions')->add('pages.all.actions.', [
            'bulk',
        ]);

        $compose = $compose->has('pages.all.filter')->add('pages.all.filter.', [
            'date',
        ]);

        $compose = $compose->has('pages.all.list')->add('pages.all.list.', [
            'cols', 'actions', 'count',
        ]);

        $compose = $compose->has('pages.all.list.cols')->add('pages.all.list.cols.', [
            'author', 'comments', 'date',
        ]);

        $compose = $compose->has('pages.all.list.actions.quick-edit')->add('pages.all.list.actions.', [
            'inline hide-if-no-js',
        ]);

        $compose = $compose->has('pages.all.subsets.published')->add('pages.all.subsets.', [
            'publish',
        ]);

        $compose = $compose->has('pages.all.subsets.scheduled')->add('pages.all.subsets.', [
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
        $shared = SharedApi::set('pages.all', $this->config);
        $shared->router();

        if (!isset($_GET['post_type'])) {
            return;
        }

        if ($_GET['post_type'] !== 'page') {
            return;
        }

        $checkbox = $this->config->has('pages.all.actions') || $this->config->has('pages.all.actions.bulk');
        $shared->title();
        $shared->tabs();
        $shared->pagination();
        $shared->search();
        $shared->subsets();
        $shared->actionBulk();
        $shared->lists($checkbox);

        if ($this->config->has('pages.all.filter.date')) {
            add_filter('disable_months_dropdown', '__return_true', 10, 2);
        }

        add_action('admin_head-edit.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('pages.all.filter.date')) {
            echo '<style>.edit-php #filter-by-date {display: none;}</style>';
        }

        if ($this->config->has('pages.all.filter.category')) {
            echo '<style>.edit-php #cat {display: none;}</style>';
        }

        if ($this->config->has('pages.all.filter.date') && $this->config->has('pages.all.filter.category')) {
            echo '<style>.edit-php #post-query-submit {display: none;}</style>';
        }
    }
}
