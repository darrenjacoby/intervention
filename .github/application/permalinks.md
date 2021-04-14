## `application.permalinks`

Set application permalinks options.

### Options;

```php
<?php

return [
    'application.permalinks' => [
        'structure' => (string) $tags,
        'category-base' => (boolean|string) false|$category_base_path,
        'tag-base' => (boolean|string) false|$tag_base_path,
        'search-base' => (boolean|string) true|$search_base_path,
        'author-base' => (string) $author_base_path,
        'comments-base' => (string) $comments_base_path,
        'pagination-base' => (string) $pagination_base_path,
        'comments-pagination-base' => (string) $comments_pagination_base_path,
        'feed-base' => (string) $feed_base_path,
    ],
];
```

### Example;

```php
<?php

return [
    'application.permalinks' => [
        'structure' => '/%postname%/',
        'category-base' => 'category',
        'tag-base' => 'tag',
        'search-base' => 'search',
        'author-base' => 'author',
        'comments-base' => 'comments',
        'pagination-base' => 'page',
        'comments-pagination-base' => 'comment-page',
        'feed-base' => 'feed',
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