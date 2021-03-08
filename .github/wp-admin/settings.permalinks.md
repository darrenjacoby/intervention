## `wp-admin.$role.settings.permalinks`

Remove settings permalinks components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.permalinks',
        'settings.permalinks' => (string) $route,
        'settings.permalinks.title' => (string) $title,
        'settings.permalinks.title.[menu, page]' => (string) $title,
        'settings.permalinks.tabs',
        'settings.permalinks.tabs.[screen-options, help]',
        'settings.permalinks.common',
        'settings.permalinks.optional',
        'settings.permalinks.optional.[category, tag]',
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
        'settings.permalinks',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.permalinks' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.settings.permalinks]&labels=bug&assignees=darrenjacoby)**
