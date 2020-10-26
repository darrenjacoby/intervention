## `wp-admin.{role}.posts.tags.all`

Remove posts tags all/index components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'posts.tags.all',
    'posts.tags.all' => (string) $route,
    'posts.tags.all.title' => (string) $title,
    'posts.tags.all.title.[menu, page]' => (string) $title,
    'posts.tags.all.tabs',
    'posts.tags.all.tabs.[screen-options, help]',
    'posts.tags.all.search',
    'posts.tags.all.actions',
    'posts.tags.all.actions.bulk',
    'posts.tags.all.list',
    'posts.tags.all.list.cols',
    'posts.tags.all.list.cols.[description, slug, count]',
    'posts.tags.all.list.actions',
    'posts.tags.all.list.actions.[edit, quick-edit, trash, view]',
    'posts.tags.all.list.count',
    'posts.tags.all.notes',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'posts.tags.all',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'posts.tags.all' => 'pages',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.posts.tags.all]&labels=bug&assignees=darrenjacoby)**
