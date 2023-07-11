## `application.posts`

Set application posts/posttypes.

### Options;

```php
<?php

return [
    'application.posts.$name' => (boolean|string|array) $enable|$label|$config,
];
```

### Examples;

#### Register

The most simplified registration, `book` labels are auto generated as `Book` and `Books`.

```php
<?php

return [
    'application.posts.book' => true,
];
```

You can also pass in the singular label as a string.

```php
<?php

return [
    'application.posts.book' => 'Boook',
];
```

The standard custom posttype configuration can be passed in.

```php
<?php

return [
    'application.posts' => [
        'book' => [
            'one' => 'Book',
            'many' => 'Books',
            'supports' => [
                'title', 'thumbnail', 'editor'
            ],
            'has-archive' => true,
            'hierarchical' => false,
            'menu-position' => 10,
        ],
    ],
];
```

- To enable better consistency with Intervention, options with `-` will be convereted to `_` for WordPress to consume.

#### Remove

```php
<?php

return [
    'application.posts' => [
        'post' => false,
        'attachment' => false,
    ],
];
```

- Removing a default posttype will also remove any relevant options from `wp-admin`.

#### Update

Change options on an existing post type.

```php
<?php

return [
    'application.posts' => [
        'post' => [
            'one' => 'Book',
            'many' => 'Books',
            'supports' => [
                'title', 'thumbnail', 'editor'
            ],
        ],
    ],
];
```

If you are only changing one option, consider using dot notation for a cleaner config.

```php
<?php

return [
    'application.posts.post.supports' => [
        'title', 'thumbnail', 'editor'
    ],
];
```

### Note;

- You can also use `posttypes` versus shorthand `posts`.

```php
<?php

return [
    'application.posttypes.post.supports' => [
        'title', 'thumbnail', 'editor'
    ],
];
```

### Further Reading;

- `posts.$name`
  - [https://developer.wordpress.org/reference/functions/register_post_type/](https://developer.wordpress.org/reference/functions/register_post_type/)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[application.posts]&labels=bug&assignees=darrenjacoby)**
