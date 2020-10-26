## `wp-admin.{role}.tools.export-personal-data`

Remove tools export-personal-data components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'tools.export-personal-data',
    'tools.export-personal-data' => (string) $route,
    'tools.export-personal-data.title' => (string) $title,
    'tools.export-personal-data.title.[menu, page]' => (string) $title,
    'tools.export-personal-data.tabs',
    'tools.export-personal-data.tabs.[screen-options, help]',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'tools.export-personal-data',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'tools.export-personal-data' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.tools.export-personal-data]&labels=bug&assignees=darrenjacoby)**
