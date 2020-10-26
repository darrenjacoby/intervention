## `wp-admin.$role.pages`

Update, remove or redirect the pages menu item.

### Options;

```php
[
    'pages',
    'pages' => (string) $route,
    'pages.title' => (string) $title,
    'pages.icon' => (string) $dashicon,
];
```

* [Route options](../route-options.md)
* [Dashicon options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

* [Remove the post type on an application level](../application/posttype)

Remove from menu;

```php
[
    'pages',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'pages' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.pages]&labels=bug&assignees=darrenjacoby)**
