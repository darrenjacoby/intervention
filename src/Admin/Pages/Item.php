<?php

namespace Sober\Intervention\Admin\Pages;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

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
 *     'pages.item.title-link',
 *     'pages.item.tabs',
 *     'pages.item.tabs.[screen-options, help]',
 *     'pages.item.editor',
 *     'pages.item.author',
 *     'pages.item.link',
 *     'pages.item.featured-image',
 *     'pages.item.attributes',
 *     'pages.item.custom-fields',
 *     'pages.item.discussion',
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
        $compose = Composer::set(Arr::normalize($config));

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
