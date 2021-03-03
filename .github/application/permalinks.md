## `application.permalinks`

Set application permalinks options.

### Options;

```php
[
    'permalinks' => [
        'structure' => (string) $tags,
        'category-base' => (boolean|string) false|$category_base_path,
        'tag-base' => (boolean|string) false|$tag_base_path,
        'search-base' => (boolean|string) true|$search_base_path
    ],
];
```

### Example;

```php
[
    'permalinks' => [
        'structure' => '/%postname%/',
        'category-base' => 'category',
        'tag-base' => 'tag',
        'search-base' => 'search',
    ],
];
```

* Setting `'permalinks.search-base' => true` will change the default WordPress search permalink structure from `?s={query}` to `/search/{query}`

### Further Reading;

* `permalinks.structure`
    * [https://wordpress.org/support/article/using-permalinks/#structure-tags](https://wordpress.org/support/article/using-permalinks/#structure-tags)
* `permalinks.category-base` and `permalinks.tag-base`
    * [https://wordpress.org/support/article/using-permalinks/#category-base-and-tag-base](https://wordpress.org/support/article/using-permalinks/#category-base-and-tag-base)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[application.permalinks]&labels=bug&assignees=darrenjacoby)**