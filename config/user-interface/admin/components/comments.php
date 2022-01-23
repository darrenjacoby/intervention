<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Sober\Intervention;

/**
 * Comments
 *
 * All
 *
 * @return array
 */
return [
    'comments:hierachical' => [
        ':route',
        'title:text[Comments]',
        'icon:icon[comments]',
        'all:hierachical' => [
            ':route',
            'title:text[Comments]',
            'tabs:group' => ['screen-options', 'help'],
            'pagination:number',
            'search',
            'subsets' => ['all', 'mine', 'pending', 'approved', 'spam', 'trash'],
            'subsets.counts',
            'actions',
            'actions' => ['bulk', 'types'],
            'list.cols' => ['comment', 'response', 'date'],
            'list.actions' => ['unapprove', 'reply', 'quickedit', 'edit', 'spam', 'trash'],
            'list.count',
        ],
    ],
];
