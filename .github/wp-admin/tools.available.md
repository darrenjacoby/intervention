## `wp-admin.$role.tools.available`

Remove tools available components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'tools.available',
        'tools.available' => (string) $route,
        'tools.available.title' => (string) $title,
        'tools.available.title.[menu, page]' => (string) $title,
        'tools.available.tabs',
        'tools.available.tabs.[screen-options, help]',
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
        'tools.available',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'tools.available' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.tools.available]&labels=bug&assignees=darrenjacoby)**
