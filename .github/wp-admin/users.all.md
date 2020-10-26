## `wp-admin.{role}.users.all`

Remove users all/index components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'users.all',
    'users.all' => (string) $route,
    'users.all.title' => (string) $title,
    'users.all.title.[menu, page]' => (string) $title,
    'users.all.title-link',
    'users.all.tabs',
    'users.all.tabs.[screen-options, help]',
    'users.all.pagination' => (int) $pagination,
    'users.all.search',
    'users.all.subsets',
    'users.all.subsets.[administrator, editor, author, contributor, subscriber]',
    'users.all.subsets.counts',
    'users.all.actions',
    'users.all.actions.bulk',
    'users.all.list',
    'users.all.list.[cols, actions, count]',
    'users.all.list.cols',
    'users.all.list.cols.[name, email, role, posts]',
    'users.all.list.actions',
    'users.all.list.actions.[edit, view, delete]',
    'users.all.list.count',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'users.all',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'users.all' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.users.all]&labels=bug&assignees=darrenjacoby)**
