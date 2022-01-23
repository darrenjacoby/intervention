<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Sober\Intervention;

/**
 * Plugins
 *
 * All
 * Add
 * Editor
 *
 * @return array
 */
return [
    'plugins:hierachical' => [
        ':route',
        'title:text[Plugins]',
        'icon:icon[plugins]',
        'all:hierachical' => [
            ':route',
            'title:text[Plugins]',
            'title-link',
            'tabs:group' => ['screen-options', 'help'],
            'ppagination:number',
            'search',
            'subsets:group' => ['all', 'active', 'inactive', 'auto-updates-disabled'],
            'subsets.counts',
            'actions',
            'actions:group' => ['activate', 'deactivate', 'update', 'delete', 'enable-auto-update', 'disable-auto-update'],
            'list.cols:group' => ['description', 'auto-updates'],
            'list.meta:group' => ['version', 'author', 'link'],
            'list.actions:group' => ['activate', 'deactivate', 'delete'],
            'list.count',
        ],
        'add:hierachical' => [
            ':route',
            'title:text[Add Plugins]',
            'title-link',
            'tabs.help',
            'filter:group' => ['featured', 'popular', 'recommended', 'favorites'],
            'search',
            'popular-tags',
            'item:group' => ['actions', 'meta'],
        ],
        'plugin-editor:hierachical' => [
            ':route',
            'title:text[Edit Plugins]',
            'tabs:group' => ['screen-options', 'help'],
        ],
    ],
];
