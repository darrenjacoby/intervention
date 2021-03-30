## `application.discussion`

Set application discussion options.

### Options;

```php
<?php

return [
    'application.discussion' => (boolean) $enable_comments,
    'application.discussion' => [
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
];
```

### Example;

```php
<?php

return [
    'application.discussion' => [
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
];
```

#### Remove

```php
<?php

return [
    'application.discussion' => false,
];
```

### Further Reading;

* **Option Reference**
    * [https://codex.wordpress.org/Option_Reference#Discussion](https://codex.wordpress.org/Option_Reference#Discussion)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[application.discussion]&labels=bug&assignees=darrenjacoby)**