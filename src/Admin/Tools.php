<?php

namespace Sober\Intervention\Admin;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Tools
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'tools',
 *     'tools' => (string) $route,
 *     'tools.title' => (string) $title,
 *     'tools.icon' => (string) $dashicon,
 * ]
 */
class Tools
{
    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('tools.title')->add('tools.title.', [
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
        $shared = SharedApi::set('tools', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->icon();
        $shared->order();
    }
}
