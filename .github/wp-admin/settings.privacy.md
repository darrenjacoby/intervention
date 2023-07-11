## `wp-admin.$role.settings.privacy`

Remove settings privacy components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.privacy',
        'settings.privacy' => (string) $route,
        'settings.privacy.title' => (string) $title,
        'settings.privacy.title.[menu, page]' => (string) $title,
        'settings.privacy.tabs',
        'settings.privacy.tabs.[screen-options, help]',
        'settings.privacy.policy-page',
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
        'settings.privacy',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'settings.privacy' => 'posts',
    ],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.settings.privacy]&labels=bug&assignees=darrenjacoby)**
