# update-label-post

### Description
Update WordPress posts post type labels.

### Usage
Supports single instance.
```php
intervention('update-label-post', $labels(string|array));
```

### Defaults
$labels: `null`

### Examples
```php
intervention('update-label-post', 'Books');
// Updates plural label from posts to Contents.

intervention('update-label-post', '[Books, 'Book']');
// Param 1 updates plural label from Posts to Books.
// Param 2 updates singular label from Post to Book.

intervention('update-label-post', '[Books, 'Book', 'book-alt']');
// Param 1 updates plural label from Posts to Books.
// Param 2 updates singular label from Post to Book.
// Param 3 updates dashicon to dashicons-book-alt.
```
