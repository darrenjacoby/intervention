<?php

namespace Sober\Intervention\Admin\Pages;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\BlockEditor;
use Sober\Intervention\Admin\Support\PostComponents;
use Sober\Intervention\Admin\Support\Title;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Pages/Edit
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'pages.item',
 *     'pages.item' => (string) $route,
 *     'pages.item.title' => (string) $title,
 *     'pages.item.title.[menu, page]' => (string) $title,
 *     'pages.item.add',
 *     'pages.item.add' => [
 *          search,
 *          preview,
 *          headers,
 *          tips,
 *          grid,
 *          icons,
 *      ],
 *     'pages.item.add.blocks',
 *     'pages.item.add.blocks' => [
 *          text,
 *          media,
 *          design,
 *          widgets,
 *          theme,
 *          embeds,
 *      ],
 *     'pages.item.editor',
 *     'pages.item.author',
 *     'pages.item.link',
 *     'pages.item.featured-image',
 *     'pages.item.attributes',
 *     'pages.item.custom-fields',
 *     'pages.item.discussion',
 *      --- classic ---
 *     'pages.item.title-link',
 *     'pages.item.tabs',
 *     'pages.item.tabs.[screen-options, help]',
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
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('pages.edit')->add('pages.edit.', [
            'all',
        ]);

        $compose = $compose->has('pages.edit.all')->add('pages.edit.', [
            'title-link',
            'tabs',
            'editor',
            'author',
            'custom-fields',
            'editor',
            'discussion',
            'attributes',
            'link',
            'featured-image',
        ]);

        $compose = $compose->has('pages.edit.tabs')->add('pages.edit.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('pages.edit.title')->add('pages.edit.title.', [
            'menu', 'page',
        ]);

        $this->config = $compose->get();

        $this->editor = Composer::set($this->config)
            ->group('pages.edit')
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
        $shared = SharedApi::set('pages.edit', $this->config);
        $shared->router();
        // $shared->menu();

        if ($GLOBALS['pagenow'] !== 'post.php' || (isset($_GET['post']) && get_post_type($_GET['post']) !== 'page')) {
            return;
        }

        // $shared->title();
        $shared->tabs();

        BlockEditor::set($this->editor);
        PostComponents::set(['page'])->remove($this->editor);
    }
}
