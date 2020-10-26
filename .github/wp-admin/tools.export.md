## `wp-admin.{role}.tools.export`

Remove tools export components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'tools.export',
    'tools.export' => (string) $route,
    'tools.export.title' => (string) $title,
    'tools.export.title.[menu, page]' => (string) $title,
    'tools.export.tabs',
    'tools.export.tabs.[screen-options, help]',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'tools.export',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'tools.export' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.tools.export]&labels=bug&assignees=darrenjacoby)**
