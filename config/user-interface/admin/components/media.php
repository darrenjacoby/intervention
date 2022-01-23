<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Sober\Intervention;

/**
 * Media
 *
 * All
 * Add
 *
 * @return array
 */
return [
    'media:hierachical' => [
        ':route',
        'title:text[Media]',
        'icon:icon[media]',
        'all:hierachical' => [
            ':route',
            'title:text[Media Library]',
            'title-link',
            'tabs:group' => ['screen-options', 'help'],
            'pagination:number',
            'search',
            'mode:select' => ['grid', 'list'],
            // 'mode' => (string) 'grid' or 'list',
            'filter:group' => ['type', 'date'],
            'actions',
            'list.cols' => ['author', 'uploaded-to', 'comments', 'date'],
            'list.actions' => ['edit', 'delete', 'view'],
            'list.count',
        ],
        'add:hierachical' => [
            ':route',
            'title:text[Upload New Media]',
            'tabs:group' => ['screen-options', 'help'],
        ],
    ],
];
