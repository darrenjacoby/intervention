## `wp-admin.$role.users.add`

Remove users add-new components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'users.add',
		'users.add' => (string) $route,
		'users.add.title' => (string) $title,
		'users.add.title.[menu, page]' => (string) $title,
		'users.add.tabs',
		'users.add.tabs.[screen-options, help]',
		'users.add.user-notification',
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
		'users.add',
	],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'users.add' => 'posts',
	],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.users.add]&labels=bug&assignees=darrenjacoby)**
