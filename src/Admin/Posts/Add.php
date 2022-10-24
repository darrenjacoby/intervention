<?php

namespace Sober\Intervention\Admin\Posts;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\BlockEditor;
use Sober\Intervention\Admin\Support\PostComponents;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Posts/Add
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
class Add
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
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('posts.add.all')->add('posts.add.', [
            'tabs',
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
            'format',
        ]);

        $compose = $compose->has('posts.add.tabs')->add('posts.add.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('posts.add.title')->add('posts.add.title.', [
            'menu', 'page',
        ]);

        $this->config = $compose->get();

        $this->editor = Composer::set($this->config)
            ->group('posts.add')
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
        $shared = SharedApi::set('posts.add', $this->config);
        $shared->router();
        $shared->menu();

        if ($GLOBALS['pagenow'] !== 'post-new.php') {
            return;
        }

        $shared->title();
        $shared->tabs();

        BlockEditor::set($this->editor);
        PostComponents::set(['post'])->remove($this->editor);
    }
}
