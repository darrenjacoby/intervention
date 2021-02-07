## `wp-admin.$role.comments`

Update, remove or redirect the comments menu item.

### Options;

```php
[
    'comments',
    'comments' => (string) $route,
    'comments.title' => (string) $title,
    'comments.icon' => (string) $dashicon,
    'comments.order' => (integer) $order,
];
```

* [`$route` options](../route-options.md)
* [`$dashicon` options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

Remove from menu;

```php
[
    'comments',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'comments' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.comments]&labels=bug&assignees=darrenjacoby)**
