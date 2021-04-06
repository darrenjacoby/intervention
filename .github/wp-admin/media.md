## `wp-admin.$role.media`

Update, remove or redirect the media menu item.

### Options;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'media',
        'media' => (string) $route,
        'media.title' => (string) $title,
        'media.icon' => (string) $dashicon,
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
        'media',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'media' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.media]&labels=bug&assignees=darrenjacoby)**
