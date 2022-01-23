<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Sober\Intervention;

/**
 * Posts
 *
 * All
 * Item
 * Categories/All
 * Categories/Item
 * Tags/All
 * Tags/Item
 *
 * @return array
 */
return [
    'posts:hierachical' => [
        ':route',
        'title:text[Posts]',
        'icon:icon[posts]',
        'all:hierachical' => [
            ':route',
            'title:text[Posts]',
            'title-link',
            'tabs:group' => ['screen-options', 'help'],
            'pagination:number',
            'search',
            'subsets:group' => ['all', 'published', 'scheduled', 'draft', 'pending', 'counts'],
            'actions.bulk',
            'filter:group' => ['date', 'category'],
            'list.cols:group' => ['author', 'categories', 'tags', 'comments', 'date'],
            'list.actions:group' => ['edit', 'quick-edit', 'trash', 'view'],
            'list.count',
        ],
        'item:hierachical' => [
            ':route',
            'add:group' => ['search', 'preview', 'headers', 'tips', 'grid', 'icons'],
            'add.blocks:group' => ['text', 'media', 'design', 'widgets', 'theme', 'embeds'],
            'editor',
            'author',
            'excerpt',
            'trackbacks',
            'custom-fields',
            'discussion',
            'link',
            'revisions',
            'featured-image',
            'editor',
            'categories',
            'tags',
            'sticky',
            'revisions',
            'format',
        ],
        'categories.all:hierachical' => [
            ':route',
            'title:text[Categories]',
            'tabs:group' => ['screen-options', 'help'],
            'search',
            'actions.bulk',
            'list',
            'list.cols:group' => ['description', 'slug', 'count'],
            'list.actions:group' => ['edit', 'quick-edit', 'trash', 'view'],
            'list.count',
            'notes',
        ],
        'categories.item:hierachical' => [
            ':route',
            'title:text[Edit Category]',
            'slug',
            'parent',
            'description',
        ],
        'tags.all:hierachical' => [
            ':route',
            'title:text[Tags]',
            'tabs:group:group' => ['screen-options', 'help'],
            'search',
            'actions',
            'actions.bulk',
            'list.cols:group' => ['description', 'slug', 'count'],
            'list.actions:group' => ['edit', 'quick-edit', 'trash', 'view'],
            'list.count',
            'notes',
        ],
        'tags.item:hierachical' => [
            ':route',
            'title:text[Edit Tag]',
            'slug',
            'parent',
            'description',
        ],
    ],
];
