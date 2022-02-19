<?php

namespace Jacoby\Intervention\Admin\Plugins;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Admin\Support\Title;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Plugins/All
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/bulk_actions-this-screen-id/
 * @link https://developer.wordpress.org/reference/hooks/plugin_row_meta/
 *
 * @param
 * [
 *     'plugins.all',
 *     'plugins.all' => (string) $route,
 *     'plugins.all.title' => (string) $title,
 *     'plugins.all.title.[menu, page]' => (string) $title,
 *     'plugins.all.title-link',
 *     'plugins.all.tabs',
 *     'plugins.all.tabs.[screen-options, help]',
 *     'plugins.all.pagination' => (int) $pagination,
 *     'plugins.all.search',
 *     'plugins.all.subsets',
 *     'plugins.all.subsets.[all, active, inactive, auto-updates-disabled]',
 *     'plugins.all.subsets.counts',
 *     'plugins.all.actions',
 *     'plugins.all.actions.[activate, deactivate, update, delete, enable-auto-update, disable-auto-update]',
 *     'plugins.all.list',
 *     'plugins.all.list.cols',
 *     'plugins.all.list.cols.[description, auto-updates]',
 *     'plugins.all.list.meta',
 *     'plugins.all.list.meta.[version, author, link]',
 *     'plugins.all.list.actions',
 *     'plugins.all.list.actions.[activate, deactivate, delete]',
 *     'plugins.all.list.count',
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
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('plugins.all.all')->add('plugins.all.', [
            'title-link', 'tabs', 'pagination', 'search', 'subsets', 'actions', 'list',
        ]);

        $compose = $compose->has('plugins.all.title')->add('plugins.all.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('plugins.all.tabs')->add('plugins.all.tabs.', [
            'screen-options', 'help',
        ]);

        /**
         * $compose = $compose->has('plugins.all.actions')->add('plugins.all.actions.', [
         *   'activate', 'deactivate', 'update', 'delete', 'enable-auto-update', 'disable-auto-update',
         * ]);
         */

        $compose = $compose->has('plugins.all.list')->add('plugins.all.list.', [
            'cols', 'actions', 'count',
        ]);

        $compose = $compose->has('plugins.all.list.cols')->add('plugins.all.list.cols.', [
            'description', 'auto-updates',
        ]);

        $compose = $compose->has('plugins.all.subsets.auto-updates-disabled')->add('plugins.all.subsets.', [
            'auto-update-disabled',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $checkbox = $this->config->has('plugins.all.actions');

        $shared = SharedApi::set('plugins.all', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();
        $shared->pagination();
        $shared->search();
        $shared->subsets();
        $shared->actionBulk();
        $shared->lists($checkbox);

        add_filter('bulk_actions-plugins', [$this, 'bulk'], 10, 2);
        add_filter('plugin_row_meta', [$this, 'meta'], 10, 2);
    }

    /**
     * Bulk
     *
     * @param array $actions
     * @return array
     */
    public function bulk($actions)
    {
        if ($this->config->has('plugins.all.actions.activate')) {
            unset($actions['activate-selected']);
        }

        if ($this->config->has('plugins.all.actions.deactivate')) {
            unset($actions['deactivate-selected']);
        }

        if ($this->config->has('plugins.all.actions.update')) {
            unset($actions['update-selected']);
        }

        if ($this->config->has('plugins.all.actions.delete')) {
            unset($actions['delete-selected']);
        }

        if ($this->config->has('plugins.all.actions.enable-auto-update')) {
            unset($actions['enable-auto-update-selected']);
        }

        if ($this->config->has('plugins.all.actions.disable-auto-update')) {
            unset($actions['disable-auto-update-selected']);
        }

        if ($this->config->has('plugins.all.actions')) {
            return [];
        }

        return $actions;
    }

    /**
     * Meta
     *
     * @param array $links
     * @return array
     */
    public function meta($links)
    {
        if ($this->config->has('plugins.all.list.meta.version')) {
            unset($links[0]);
        }

        if ($this->config->has('plugins.all.list.meta.author')) {
            unset($links[1]);
        }

        if ($this->config->has('plugins.all.list.meta.link')) {
            unset($links[2]);
        }

        if ($this->config->has('plugins.all.list.meta')) {
            return [];
        }

        return $links;
    }
}
