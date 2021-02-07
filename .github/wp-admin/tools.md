## `wp-admin.$role.tools`

Update, remove or redirect the tools menu item.

### Options;

```php
[
    'tools',
    'tools' => (string) $route,
    'tools.title' => (string) $title,
    'tools.icon' => (string) $dashicon,
];
```

* [Route options](../route-options.md)
* [Dashicon options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

Remove from menu;

```php
[
    'tools',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'tools' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.tools]&labels=bug&assignees=darrenjacoby)**
