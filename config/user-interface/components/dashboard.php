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
        'home:hierachical' => [
            'tabs' => ['screen-options', 'help'],
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
            'tabs' => ['help'],
        ],
    ],
];
