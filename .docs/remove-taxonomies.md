# remove-taxonomies

#### Description
Remove WordPress default taxonomies.

#### Usage
Supports multiple instances.
```php
intervention('remove-taxonomies', $taxonomies(string|array));
```

#### Defaults
$taxonomies: `all`

#### Options
$components: `all, category, tag`

#### Examples
```php
invervention('remove-taxonomies');
// Removes category and tag taxonomies.

invervention('remove-taxonomies', 'category');
// Removes taxonomy category.

invervention('remove-taxonomies', ['category', 'tag']);
// Removes taxonomies category and tag.
```
