## `wp-admin.$role.posts.item`

Remove posts item components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'posts.item',
    'posts.item' => (string) $route,
    'posts.item.tabs',
    'posts.item.tabs.[screen-options, help]',
    'posts.item.add',
    'posts.item.editor',
    'posts.item.author',
    'posts.item.excerpt',
    'posts.item.trackbacks',
    'posts.item.custom-fields',
    'posts.item.discussion',
    'posts.item.link',
    'posts.item.revisions',
    'posts.item.featured-image',
    'posts.item.editor',
    'posts.item.categories',
    'posts.item.tags',
    'posts.item.sticky',
    'posts.item.revisions',
    'posts.item.format',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'posts.item',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'posts.item' => 'pages',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.posts.item]&labels=bug&assignees=darrenjacoby)**
