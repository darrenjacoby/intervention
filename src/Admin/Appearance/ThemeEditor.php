<?php

namespace Sober\Intervention\Admin\Appearance;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Appearance/ThemeEditor
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'appearance.theme-editor',
 *     'appearance.theme-editor' => (string) $route,
 *     'appearance.theme-editor.title' => (string) $title,
 *     'appearance.theme-editor.title.[menu, page]' => (string) $title,
 *     'appearance.theme-editor.tabs',
 *     'appearance.theme-editor.tabs.[screen-options, help]',
 * ]
 */
class ThemeEditor
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

        $compose = $compose->has('appearance.theme-editor.all')->add('appearance.theme-editor.', [
            'tabs',
        ]);

        $compose = $compose->has('appearance.theme-editor.title')->add('appearance.theme-editor.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('appearance.theme-editor.tabs')->add('appearance.theme-editor.tabs.', [
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
        $shared = SharedApi::set('appearance.theme-editor', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();
    }
}
