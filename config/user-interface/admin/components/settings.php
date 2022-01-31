<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Jacoby\Intervention;

/**
 * Settings
 *
 * General
 * Writing
 * Reading
 * Discussion
 * Media
 * Permalinks
 *
 * @return array
 */
return [
    'settings:hierachical' => [
        ':route',
        'title:text[Settings]',
        'icon:icon[settings]',
        'general:hierachical' => [
            ':route',
            'title:text[General Settings]',
            'tabs:group' => ['screen-options', 'help'],
            'site-title',
            'tagline',
            'wp-address',
            'site-address',
            'admin-email',
            'membership',
            'default-role',
            'site-lang',
            'timezone',
            'date-format',
            'time-format',
            'week-starts',
        ],
        'writing:hierachical' => [
            ':route',
            'title:text[Writing Settings]',
            'tabs:group' => ['screen-options', 'help'],
            'default-category',
            'default-post-format',
            'post-via-email',
            'update-services',
        ],
        'reading:hierachical' => [
            ':route',
            'title:text[Reading Settings]',
            'tabs:group' => ['screen-options', 'help'],
            'front-page.posts',
            'posts-per-page',
            'posts-per-rss',
            'rss-excerpt',
            'discourage-search',
        ],
        'discussion:hierachical' => [
            ':route',
            'title:text[Discussion Settings]',
            'tabs:group' => ['screen-options', 'help'],
            'post:group' => ['ping-flag', 'ping-status', 'comments'],
            'comments:group' => ['name-email', 'registration', 'close', 'cookies', 'thread', 'pages', 'order'],
            'emails:group' => ['comment', 'moderation'],
            'moderation.approve:group' => ['manual', 'previous'],
            'moderation.queue:group' => ['links', 'keys'],
            'moderation.disallowed-keys',
            'avatars:group' => ['show', 'rating', 'default'],
        ],
        'media:hierachical' => [
            ':route',
            'title:text[Media Settings]',
            'tabs:group' => ['screen-options', 'help'],
            'sizes',
            'uploads',
        ],
        'permalinks:hierachical' => [
            ':route',
            'title:text[Permalinks Settings]',
            'tabs:group' => ['screen-options', 'help'],
            'common',
            'optional:group' => ['category', 'tag'],
        ],
    ],
];
