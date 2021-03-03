## `wp-admin.$role.posts.all`

Remove posts all/index components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'posts.all',
    'posts.all' => (string) $route,
    'posts.all.title' => (string) $title,
    'posts.all.title.[menu, page]' => (string) $title,
    'posts.all.title-link',
    'posts.all.tabs',
    'posts.all.tabs.[screen-options, help]',
    'posts.all.pagination' => (int) $pagination,
    'posts.all.search',
    'posts.all.subsets',
    'posts.all.subsets.[all, published, scheduled, draft, pending]',
    'posts.all.subsets.counts',
    'posts.all.actions',
    'posts.all.actions.bulk',
    'posts.all.filter',
    'posts.all.filter.[date, category]',
    'posts.all.list',
    'posts.all.list.cols',
    'posts.all.list.cols.[author, categories, tags, comments, date]',
    'posts.all.list.actions',
    'posts.all.list.actions.[edit, quick-edit, trash, view]',
    'posts.all.list.count',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'posts.all',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'posts.all' => 'pages',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.posts.all]&labels=bug&assignees=darrenjacoby)**
