<?php

namespace Sober\Intervention\Admin;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Plugins
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'plugins',
 *     'plugins' => (string) $route,
 *     'plugins.title' => (string) $title,
 *     'plugins.icon' => (string) $dashicon,
 * ]
 */
class Plugins
{
    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('plugins.title')->add('plugins.title.', [
            'menu',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('plugins', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->icon();
        $shared->order();
    }
}
