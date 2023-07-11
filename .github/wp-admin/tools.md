## `wp-admin.$role.tools`

Update, remove or redirect the tools menu item.

### Options;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'tools',
        'tools' => (string) $route,
        'tools.title' => (string) $title,
        'tools.icon' => (string) $dashicon,
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
        'tools',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'tools' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.tools]&labels=bug&assignees=darrenjacoby)**
