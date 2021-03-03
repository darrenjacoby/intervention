## `wp-admin.$role.plugins.add`

Remove plugins add-new components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'plugins.add',
    'plugins.add' => (string) $route,
    'plugins.add.title' => (string) $title,
    'plugins.add.title.[menu, page]' => (string) $title,
    'plugins.add.title-link',
    'plugins.add.tabs',
    'plugins.add.tabs.help',
    'plugins.add.filter',
    'plugins.add.filter.[featured, popular, recommended, favorites]',
    'plugins.add.search',
    'plugins.add.popular-tags',
    'plugins.add.item',
    'plugins.add.item.[actions, meta]',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'plugins.add',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'plugins.add' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.plugins.add]&labels=bug&assignees=darrenjacoby)**
