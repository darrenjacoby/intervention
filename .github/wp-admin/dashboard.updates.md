## `wp-admin.$role.dashboard.updates`

Remove dashboard updates components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'dashboard.updates',
        'dashboard.updates' => (string) $route,
        'dashboard.updates.title' => (string) $title,
        'dashboard.updates.title.[menu, page]' => (string) $title,
        'dashboard.updates.tabs',
        'dashboard.updates.tabs.help',
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
        'dashboard.updates',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'dashboard.updates' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.dashboard.updates]&labels=bug&assignees=darrenjacoby)**
