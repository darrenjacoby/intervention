## `wp-admin.$role.users`

Update, remove or redirect the users menu item.

### Options;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'users',
        'users' => (string) $route,
        'users.title' => (string) $title,
        'users.icon' => (string) $dashicon,
    ],
];
```

* [Route options](../route-options.md)
* [Dashicon options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

Remove from menu;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'users',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'users' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.users]&labels=bug&assignees=darrenjacoby)**
