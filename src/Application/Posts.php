<?php

namespace Jacoby\Intervention\Application;

use Jacoby\Intervention\Application\Posttypes;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

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
