<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Sober\Intervention;

/**
 * Users
 *
 * Add
 * All
 * Profile
 *
 * @return array
 */
return [
    'users:hierachical' => [
        ':route',
        'title:text[Users]',
        'icon:icon[users]',
        'all:hierachical' => [
            ':route',
            'title:text[Users]',
            'title-link',
            'tabs:group' => ['screen-options', 'help'],
            'pagination:number',
            'search',
            'subsets:group' => ['administrator', 'editor', 'author', 'contributor', 'subscriber', 'counts'],
            'actions.bulk',
            'list:group' => ['cols', 'actions', 'count'],
            'list.cols:group' => ['name', 'email', 'role', 'posts'],
            'list.actions:group' => ['edit', 'view', 'delete'],
            'list.count',
        ],
        'add:hierachical' => [
            ':route',
            'title:text[Add New User]',
            'tabs:group' => ['screen-options', 'help'],
            'user-notification',
        ],
        'profile:hierachical' => [
            ':route',
            'title:text[Profile]',
            'tabs:group' => ['screen-options', 'help'],
            'options:group' => ['title', 'editor', 'syntax', 'schemes', 'shortcuts', 'toolbar'],
            'name:group' => ['first', 'last', 'nickname', 'display'],
            'contact.web',
            'about:group' => ['bio', 'picture'],
            'role:group' => ['all-not-admin', 'all', 'wc', 'administrator', 'author', 'editor', 'contributor', 'subscriber', 'customer', 'shop-manager'],
        ],
    ],
];
