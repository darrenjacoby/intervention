## `wp-admin.$role.plugins.plugin-editor`

Remove wp-admin plugin editor components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'plugins.plugin-editor',
		'plugins.plugin-editor' => (string) $route,
		'plugins.plugin-editor.title' => (string) $title,
		'plugins.plugin-editor.title.[menu, page]' => (string) $title,
		'plugins.plugin-editor.tabs',
		'plugins.plugin-editor.tabs.[screen-options, help]',
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
		'plugins.plugin-editor',
	],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'plugins.plugin-editor' => 'posts',
	],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.plugins.plugin-editor]&labels=bug&assignees=darrenjacoby)**
