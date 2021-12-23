<?php

namespace Sober\Intervention\Admin\Pages;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\BlockEditor;
use Sober\Intervention\Admin\Support\PostComponents;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Pages/Add
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

        $compose = $compose->has('pages.add')->add('pages.add.', [
            'all',
        ]);

        $compose = $compose->has('pages.add.all')->add('pages.add.', [
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

        $compose = $compose->has('pages.add.tabs')->add('pages.add.tabs.', [
            'screen-options', 'help',
        ]);

        $this->config = $compose->get();

        $this->editor = Composer::set($this->config)
            ->group('pages.add')
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
        $shared = SharedApi::set('pages.add', $this->config);
        $shared->router();
        $shared->menu();

        if ($GLOBALS['pagenow'] !== 'post-new.php') {
            return;
        }

        $shared->title();
        $shared->tabs();

        BlockEditor::set($this->editor);
        PostComponents::set(['page'])->remove($this->editor);
    }
}
