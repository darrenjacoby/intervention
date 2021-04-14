## `wp-admin.$role.comments`

Update, remove or redirect the comments menu item.

### Options;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'comments',
        'comments' => (string) $route,
        'comments.title' => (string) $title,
        'comments.icon' => (string) $dashicon,
    ],
];
```

* [`$route` options](../route-options.md)
* [`$dashicon` options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

Remove from menu;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'comments',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'comments' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.comments]&labels=bug&assignees=darrenjacoby)**
