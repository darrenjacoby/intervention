## `wp-admin.{role}.posts`

Update, remove or redirect the posts menu item.

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
    'posts',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'posts' => 'pages',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.posts]&labels=bug&assignees=darrenjacoby)**
