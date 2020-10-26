## `wp-admin.$role.tools.import`

Remove tools import components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'tools.import',
    'tools.import' => (string) $route,
    'tools.import.title' => (string) $title,
    'tools.import.title.[menu, page]' => (string) $title,
    'tools.import.tabs',
    'tools.import.tabs.[screen-options, help]',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'tools.import',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'tools.import' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.tools.import]&labels=bug&assignees=darrenjacoby)**
