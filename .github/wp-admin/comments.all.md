## `wp-admin.$role.comments.all`

Remove all/index comment components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'comments.all',
        'comments.all' => (string) $route,
        'comments.all.title' => (string) $title,
        'comments.all.title.[menu, page]' => (string) $title,
        'comments.all.tabs',
        'comments.all.tabs.[screen-options, help]',
        'comments.all.pagination' => (int) $pagination,
        'comments.all.search',
        'comments.all.subsets',
        'comments.all.subsets.[all, mine, pending, approved, spam, trash]',
        'comments.all.subsets.counts',
        'comments.all.actions',
        'comments.all.actions.[bulk, types]',
        'comments.all.list',
        'comments.all.list.cols',
        'comments.all.list.cols.[comment, response, date]',
        'comments.all.list.actions',
        'comments.all.list.actions.[unapprove, reply, quickedit, edit, spam, trash]',
        'comments.all.list.count',
    ],
];
```

* [Route options](../route-options.md)

### Remove;

**Remove from menu;**

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'comments.all',
    ],
];
```

**Remove from menu and enforce a page redirect;**

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'comments.all' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.comments.all]&labels=bug&assignees=darrenjacoby)**
