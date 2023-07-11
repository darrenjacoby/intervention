## `wp-admin.$role.common.all.list`

Remove wp-admin all/index item list components.

### Options;

- Parent items remove child items.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'common.all.list',
        'common.all.list.count',
        'common.all.list.cols',
        'common.all.list.actions',
    ],
];
```

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.common.all.list]&labels=bug&assignees=darrenjacoby)**
