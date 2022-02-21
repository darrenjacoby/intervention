## `wp-admin.$role.media.all`

Remove media all/index components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'media.all',
        'media.all' => (string) $route,
        'media.all.title' => (string) $title,
        'media.all.title.[menu, page]' => (string) $title,
        'media.all.title-link',
        'media.all.tabs',
        'media.all.tabs.[screen-options, help]',
        'media.all.pagination' => (int) $pagination,
        'media.all.search',
        'media.all.mode',
        'media.all.mode' => (string) 'grid' or 'list',
        'media.all.filter',
        'media.all.filter.[type, date]',
        'media.all.actions',
        'media.all.list',
        'media.all.list.cols',
        'media.all.list.cols.[author, uploaded-to, comments, date]',
        'media.all.list.actions',
        'media.all.list.actions.[edit, delete, view]',
        'media.all.list.count',
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
        'media.all',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'media.all' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.media.all]&labels=bug&assignees=darrenjacoby)**
