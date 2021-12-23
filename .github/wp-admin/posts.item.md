## `wp-admin.$role.posts.item`

Remove posts item components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'posts.item',
        'posts.item' => (string) $route,
        // block-editor
        'posts.item.add',
        'posts.item.add.[
            search,
            preview,
            headers,
            tips,
            grid,
            icons,
        ],'
        'posts.item.add.blocks',
        'posts.item.add.blocks.[
            text,
            media,
            design,
            widgets,
            theme,
            embeds,
        ],'
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
        // classic
        'posts.item.tabs',
        'posts.item.tabs.[screen-options, help]',
    ],
];
```

* [Route options](../route-options.md)
* [Full list of `editor.add.blocks.$x`](../common.editor.md)

### Remove;

Remove from menu;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'posts.item',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'posts.item' => 'pages',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.posts.item]&labels=bug&assignees=darrenjacoby)**
