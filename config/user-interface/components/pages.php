<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Sober\Intervention;

/**
 * Pages
 *
 * All
 * Item
 *
 * @return array
 */
return [
    'pages:hierachical' => [
        ':route',
        'title:text[Pages]',
        'icon:icon[pages]',
        'all:hierachical' => [
            ':route',
            'title:text[Pages]',
            'title-link',
            'tabs:group' => ['screen-options', 'help'],
            'pagination:number',
            'search',
            'subsets:group' => ['all', 'published', 'scheduled', 'draft', 'pending', 'counts'],
            'actions.bulk',
            'filter.date',
            'list.cols:group' => ['author', 'comments', 'date'],
            'list.actions:group' => ['edit', 'quick-edit', 'trash', 'view'],
            'list.count',
        ],
        'item:hierachical' => [
            ':route',
            'add:group' => ['search', 'preview', 'headers', 'tips', 'grid', 'icons'],
            'add.blocks:group' => ['text', 'media', 'design', 'widgets', 'theme', 'embeds'],
            'editor',
            'author',
            'link',
            'featured-image',
            'attributes',
            'custom-fields',
            'discussion',
        ],
    ],
];
