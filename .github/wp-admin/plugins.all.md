## `wp-admin.$role.plugins.all`

Remove plugins all/index components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'plugins.all',
        'plugins.all' => (string) $route,
        'plugins.all.title' => (string) $title,
        'plugins.all.title.[menu, page]' => (string) $title,
        'plugins.all.title-link',
        'plugins.all.tabs',
        'plugins.all.tabs.[screen-options, help]',
        'plugins.all.pagination' => (int) $pagination,
        'plugins.all.search',
        'plugins.all.subsets',
        'plugins.all.subsets.[all, active, inactive, auto-updates-disabled]',
        'plugins.all.subsets.counts',
        'plugins.all.actions',
        'plugins.all.actions.[activate, deactivate, update, delete, enable-auto-update, disable-auto-update]',
        'plugins.all.list',
        'plugins.all.list.cols',
        'plugins.all.list.cols.[description, auto-updates]',
        'plugins.all.list.meta',
        'plugins.all.list.meta.[version, author, link]',
        'plugins.all.list.actions',
        'plugins.all.list.actions.[activate, deactivate, delete]',
        'plugins.all.list.count',
    ],
];
```

- [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'plugins.all',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'plugins.all' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.plugins.all]&labels=bug&assignees=darrenjacoby)**
