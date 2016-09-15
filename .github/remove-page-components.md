# remove-page-components

### Description
Remove WordPress support for page component/s.

### Usage
&#10003; Supports multiple instances.
```php
intervention('remove-page-components', $components(string|array));
```

### Defaults
$components: `author, thumbnail, page-attributes, custom-fields, comments`

### Options
$components: `all, editor, author, thumbnail, page-attributes, custom-fields, comments`

### Examples
```php
intervention('remove-page-components');
// Removes default page components.

intervention('remove-page-components', 'author');
// Removes page component author.

intervention('remove-page-components', ['author', 'custom-fields']);
// Removes page components author and custom-fields.
```
