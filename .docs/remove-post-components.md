# remove-post-components

### Description
Remove WordPress support for post component/s.

### Usage
Supports multiple instances.
```php
intervention('remove-post-components', $components(string|array));
```

### Defaults
$components: `author, excerpt, trackbacks, custom-fields, comments`

### Options
$components: `all, editor, author, excerpt, trackbacks, custom-fields, comments, slug, revisions, thumbnail`

### Examples
```php
invervention('remove-post-components');
// Removes default post components.

invervention('remove-post-components', 'author');
// Removes post component author.

invervention('remove-post-components', ['author', 'custom-fields']);
// Removes post components author and custom-fields.
```
