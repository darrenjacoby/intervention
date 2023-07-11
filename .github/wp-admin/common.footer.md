## `wp-admin.$role.common.footer`

Remove wp-admin footer components.

### Options;

- Parent items remove child items.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'common.footer',
        'common.footer.credit',
        'common.footer.credit' => (string) $credit,
        'common.footer.version',
    ],
];
```

### Examples;

Remove all;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'common.footer',
    ],
];
```

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.common.footer]&labels=bug&assignees=darrenjacoby)**
