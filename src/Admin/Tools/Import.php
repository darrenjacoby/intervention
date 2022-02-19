<?php

namespace Jacoby\Intervention\Admin\Tools;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Tools/Import
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'tools.import',
 *     'tools.import' => (string) $route,
 *     'tools.import.title' => (string) $title,
 *     'tools.import.title.[menu, page]' => (string) $title,
 *     'tools.import.tabs',
 *     'tools.import.tabs.[screen-options, help]',
 * ]
 */
class Import
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

        $compose = $compose->has('tools.import.all')->add('tools.import.', [
            'tabs',
        ]);

        $compose = $compose->has('tools.import.title')->add('tools.import.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('tools.import.tabs')->add('tools.import.tabs.', [
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
        $shared = SharedApi::set('tools.import', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();
    }
}
