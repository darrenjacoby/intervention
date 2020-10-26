<?php

namespace Sober\Intervention\Admin\Plugins;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\Title;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Plugins/Add
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/hooks/install_plugins_tabs/
 * @link https://developer.wordpress.org/reference/hooks/plugin_install_action_links/
 * @link https://developer.wordpress.org/reference/hooks/install_plugins_tabs/
 *
 * @param
 * [
 *     'plugins.add',
 *     'plugins.add' => (string) $route,
 *     'plugins.add.title' => (string) $title,
 *     'plugins.add.title.[menu, page]' => (string) $title,
 *     'plugins.add.title-link',
 *     'plugins.add.tabs',
 *     'plugins.add.tabs.help',
 *     'plugins.add.filter',
 *     'plugins.add.filter.[featured, popular, recommended, favorites]',
 *     'plugins.add.search',
 *     'plugins.add.popular-tags',
 *     'plugins.add.item',
 *     'plugins.add.item.[actions, meta]',
 * ]
 */
class Add
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

        $compose = $compose->has('plugins.add.all')->add('plugins.add.', [
            'title-link', 'tabs', 'filter', 'search', 'popular-tags', 'item',
        ]);

        $compose = $compose->has('plugins.add.title')->add('plugins.add.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('plugins.add.tabs')->add('plugins.add.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('plugins.add.filter')->add('plugins.add.filter.', [
            'featured', 'popular', 'recommended', 'favorites',
        ]);

        $compose = $compose->has('plugins.add.item')->add('plugins.add.item.', [
            'actions', 'meta',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('plugins.add', $this->config);
        $shared->router();
        $shared->title();
        $shared->tabs();
        $shared->search();

        add_action('admin_head-plugin-install.php', [$this, 'head']);
        add_filter('install_plugins_tabs', [$this, 'uploadFilter']);
        add_filter('plugin_install_action_links', [$this, 'actionsItem']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('plugins.add.popular-tags')) {
            echo '<style>.plugin-install-php .plugins-popular-tags-wrapper {display: none;}</style>';
        }

        if ($this->config->has('plugins.add.search') && $this->config->has('plugins.add.filter')) {
            echo '<style>.plugin-install-php .wp-filter {display: none;}</style>';
        }

        if ($this->config->has('plugins.add.item.meta')) {
            echo '<style>.plugin-install-php .plugin-card-bottom {display: none;}</style>';
        }
    }

    /**
     * Upload Filter
     */
    public function uploadFilter($tabs)
    {
        if ($this->config->has('plugins.add.filter.featured')) {
            unset($tabs['featured']);
        }

        if ($this->config->has('plugins.add.filter.popular')) {
            unset($tabs['popular']);
        }

        if ($this->config->has('plugins.add.filter.recommended')) {
            unset($tabs['recommended']);
        }

        if ($this->config->has('plugins.add.filter.favorites')) {
            unset($tabs['favorites']);
        }

        return $tabs;
    }

    /**
     * Item Actions
     */
    public function actionsItem($actions)
    {
        if ($this->config->has('plugins.add.item.actions')) {
            return [];
        }

        return $actions;
    }
}
