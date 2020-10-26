## `wp-admin.$role.appearance.theme-editor`

Remove wp-admin theme editor components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'appearance.theme-editor',
    'appearance.theme-editor' => (string) $route,
    'appearance.theme-editor.title' => (string) $title,
    'appearance.theme-editor.title.[menu, page]' => (string) $title,
    'appearance.theme-editor.tabs',
    'appearance.theme-editor.tabs.[screen-options, help]',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'appearance.theme-editor',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'appearance.theme-editor' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.appearance.theme-editor]&labels=bug&assignees=darrenjacoby)**
