## `wp-admin.$role.pages.all`

Remove pages all/index components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'pages.all',
        'pages.all' => (string) $route,
        'pages.all.title' => (string) $title,
        'pages.all.title.[menu, page]' => (string) $title,
        'pages.all.title-link',
        'pages.all.tabs',
        'pages.all.tabs.[screen-options, help]',
        'pages.all.pagination' => (int) $pagination,
        'pages.all.search',
        'pages.all.subsets',
        'pages.all.subsets.[all, published, scheduled, draft, pending]',
        'pages.all.subsets.counts',
        'pages.all.actions',
        'pages.all.actions.bulk',
        'pages.all.filter',
        'pages.all.filter.date',
        'pages.all.list',
        'pages.all.list.cols',
        'pages.all.list.cols.[author, comments, date]',
        'pages.all.list.actions',
        'pages.all.list.actions.[edit, quick-edit, trash, view]',
        'pages.all.list.count',
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
        'pages.all',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'pages.all' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.pages.all]&labels=bug&assignees=darrenjacoby)**
