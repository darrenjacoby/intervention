<?php

namespace Jacoby\Intervention\Admin\Pages;

use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Pages/Item
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
class Item
{
    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('pages.item')->add('pages.item.', [
            'all',
        ]);

        $compose = $compose->has('pages.item.all')->add('pages.item.', [
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

        $compose = $compose->has('pages.item.tabs')->add('pages.item.tabs.', [
            'screen-options', 'help',
        ]);

        $config = Composer::set($compose->get())
            ->group('pages.item')
            ->get()
            ->toArray();

        new Add(['pages.add' => $config]);
        new Edit(['pages.edit' => $config]);
    }
}
