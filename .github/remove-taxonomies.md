# remove-taxonomies

### Description
Remove WordPress default taxonomies.

### Usage
&#10003; Supports multiple instances.
```php
intervention('remove-taxonomies', $taxonomies(string|array));
```

### Defaults
$taxonomies: `all`

### Options
$components: `all, category, tag`

### Examples
```php
intervention('remove-taxonomies');
// Removes category and tag taxonomies.

intervention('remove-taxonomies', 'category');
// Removes taxonomy category.

intervention('remove-taxonomies', ['category', 'tag']);
// Removes taxonomies category and tag.
```
