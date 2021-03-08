## `wp-admin.$role.settings.general`

Remove settings general components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.general',
        'settings.general' => (string) $route,
        'settings.general.title' => (string) $title,
        'settings.general.title.[menu, page]' => (string) $title,
        'settings.general.tabs',
        'settings.general.tabs.[screen-options, help]',
        'settings.general.site-title',
        'settings.general.tagline',
        'settings.general.wp-address',
        'settings.general.site-address',
        'settings.general.admin-email',
        'settings.general.membership',
        'settings.general.default-role',
        'settings.general.site-lang',
        'settings.general.timezone',
        'settings.general.date-format',
        'settings.general.time-format',
        'settings.general.week-starts',
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
        'settings.general',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.general' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.settings.general]&labels=bug&assignees=darrenjacoby)**
