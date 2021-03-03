## `wp-admin.$role.settings`

Update, remove or redirect the settings menu item.

### Options;

```php
[
    'settings',
    'settings' => (string) $route,
    'settings.title' => (string) $title,
    'settings.icon' => (string) $dashicon,
];
```

* [Route options](../route-options.md)
* [Dashicon options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

Remove from menu;

```php
[
    'settings',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'settings' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.settings]&labels=bug&assignees=darrenjacoby)**
