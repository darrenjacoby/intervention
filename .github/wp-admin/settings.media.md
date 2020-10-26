## `wp-admin.{role}.settings.media`

Remove settings media components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'settings.media',
    'settings.media' => (string) $route,
    'settings.media.title' => (string) $title,
    'settings.media.title.[menu, page]' => (string) $title,
    'settings.media.tabs',
    'settings.media.tabs.[screen-options, help]',
    'settings.media.sizes',
    'settings.media.uploads',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'settings.media',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'settings.media' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.settings.media]&labels=bug&assignees=darrenjacoby)**
