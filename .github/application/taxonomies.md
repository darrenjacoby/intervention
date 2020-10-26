## `application.taxonomies`

Set application taxonomies.

### Options;

```php
[
    'taxonomies.{name}' => (boolean|string|array) $enable|$label|$config,
];
```

### Examples;

#### Register

The most simplified registration, `genre` labels are auto generated as `Genre` and `Genres`.

```php
[
    'taxonomies.genre',
];
```

You can also pass in the singular label as a string.

```php
[
    'taxonomies.genre' => 'Types',
];
```

The standard custom posttype configuration can be passed in. 

```php
[
    'taxonomies' => [
        'genre' => [
            'one' => 'Genre',
            'many' => 'Genres',
            'links' => [
                'post', 'book'
            ],
            'hierarchical' => true,
        ],
    ],
];
```

* To enable better consistency with Intervention, options with `-` will be convereted to `_` for WordPress to consume.

#### Remove

```php
[
    'taxonomies.post-tag' => false,
];
```

#### Update

Change options on an existing post type.

```php
[
    'taxonomies' => [
        'category' => [
            'one' => 'Genre',
            'many' => 'Genres',
            'links' => [
                'post', 'book'
            ],
        ],
    ],
];
```

If you are only changing one option, consider using dot notation for a cleaner config. 

```php
[
    'taxonomies.category.links' => [
        'post', 'book'
    ],
];
```

### 

### Further Reading;

* `taxonomies.{name}`
    * [https://developer.wordpress.org/reference/functions/register_taxonomy/](https://developer.wordpress.org/reference/functions/register_taxonomy/)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[application.taxonomies]&labels=bug&assignees=darrenjacoby)**