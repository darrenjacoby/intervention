## `wp-admin.$role.dashboard`

Update, remove or redirect the dashboard menu item.

### Options;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'dashboard',
        'dashboard' => (string) $route,
        'dashboard.title' => (string) $title,
        'dashboard.icon' => (string) $dashicon,
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
        'dashboard',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'dashboard' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.dashboard]&labels=bug&assignees=darrenjacoby)**
