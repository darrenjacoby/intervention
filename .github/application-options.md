# Application

Configuration options available.

```php
<?php

return [
    'application' => [
        'posts.$name' => (boolean|string|array) $enable|$label|$config,
        'taxonomies.$name' => (boolean|string|array) $enable|$label|$config,
        'theme' => (string) $stylesheet,
        'menus' => [
            '$name' => (boolean|string) $enable|$name
        ],
        'plugins' => (array) $plugins,
        'general' => [
            'site-title' => (string) $title,
            'tagline' => (string) $tagline,
            'wp-address' => (string) $wp_url,
            'site-address' => (string) $site_url,
            'admin-email' => (string) $admin_email,
            'email-from' => (string) $email_from,
            'email-from-name' => (string) $email_from_name,
            'membership' => (boolean) $enable_membership,
            'default-role' => (string) $role,
            'language' => (string) $language,
            'timezone' => (string) $timezone,
            'date-format' => (string) $date_format,
            'time-format' => (string) $time_format,
            'week-starts' => (string) $week_starts,
        ],
        'writing' => [
            'emoji' => (boolean) $enable_emoji,
            'default-category' => (int) $default_category_id,
            'default-post-format' => (string) $default_post_format,
            'post-via-email.server' => (string) $email_server,
            'post-via-email.port' => (int) $email_port,
            'post-via-email.login' => (string) $email_login,
            'post-via-email.pass' => (string) $email_pass,
            'post-via-email.default-category' => (int) $email_default_category_id,
            'update-services' => (string) $update_services_url,
        ],
        'reading' => [
            'front-page' => (string|int) 'post'|$page_id,
            'front-page.posts' => (string) $page_id_for_posts,
            'posts-per-page' => (int) $posts_per_page,
            'posts-per-rss' => (string) $posts_per_rss,
            'rss-excerpt' => (string) 'full'|'summary'
            'discourage-search' => (boolean) $discourage_search_engines
        ],
        'discussion' => [
            'post.ping-flag' => (boolean) $enable_ping_flag,
            'post.ping-status' => (boolean) $enable_ping_status,
            'post.comments' => (boolean) $enable_comments,
            'comments.name-email' => (boolean) $require_name_email,
            'comments.registration' => (boolean) $require_registration,
            'comments.close' => (boolean) $enable_auto_close,
            'comments.close.days' => (int) $days_auto_close,
            'comments.cookies' => (boolean) $show_cookies_opt_in,
            'comments.thread' => (boolean) $enable_threaded_comments,
            'comments.thread.depth' => (int) $threaded_comments_depth,
            'comments.pages' => (boolean) $enable_comment_pages,
            'comments.pages.per-page' => (int) $comments_per_page,
            'comments.pages.default' => (string) 'newest|oldest',
            'comments.order' => (string) 'asc|desc',
            'emails.comment' => (boolean) $enable_emails,
            'emails.moderation' => (boolean) $enable_moderation_emails,
            'moderation.approve-manual' => (boolean) $enable_manual_moderation,
            'moderation.approve-previous' => (boolean) $enable_allow_previous,
            'moderation.queue-links' => (int) $max_links,
            'moderation.queue-keys' => (string) $allowed_keys,
            'moderation.disallowed-keys' => (string) $disallowed_keys,
            'avatars' => (boolean) $enable_avatars,
            'avatars.rating' => (string) $avatar_rating,
            'avatars.default' => (string) $avatar_default,
        ],
        'media' => [
            'sizes.$name' => (int|array) $width|[
                'width' => (int) $width,
                'height' => (int) $height,
                'crop' => (boolean) $enable_crop,
            ],
            'mimes.$name' => (boolean|string) $enable_mime_type,
            'uploads.organize' => (boolean) $enable_upload_organization
        ],
        'permalinks' => [
            'structure' => (string) $tags,
            'category-base' => (boolean|string) false|$category_base_path,
            'tag-base' => (boolean|string) false|$tag_base_path,
            'search-base' => (boolean|string) true|$search_base_path,
            'author-base' => (string) $author_base_path,
            'comments-base' => (string) $comments_base_path,
            'pagination-base' => (string) $pagination_base_path,
            'comments-pagination-base' => (string) $comments_pagination_base_path,
            'feed-base' => (string) $feed_base_path,
        ],
        'privacy.policy-page' => (int) $page_id,
    ],
];
```
