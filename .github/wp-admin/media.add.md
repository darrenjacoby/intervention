## `wp-admin.$role.media.add`

Remove media add components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'media.add',
        'media.add' => (string) $route,
        'media.add.title' => (string) $title,
        'media.add.title.[menu, page]' => (string) $title,
        'media.add.tabs',
        'media.add.tabs.[screen-options, help]',
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
        'media.add',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'media.add' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.media.add]&labels=bug&assignees=darrenjacoby)**
