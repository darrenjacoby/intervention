## `wp-admin.$role.plugins`

Update, remove or redirect the plugins menu item.

### Options;

```php
[
    'plugins',
    'plugins' => (string) $route,
    'plugins.title' => (string) $title,
    'plugins.icon' => (string) $dashicon,
];
```

* [Route options](../route-options.md)
* [Dashicon options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

Remove from menu;

```php
[
    'plugins',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'plugins' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.plugins]&labels=bug&assignees=darrenjacoby)**