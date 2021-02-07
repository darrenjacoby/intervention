## `wp-admin.$role.media`

Update, remove or redirect the media menu item.

### Options;

```php
[
    'media',
    'media' => (string) $route,
    'media.title' => (string) $title,
    'media.icon' => (string) $dashicon,
    'media.order' => (integer) $order,
];
```

* [Route options](../route-options.md)
* [Dashicon options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

Remove from menu;

```php
[
    'media',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'media' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.media]&labels=bug&assignees=darrenjacoby)**
