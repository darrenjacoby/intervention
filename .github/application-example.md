# Application

Configuration example for default WordPress options.

```php
<?php

return [
    'application' => [
        'posts' => [
            'documentation' => true,
        ],
        'taxonomies' => [
            'package' => true,
            'package.links' => 'documentation',
        ],
        'theme' => 'soberwp',
        'menus' =>[
            'primary_navigation' => false,
            'main' => true,
        ],
        'plugins' => [
            'disable-comments' => true,
            'regenerate-thumbnails' => true,
        ],
        'general' => [
            'site-title' => 'soberwp',
            'tagline' => 'Tools for WordPress',
            'wp-address' => 'https://soberwp.com/wp',
            'site-address' => 'https://soberwp.com',
            'admin-email' => 'example@soberwp.com',
            'email-from' => 'app@soberwp.com'
            'email-from-name' => 'soberwp'
            'membership' => true,
            'default-role' => 'editor',
            'language' => 'en_US',
            'timezone' => 'Africa/Johannesburg',
            'date-format' => 'F j Y',
            'time-format' => 'g:i a',
            'week-starts' => 'Mon',
        ],
        'writing' => [
            'emoji' => false,
            'default-category' => 10,
            'default-post-format' => 'standard',
            'post-via-email.server' => 'mail.soberwp.com',
            'post-via-email.port' => 100,
            'post-via-email.login' => 'example@soberwp.com',
            'post-via-email.pass' => 'secret',
            'post-via-email.default-category' => 10,
            'update-services' => 'http://rpc.pingomatic.com/',
        ],
        'reading' => [
            'front-page' => 2,
            'front-page.posts' => 4,
            'posts-per-page' => 20,
            'posts-per-rss' => 20,
            'rss-excerpt' => 'summary',
            'discourage-search' => false,
        ],
        'discussion' => [
            'post.ping-flag' => true,
            'post.ping-status' => false,
            'post.comments' => false,
            'comments.name-email' => true,
            'comments.registration' => true,
            'comments.close' => true,
            'comments.close.days' => 10,
            'comments.cookies' => true,
            'comments.thread' => true,
            'comments.thread.depth' => 4,
            'comments.pages' => true,
            'comments.pages.per-page' => 20,
            'comments.pages.default' => 'oldest',
            'comments.order' => 'desc',
            'emails.comment' => true,
            'emails.moderation' => true,
            'moderation.approve-manual' => true,
            'moderation.approve-previous' => true,
            'moderation.queue-links' => 10,
            'moderation.queue-keys' => 'string1',
            'moderation.disallowed-keys' => 'string2',
            'avatars' => true,
            'avatars.rating' => 'PG',
            'avatars.default' => 'blank',
        ],
        'media' => [
            'sizes.thumbnail' => [
                'width' => 200,
                'height' => 200,
                'crop' => true,
            ],
            'sizes.medium' => 400,
            'sizes.large' => 1200,
            'mimes.svg' => true,
            'uploads.organize' => true,
        ],
        'permalinks' => [
            'structure' => '/%postname%/',
            'category-base' => '',
            'tag-base' => '',
            'search-base' => 'search',
            'author-base' => 'author',
            'comments-base' => 'comments',
            'pagination-base' => 'page',
            'comments-pagination_base' => 'comment-page',
            'feed-base' => 'feed',
        ],
        'privacy.policy-page' => 2,
    ],
];
```
