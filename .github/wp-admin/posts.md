## `wp-admin.$role.posts`

Update, remove or redirect the posts menu item.

### Options;

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'posts',
		'posts' => (string) $route,
		'posts.title' => (string) $title,
		'posts.icon' => (string) $dashicon,
	],
];
```

- [Route options](../route-options.md)
- [Dashicon options](https://developer.wordpress.org/resource/dashicons/#editor-customchar)

### Remove;

- [Remove the post type on an application level](../application/posttype)

Remove from menu;

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'posts',
	],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
	'wp-admin.$role|$username' => [
		'posts' => 'pages',
	],
];
```

- [Route options](../route-options.md)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.posts]&labels=bug&assignees=darrenjacoby)**
