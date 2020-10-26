<?php

namespace Sober\Intervention\Admin\Posts;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\BlockEditor;
use Sober\Intervention\Admin\Support\PostComponents;
use Sober\Intervention\Admin\Support\Title;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Posts/Edit
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
class Edit
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

        $compose = $compose->has('posts.edit.all')->add('posts.edit.', [
            'tabs',
            'add',
            'editor',
            'author',
            'excerpt',
            'trackbacks',
            'custom-fields',
            'revisions',
            'editor',
            'categories',
            'tags',
            'sticky',
            'discussion',
            'link',
            'featured-image',
        ]);

        $compose = $compose->has('posts.edit.tabs')->add('posts.edit.tabs.', [
            'screen-options', 'help',
        ]);

        $this->config = $compose->get();

        $this->editor = Composer::set($this->config)
            ->group('posts.edit')
            ->get()
            ->keys()
            ->toArray();

        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('posts.edit', $this->config);
        $shared->router();
        $shared->title();

        if ($GLOBALS['pagenow'] !== 'post.php' || get_post_type($_GET['post']) !== 'post') {
            return;
        }

        $shared->tabs();

        BlockEditor::set($this->editor);
        PostComponents::set(['post'])->remove($this->editor);
    }
}
