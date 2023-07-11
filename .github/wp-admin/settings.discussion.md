## `wp-admin.$role.settings.discussion`

Remove settings discussion components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'settings.discussion',
		'settings.discussion' => (string) $route,
		'settings.discussion.title' => (string) $title,
		'settings.discussion.title.[menu, page]' => (string) $title,
		'settings.discussion.tabs',
		'settings.discussion.tabs.[screen-options, help]',
		'settings.discussion.post',
		'settings.discussion.post.[ping-flag, ping-status, comments]',
		'settings.discussion.comments',
		'settings.discussion.comments.[
			name-email,
			registration,
			close,
			cookies,
			thread,
			pages,
			order
		]',
		'settings.discussion.emails',
		'settings.discussion.emails.[comment, moderation]',
		'settings.discussion.moderation',
		'settings.discussion.moderation.approve',
		'settings.discussion.moderation.approve.[manual, previous]',
		'settings.discussion.moderation.queue',
		'settings.discussion.moderation.queue.[links, keys]',
		'settings.discussion.moderation.disallowed-keys',
		'settings.discussion.avatars',
		'settings.discussion.avatars.[show, rating, default]',
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
		'settings.discussion',
	],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'settings.discussion' => 'posts',
	],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.settings.discussion]&labels=bug&assignees=darrenjacoby)**
