## `wp-admin.$role.common.menu`

Remove wp-admin left hand side menu components.

### Options;

* Parent items remove child items. 

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'common.menu',
        'common.menu.collapse',
        'common.menu.icons',
        'common.menu.nags',
        'common.menu.order' => (array) $order,
    ],
];
```

### Examples;

Remove all;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'common.menu',
    ],
];
```

Order top level menu items;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'common.menu.order' => [
            'dashboard',
            'pages',
            'posts',
            'separator1',
            'users',
            'comments',
            'separator2',
            'media',
            'appearance',
            'plugins',
            'tools',
            'settings',
            // for custom pages, reference the page filename. 
            'edit.php?post_type=acf-field-group.php', // advanced custom fields
        ],
    ],
];
```

* WordPress has two menu separators by default, named `separator1` and `separator2`.
* [Further reading](https://developer.wordpress.org/reference/hooks/menu_order/)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.common.menu]&labels=bug&assignees=darrenjacoby)**
