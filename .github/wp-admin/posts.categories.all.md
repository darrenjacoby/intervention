## `wp-admin.$role.posts.categories.all`

Remove posts categories all/index components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'posts.categories.all',
        'posts.categories.all' => (string) $route,
        'posts.categories.all.title' => (string) $title,
        'posts.categories.all.title.[menu, page]' => (string) $title,
        'posts.categories.all.tabs',
        'posts.categories.all.tabs.[screen-options, help]',
        'posts.categories.all.search',
        'posts.categories.all.actions',
        'posts.categories.all.actions.bulk',
        'posts.categories.all.list',
        'posts.categories.all.list.cols',
        'posts.categories.all.list.cols.[description, slug, count]',
        'posts.categories.all.list.actions',
        'posts.categories.all.list.actions.[edit, quick-edit, trash, view]',
        'posts.categories.all.list.count',
        'posts.categories.all.notes',
    ],
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'posts.categories.all',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'posts.categories.all' => 'pages',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.posts.categories.all]&labels=bug&assignees=darrenjacoby)**
