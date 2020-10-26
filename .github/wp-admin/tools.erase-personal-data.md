## `wp-admin.{role}.tools.erase-personal-data`

Remove tools erase-personal-data components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'tools.erase-personal-data',
    'tools.erase-personal-data' => (string) $route,
    'tools.erase-personal-data.title' => (string) $title,
    'tools.erase-personal-data.title.[menu, page]' => (string) $title,
    'tools.erase-personal-data.tabs',
    'tools.erase-personal-data.tabs.[screen-options, help]',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'tools.erase-personal-data',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'tools.erase-personal-data' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.tools.erase-personal-data]&labels=bug&assignees=darrenjacoby)**
