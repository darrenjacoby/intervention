<?php

namespace Sober\Intervention\Admin;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Pages
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'pages',
 *     'pages' => (string) $route,
 *     'pages.title' => (string) $title,
 *     'pages.icon' => (string) $dashicon,
 * ]
 */
class Pages
{
    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('pages.title')->add('pages.title.', [
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
        $shared = SharedApi::set('pages', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->icon();
    }
}
