## `wp-admin.$role.posts.categories.item`

Remove posts categories item components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'posts.categories.item',
    'posts.categories.item' => (string) $route,
    'posts.categories.item.title' => (string) $title,
    'posts.categories.item.title.page' => (string) $title,
    'posts.categories.item.slug',
    'posts.categories.item.parent',
    'posts.categories.item.description',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'posts.categories.item',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'posts.categories.item' => 'pages',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.posts.categories.item]&labels=bug&assignees=darrenjacoby)**
