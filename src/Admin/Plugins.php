<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

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
        $compose = Composer::set(Arr::normalizeTrue($config));

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
    }
}
