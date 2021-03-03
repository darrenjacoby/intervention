<?php

namespace Sober\Intervention\Admin\Posts;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Posts/Item
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'posts.item',
 *     'posts.item' => (string) $route,
 *     'posts.item.tabs',
 *     'posts.item.tabs.[screen-options, help]',
 *     'posts.item.add',
 *     'posts.item.editor',
 *     'posts.item.author',
 *     'posts.item.excerpt',
 *     'posts.item.trackbacks',
 *     'posts.item.custom-fields',
 *     'posts.item.discussion',
 *     'posts.item.link',
 *     'posts.item.revisions',
 *     'posts.item.featured-image',
 *     'posts.item.editor',
 *     'posts.item.categories',
 *     'posts.item.tags',
 *     'posts.item.sticky',
 * ]
 */
class Item
{
    protected $config;
    protected $editor;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('posts.item.all')->add('posts.item.', [
            'title-link',
            'tabs',
            'editor',
            'author',
            'excerpt',
            'trackbacks',
            'custom-fields',
            'comments',
            'slug',
            'revisions',
            'thumbnail',
            'editor',
            'categories',
            'tags',
            'sticky',
            'discussion',
            'link',
            'featured-image',
        ]);

        /*
        $compose = $compose->has('posts.item.tabs')->add('posts.item.tabs.', [
            'screen-options', 'help',
        ]);
        */

        $config = Composer::set($compose->get())
            ->group('posts.item')
            ->get()
            ->toArray();

        new Add(['posts.add' => $config]);
        new Edit(['posts.edit' => $config]);
    }
}
