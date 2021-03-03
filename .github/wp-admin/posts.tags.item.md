## `wp-admin.$role.posts.tags.item`

Remove posts tags item components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'posts.tags.item',
    'posts.tags.item' => (string) $route,
    'posts.tags.item.title' => (string) $title,
    'posts.tags.item.title.page' => (string) $title,
    'posts.tags.item.slug',
    'posts.tags.item.parent',
    'posts.tags.item.description',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'posts.tags.item',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'posts.tags.item' => 'pages',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.posts.tags.item]&labels=bug&assignees=darrenjacoby)**
