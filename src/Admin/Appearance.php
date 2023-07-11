<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Appearance
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'appearance',
 *     'appearance' => (string) $route,
 *     'appearance.title' => (string) $title,
 *     'appearance.icon' => (string) $dashicon,
 * ]
 */
class Appearance
{
    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('appearance.title')->add('appearance.title.', [
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
        $shared = SharedApi::set('appearance', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->icon();
    }
}
