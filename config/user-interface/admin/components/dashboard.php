<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Jacoby\Intervention;

/**
 * Dashboard
 *
 * Home
 * Updates
 *
 * @return array
 */
return [
    'dashboard:hierachical' => [
        ':route',
        'title:text[Dashboard]',
        'icon:icon[dashboard]',
        'home:hierachical' => [
            ':route',
            'title:text[Home]',
            'tabs:group' => ['screen-options', 'help'],
            'cols:number',
            'welcome',
            'notices',
            'activity',
            'right-now',
            'recent-comments',
            'incoming-links',
            'plugins',
            'quick-draft',
            'drafts',
            'news',
            'site-health',
        ],
        'updates:hierachical' => [
            ':route',
            'title:text[WordPress Updates]',
            'tabs.help',
        ],
    ],
];
