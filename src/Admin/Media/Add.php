<?php

namespace Sober\Intervention\Admin\Media;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\Title;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Media/Add
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'media.add',
 *     'media.add' => (string) $route,
 *     'media.add.title' => (string) $title,
 *     'media.add.title.[menu, page]' => (string) $title,
 *     'media.add.tabs',
 *     'media.add.tabs.[screen-options, help]',
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

        $compose = $compose->has('media.add.all')->add('media.add.', [
            'tabs',
        ]);

        $compose = $compose->has('media.add.title')->add('media.add.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('media.add.tabs')->add('media.add.tabs.', [
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
        $shared = SharedApi::set('media.add', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        if ($this->config->has('media.add.add')) {
            Title::set('media.add')->removeLink();
        }
    }
}
