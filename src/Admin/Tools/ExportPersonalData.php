<?php

namespace Sober\Intervention\Admin\Tools;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Tools/ExportPersonalData
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'tools.export-personal-data',
 *     'tools.export-personal-data' => (string) $route,
 *     'tools.export-personal-data.title' => (string) $title,
 *     'tools.export-personal-data.title.[menu, page]' => (string) $title,
 *     'tools.export-personal-data.tabs',
 *     'tools.export-personal-data.tabs.[screen-options, help]',
 * ]
 */
class ExportPersonalData
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

        $compose = $compose->has('tools.export-personal-data.all')->add('tools.export-personal-data.', [
            'tabs',
        ]);

        $compose = $compose->has('tools.export-personal-data.title')->add('tools.export-personal-data.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('tools.export-personal-data.tabs')->add('tools.export-personal-data.tabs.', [
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
        $shared = SharedApi::set('tools.export-personal-data', $this->config);
        $shared->router();
        $shared->title();
        $shared->tabs();
    }
}
