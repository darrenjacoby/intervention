<?php

namespace Jacoby\Intervention\Admin\Tools;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Tools/Export
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'tools.export',
 *     'tools.export' => (string) $route,
 *     'tools.export.title' => (string) $title,
 *     'tools.export.title.[menu, page]' => (string) $title,
 *     'tools.export.tabs',
 *     'tools.export.tabs.[screen-options, help]',
 * ]
 */
class Export
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

        $compose = $compose->has('tools.export.all')->add('tools.export.', [
            'tabs',
        ]);

        $compose = $compose->has('tools.export.title')->add('tools.export.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('tools.export.tabs')->add('tools.export.tabs.', [
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
        $shared = SharedApi::set('tools.export', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();
    }
}
