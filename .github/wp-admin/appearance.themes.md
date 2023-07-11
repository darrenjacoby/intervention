## `wp-admin.$role.appearance.themes`

Remove wp-admin themes components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'appearance.themes',
		'appearance.themes' => (string) $route,
		'appearance.themes.title' => (string) $title,
		'appearance.themes.title.[menu, page]' => (string) $title,
		'appearance.themes.title-count',
		'appearance.themes.title-link',
		'appearance.themes.search',
		'appearance.themes.tabs',
		'appearance.themes.inactive',
		'appearance.themes.theme',
		'appearance.themes.theme.[actions, nag]',
		'appearance.themes.theme.actions.[activate, customize]',
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
		'appearance.themes',
	],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'appearance.themes' => 'posts',
	],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.appearance.themes]&labels=bug&assignees=darrenjacoby)**
