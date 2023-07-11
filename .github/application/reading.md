## `application.reading`

Set application reading options.

### Options;

```php
<?php

return [
	'application.reading' => [
		'front-page' => (string|int) 'post'|$page_id,
		'front-page.posts' => (string) $page_id_for_posts,
		'posts-per-page' => (int) $posts_per_page,
		'posts-per-rss' => (string) $posts_per_rss,
		'rss-excerpt' => (string) 'full'|'summary'
		'discourage-search' => (boolean) $discourage_search_engines
	],
];
```

### Example;

```php
<?php

return [
	'application.reading' => [
		'front-page' => 2,
		'front-page.posts' => 4,
		'posts-per-page' => 20,
		'posts-per-rss' => 20,
		'rss-excerpt' => 'summary',
		'discourage-search' => false,
	],
];
```

### Further Reading;

- **Option Reference**
  - [https://codex.wordpress.org/Option_Reference#Reading](https://codex.wordpress.org/Option_Reference#Reading)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[application.reading]&labels=bug&assignees=darrenjacoby)**
