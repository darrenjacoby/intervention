<?php

namespace Sober\Intervention\Admin;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Media
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'media',
 *     'media' => (string) $route,
 *     'media.title' => (string) $title,
 *     'media.icon' => (string) $dashicon,
 * ]
 */
class Media
{
    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('media.title')->add('media.title.', [
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
        $shared = SharedApi::set('media', $this->config);
        $shared->router();
        $shared->title();
        $shared->icon();
    }
}
