## `wp-admin.$role.appearance.menus`

Remove wp-admin menu components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance.menus',
        'appearance.menus' => (string) $route,
        'appearance.menus.title' => (string) $title,
        'appearance.menus.title.[menu, page]' => (string) $title,
        'appearance.menus.title-link',
        'appearance.menus.tabs',
        'appearance.menus.tabs.[screen-options, help]',
        'appearance.menus.nag',
        'appearance.menus.add',
        'appearance.menus.add.[custom, post, page, category, tag]',
        'appearance.menus.item',
        'appearance.menus.item.[target, title, classes, xfn, description, remove]',
        'appearance.menus.settings',
        'appearance.menus.settings.[auto-add, location]',
        'appearance.menus.delete',
        'appearance.menus.max-depth' => (int) $depth,
        'appearance.menus.max-depth.$name' => (int) $depth,
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
        'appearance.menus',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance.menus' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.appearance.menus]&labels=bug&assignees=darrenjacoby)**
