<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Admin\Support\All\ActionBulk;
use Jacoby\Intervention\Admin\Support\All\Lists\Actions as ListActions;
use Jacoby\Intervention\Admin\Support\All\Lists\Columns as ListColumns;
use Jacoby\Intervention\Admin\Support\All\Lists\Count as ListCount;
use Jacoby\Intervention\Admin\Support\All\Pagination;
use Jacoby\Intervention\Admin\Support\All\Search;
use Jacoby\Intervention\Admin\Support\All\Subsets;
use Jacoby\Intervention\Admin\Support\Menu;
use Jacoby\Intervention\Admin\Support\Router;
use Jacoby\Intervention\Admin\Support\Tabs;
use Jacoby\Intervention\Admin\Support\Title;
use Jacoby\Intervention\Support\Composer;
use Jacoby\Intervention\Support\Config;

/**
 * Shared API
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     '{key}.icon' => (string) $dashicon,
 *     '{key}.title' => (string) $title,
 *     '{key}.title.menu' => (string) $menu_title,
 *     '{key}.title.page' => (string) $page_title,
 *     '{key}.tabs',
 *     '{key}.pagination => (int) $pagination,
 *     '{key}.subsets',
 *     '{key}.list.actions',
 *     '{key}.list.cols',
 *     '{key}.list.count',
 *     '{key}.actions.bulk',
 *     '{key}.search',
 * ]
 */
class SharedApi
{
    protected $key;
    protected $config;
    // protected $screen;

    /**
     * Interface
     *
     * @param string $key
     * @return Jacoby\Intervention\Admin\Support\SharedApi
     */
    public static function set($key = false, $config = false)
    {
        return new self($key, $config);
    }

    /**
     * Initialize
     *
     * @param string $key
     */
    public function __construct($key = false, $config = false)
    {
        $this->key = $key;
        $this->config = $config;
        // $this->screen = Config::get('admin/pagenow')->get($this->key);
    }

    /**
     * Router
     *
     * @see Jacoby\Intervention\Admin\Support\Router
     */
    public function router()
    {
        if ($this->config->has($this->key)) {
            Router::set($this->key)->route($this->config->get($this->key));
        }
    }

    /**
     * Icon
     *
     * @see Jacoby\Intervention\Admin\Support\Menu
     */
    public function icon()
    {
        if ($this->config->has($this->key . '.icon')) {
            Menu::set($this->key)->icon($this->config->get($this->key . '.icon'));
        }
    }

    /**
     * Menu
     *
     * @see Jacoby\Intervention\Admin\Support\Menu
     */
    public function menu()
    {
        if ($this->config->has($this->key . '.title.menu')) {
            Menu::set($this->key)->rename($this->config->get($this->key . '.title.menu'));
        }
    }

    /**
     * Title
     *
     * @see Jacoby\Intervention\Admin\Support\Title
     */
    public function title()
    {
        /*
        if ($this->config->has($this->key . '.title.menu')) {
        Menu::set($this->key)->rename($this->config->get($this->key . '.title.menu'));
        }
         */

        if ($this->config->has($this->key . '.title.page')) {
            Title::set($this->key)->rename($this->config->get($this->key . '.title.page'));
        }

        if ($this->config->has($this->key . '.title-link')) {
            Title::set($this->key)->removeLink();
        }
    }

    /**
     * Tabs
     *
     * @see Jacoby\Intervention\Admin\Support\Tabs
     */
    public function tabs()
    {
        $tabs = Composer::set($this->config)->groupKeys($this->key . '.tabs')->get();
        if ($tabs->isNotEmpty()) {
            Tabs::set($this->key)->remove($tabs->toArray());
        }
    }

    /**
     * Pagination
     *
     * @see Jacoby\Intervention\Admin\Support\All\Pagination
     * @see Jacoby\Intervention\Admin\Support\Tabs
     */
    public function pagination()
    {
        if ($this->config->has($this->key . '.pagination')) {
            Pagination::set($this->key)->to($this->config->get($this->key . '.pagination'));
            Tabs::set($this->key)->remove(['screen-options.pagination']);
        }
    }

    /**
     * Subsets
     *
     * @see Jacoby\Intervention\Admin\Support\All\Subsets
     */
    public function subsets()
    {
        $subsets = Composer::set($this->config)->groupKeys($this->key . '.subsets')->get();

        if ($subsets->isNotEmpty()) {
            Subsets::set($this->key)->remove($subsets->toArray());
        }
    }

    /**
     * Lists
     *
     * @see Jacoby\Intervention\Admin\Support\All\Lists\Actions
     * @see Jacoby\Intervention\Admin\Support\All\Lists\Columns
     * @see Jacoby\Intervention\Admin\Support\All\Lists\Count
     *
     * @param boolean $checkbox
     */
    public function lists($checkbox = false)
    {
        $actions = Composer::set($this->config)
            ->groupKeys($this->key . '.list.actions')
            ->get();

        if ($actions->isNotEmpty()) {
            ListActions::set($this->key)->remove($actions->toArray());
        }

        $columns = Composer::set($this->config)
            ->groupKeys($this->key . '.list.cols')
            ->get();

        if ($columns->isNotEmpty() || $checkbox) {
            ListColumns::set($this->key)->remove($columns->toArray(), $checkbox);
        }

        if ($this->config->has($this->key . '.list.count')) {
            ListCount::set($this->key)->remove();
        }
    }

    /**
     * Action Bulk
     *
     * @see Jacoby\Intervention\Admin\Support\All\ActionBulk
     */
    public function actionBulk()
    {
        if ($this->config->has($this->key . '.actions.bulk')) {
            ActionBulk::set($this->key)->remove();
        }
    }

    /**
     * Search
     *
     * @see Jacoby\Intervention\Admin\Support\All\Search
     */
    public function search()
    {
        if ($this->config->has($this->key . '.search')) {
            Search::set($this->key)->remove();
        }
    }
}
