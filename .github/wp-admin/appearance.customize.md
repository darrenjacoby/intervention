## `wp-admin.$role.appearance.customize`

Remove wp-admin customize components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance.customize',
        'appearance.customize' => (string) $route,
        'appearance.customize.title' => (string) $title,
        'appearance.customize.title.[menu, page]' => (string) $title,
        'appearance.customize.theme',
        'appearance.customize.site',
        'appearance.customize.site.[title, tagline, icon]',
        'appearance.customize.custom-css',
        'appearance.customize.colors',
        'appearance.customize.header-image',
        'appearance.customize.background-image',
        'appearance.customize.homepage',
        'appearance.customize.menus',
        'appearance.customize.menus.[locations, add]',
        'appearance.customize.widgets',
        'appearance.customize.footer',
        'appearance.customize.footer.[devices]',
    ],
];
```

- [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance.customize',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance.customize' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.appearance.customize]&labels=bug&assignees=darrenjacoby)**
