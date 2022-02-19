<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Jacoby\Intervention;

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
            'mode:select[Mode]' => ['grid', 'list'],
            // 'mode' => (string) 'grid' or 'list',
            'filter:group' => ['type', 'date'],
            'actions',
            'list.cols:group' => ['author', 'uploaded-to', 'comments', 'date'],
            'list.actions:group' => ['edit', 'delete', 'view'],
            'list.count',
        ],
        'add:hierachical' => [
            ':route',
            'title:text[Upload New Media]',
            'tabs:group' => ['screen-options', 'help'],
        ],
    ],
];
