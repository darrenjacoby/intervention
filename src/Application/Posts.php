<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\Posttypes;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Posts
 *
 * Alias for Posttypes, replace `posts` with `posttypes`
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'posts.{name}' => (boolean|string|array) $enable|$label|$config,
 * ]
 */
class Posts
{
    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = [])
    {
        $config = Arr::normalize($config);

        $posts = Composer::set($config)
            ->group('posts')
            ->get()
            ->toArray();

        $config = Composer::set($config)
            ->forgetGroup('posts')
            ->get()
            ->put('posttypes', $posts)
            ->toArray();

        new Posttypes($config);
    }
}
