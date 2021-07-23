## `wp-admin.$role.pages.item`

Remove pages item components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'pages.item',
        'pages.item' => (string) $route,
        'pages.item.title' => (string) $title,
        'pages.item.title.[menu, page]' => (string) $title,
        // block-editor
        'pages.item.add',
        'pages.item.add.[
            search,
            preview,
            headers,
            tips,
            grid,
            icons,
        ],'
        'pages.item.add.blocks',
        'pages.item.add.blocks.[
            text,
            media,
            design,
            widgets,
            theme,
            embeds,
        ],'
        'pages.item.editor',
        'pages.item.author',
        'pages.item.link',
        'pages.item.featured-image',
        'pages.item.attributes',
        'pages.item.custom-fields',
        'pages.item.discussion',
        // classic
        'pages.item.title-link',
        'pages.item.tabs',
        'pages.item.tabs.[screen-options, help]',
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
        'pages.item',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'pages.item' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.pages.item]&labels=bug&assignees=darrenjacoby)**