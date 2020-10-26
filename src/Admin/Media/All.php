<?php

namespace Sober\Intervention\Admin\Media;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\Title;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Media/All
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/hooks/disable_months_dropdown/
 * @link https://developer.wordpress.org/reference/hooks/bulk_actions-this-screen-id/
 * @link https://developer.wordpress.org/reference/hooks/media_row_actions/
 * @link https://developer.wordpress.org/reference/hooks/manage_screen-id_columns/
 *
 * @param
 * [
 *     'media.all',
 *     'media.all' => (string) $route,
 *     'media.all.title' => (string) $title,
 *     'media.all.title.[menu, page]' => (string) $title,
 *     'media.all.title-link',
 *     'media.all.tabs',
 *     'media.all.tabs.[screen-options, help]',
 *     'media.all.pagination' => (int) $pagination,
 *     'media.all.search',
 *     'media.all.mode',
 *     'media.all.mode' => (string) 'grid' or 'list',
 *     'media.all.filter',
 *     'media.all.filter.[type, date]',
 *     'media.all.actions',
 *     'media.all.list',
 *     'media.all.list.cols',
 *     'media.all.list.cols.[author, uploaded-to, comments, date]',
 *     'media.all.list.actions',
 *     'media.all.list.actions.[edit, delete, view]',
 *     'media.all.list.count',
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

        $compose = $compose->has('media.all.all')->add('media.all.', [
            'title-link', 'tabs', 'pagination', 'search', 'mode', 'filter', 'actions', 'list',
        ]);

        $compose = $compose->has('media.all.title')->add('media.all.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('media.all.tabs')->add('media.all.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('media.all.actions')->add('media.all.actions.', [
            'bulk',
        ]);

        $compose = $compose->has('media.all.filter')->add('media.all.filter.', [
            'type', 'date',
        ]);

        $compose = $compose->has('media.all.list')->add('media.all.list.', [
            'cols', 'actions', 'count',
        ]);

        $compose = $compose->has('media.all.list.cols')->add('media.all.list.cols.', [
            'author', 'parent', 'comments', 'date',
        ]);

        $compose = $compose->has('media.all.list.cols.uploaded-to')->add('media.all.list.cols.', [
            'parent',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $checkbox = $this->config->has('media.all.actions') || $this->config->has('media.all.actions.bulk');

        $shared = SharedApi::set('media.all', $this->config);
        $shared->router();
        $shared->title();
        $shared->tabs();
        $shared->pagination();
        $shared->search();
        $shared->actionBulk();
        $shared->lists($checkbox);

        if ($this->config->has('media.all.filter.date')) {
            add_filter('disable_months_dropdown', '__return_true', 10, 2);
        }

        add_action('admin_init', [$this, 'init']);
        add_action('admin_head-upload.php', [$this, 'head']);
    }

    /**
     * Init
     */
    public function init()
    {
        if ($this->config->has('media.all.mode')) {
            $mode = $this->config->get('media.all.mode');

            if ($mode === 'grid' || $mode === 'list') {
                $_GET['mode'] = $mode;
            }
        }
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('media.all.filter.date')) {
            echo '<style>.upload-php #media-attachment-date-filters {display: none;}</style>';
        }

        if ($this->config->has('media.all.filter.type')) {
            echo '<style>.upload-php #attachment-filter, #media-attachment-filters {display: none;}</style>';
        }

        if ($this->config->has('media.all.filter.date') && $this->config->has('media.all.filter.type')) {
            echo '<style>.upload-php #post-query-submit, .wp-filter button.media-button {display: none;}</style>';
        }

        if ($this->config->has('media.all.mode')) {
            echo '
            <style>
                .upload-php .wp-filter .view-switch {margin: 0;}
                .upload-php .wp-filter .view-switch a {width: 0px; overflow: hidden;}
            </style>';
        }

        if ($this->config->has('media.all.mode') && $this->config->has('media.all.filter') && $this->config->has('media.all.search')) {
            echo '<style>.upload-php .wp-filter {display: none;}</style>';
        }
    }
}
