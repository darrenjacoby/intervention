<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Dashboard
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'dashboard',
 *     'dashboard' => (string) $route,
 *     'dashboard.title' => (string) $title,
 *     'dashboard.icon' => (string) $dashicon,
 * ]
 */
class Dashboard
{
    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('dashboard.title')->add('dashboard.title.', [
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
        $shared = SharedApi::set('dashboard', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->icon();
    }
}
