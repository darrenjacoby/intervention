## `wp-admin.{role}.common.tabs`

Remove wp-admin screen options and help tabs.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'common.tabs',
    'common.tabs.screen-options',
    'common.tabs.screen-options.[pagination, view-mode]',
    'common.tabs.help',
    'common.tabs.help.[
        overview,
        navigation,
        layout,
        content,
        screen-content,
        available-actions,
        bulk-actions,
        adding-terms,
        managing-pages,
        available-actions,
        attaching-files,
        sidebar,
        moderating-comments,
        adding-themes,
        preview-customize,
        removing-reusing,
        missing-widgets,
        custom-html-widget,
        menu-management,
        editing-menus,
        troubleshooting,
        adding-plugins,
        user-roles,
        converter,
        post-email,
        update-services,
        visibility,
        permalink-settings,
        custom-structures,
    ]',
];
```

### Examples;

Remove screen options and help tabs;

```php
[
    'common.tabs',
];
```

Remove screen options tab;

```php
[
    'common.tabs.screen-options',
];
```

Remove help tab;

```php
[
    'common.tabs.help',
];
```

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.common.tabs]&labels=bug&assignees=darrenjacoby)**
