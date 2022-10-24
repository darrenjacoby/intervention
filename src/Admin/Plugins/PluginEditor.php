<?php

namespace Sober\Intervention\Admin\Plugins;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Plugins/PluginEditor
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'plugins.plugin-editor',
 *     'plugins.plugin-editor' => (string) $route,
 *     'plugins.plugin-editor.title' => (string) $title,
 *     'plugins.plugin-editor.title.[menu, page]' => (string) $title,
 *     'plugins.plugin-editor.tabs',
 *     'plugins.plugin-editor.tabs.[screen-options, help]',
 * ]
 */
class PluginEditor
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

        $compose = $compose->has('plugins.plugin-editor.all')->add('plugins.plugin-editor.', [
            'tabs', 'pagination', 'add', 'search', 'subsets', 'actions', 'list',
        ]);

        $compose = $compose->has('plugins.plugin-editor.title')->add('plugins.plugin-editor.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('plugins.plugin-editor.tabs')->add('plugins.plugin-editor.tabs.', [
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
        $shared = SharedApi::set('plugins.plugin-editor', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();
    }
}
