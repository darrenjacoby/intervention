## `wp-admin.$role.settings.writing`

Remove settings writing components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.writing',
        'settings.writing' => (string) $route,
        'settings.writing.title' => (string) $title,
        'settings.writing.title.[menu, page]' => (string) $title,
        'settings.writing.tabs',
        'settings.writing.tabs.[screen-options, help]',
        'settings.writing.default-category',
        'settings.writing.default-post-format',
        'settings.writing.post-via-email',
        'settings.writing.update-services',
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
        'settings.writing',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.writing' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.settings.writing]&labels=bug&assignees=darrenjacoby)**
