## `wp-admin.$role.settings.reading`

Remove settings reading components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.reading',
        'settings.reading' => (string) $route,
        'settings.reading.title' => (string) $title,
        'settings.reading.title.[menu, page]' => (string) $title,
        'settings.reading.tabs',
        'settings.reading.tabs.[screen-options, help]',
        'settings.reading.front-page',
        'settings.reading.front-page.posts',
        'settings.reading.posts-per-page',
        'settings.reading.posts-per-rss',
        'settings.reading.rss-excerpt',
        'settings.reading.discourage-search',
    ],
];
```

- [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.reading',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.reading' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.settings.reading]&labels=bug&assignees=darrenjacoby)**
