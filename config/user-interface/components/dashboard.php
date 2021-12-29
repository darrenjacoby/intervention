<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Sober\Intervention;

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
        'title:text',
        'icon:icon',
        'home:hierachical' => [
            'dashboard.home:route',
            'tabs:group' => ['screen-options', 'help'],
            'cols:edit',
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
            'title:text',
            'tabs',
        ],
    ],
];
