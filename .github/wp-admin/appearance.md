## `wp-admin.$role.appearance`

Update, remove or redirect the appearance menu item.

### Options;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance',
        'appearance' => (string) $route,
        'appearance.title' => (string) $title,
        'appearance.icon' => (string) $dashicon,
    ],
];
```

- [Route options](../route-options.md)
- [Dashicon options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

Remove from menu;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.appearance]&labels=bug&assignees=darrenjacoby)**
