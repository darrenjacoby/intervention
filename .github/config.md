# Config

The config file accepts dot notatation, a standard array, or a combination of these.

**Dot notation;**

```php
return [
    'wp-admin.$role.common.adminbar.wp',
    'wp-admin.$role.common.adminbar.new',
    'wp-admin.$role.common.adminbar.edit',
    'wp-admin.$role.common.adminbar.view',
];
```

**Standard array;**

```php
return [
    'wp-admin' => [
        '$role' => [
            'common' => [
                'adminbar' => [
                    'wp', 'new', 'edit', 'view'
                ],
            ],
        ],
    ],
];
```

**Combination;**

Using these approaches interchangeably can help bring readability and structure to the config file.

```php
return [
    'wp-admin.$role' => [
        'common.adminbar', => [
            'wp', 'new', 'edit', 'view'
        ],
    ],
];
```
