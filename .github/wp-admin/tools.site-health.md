## `wp-admin.$role.tools.site-health`

Remove tools site-health components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'tools.site-health',
		'tools.site-health' => (string) $route,
		'tools.site-health.title' => (string) $title,
		'tools.site-health.title.[menu, page]' => (string) $title,
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
		'tools.site-health',
	],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'tools.site-health' => 'posts',
	],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.tools.site-health]&labels=bug&assignees=darrenjacoby)**
