<?php

namespace Sober\Intervention\Admin;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Comments
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'comments',
 *     'comments' => (string) $route,
 *     'comments.title' => (string) $title,
 *     'comments.icon' => (string) $dashicon,
 * ]
 */
class Comments
{
    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('comments.title')->add('comments.title.', [
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
        $shared = SharedApi::set('comments', $this->config);
        $shared->router();
        $shared->title();
        $shared->icon();
    }
}
