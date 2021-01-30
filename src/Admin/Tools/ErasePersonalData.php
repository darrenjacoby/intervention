<?php

namespace Sober\Intervention\Admin\Tools;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Tools/ErasePersonalData
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'tools.erase-personal-data',
 *     'tools.erase-personal-data' => (string) $route,
 *     'tools.erase-personal-data.title' => (string) $title,
 *     'tools.erase-personal-data.title.[menu, page]' => (string) $title,
 *     'tools.erase-personal-data.tabs',
 *     'tools.erase-personal-data.tabs.[screen-options, help]',
 * ]
 */
class ErasePersonalData
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

        $compose = $compose->has('tools.erase-personal-data.all')->add('tools.erase-personal-data.', [
            'tabs',
        ]);

        $compose = $compose->has('tools.erase-personal-data.title')->add('tools.erase-personal-data.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('tools.erase-personal-data.tabs')->add('tools.erase-personal-data.tabs.', [
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
        $shared = SharedApi::set('tools.erase-personal-data', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();
    }
}
