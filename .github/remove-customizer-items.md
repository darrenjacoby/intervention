# remove-customizer-items

### Description
Remove WordPress customizer items for specific user roles.

### Usage
&#10003; Supports multiple instances.
```php
intervention('remove-customizer-items', $items(string|array), $roles(string|array));
```

### Defaults
$items: `header-image, background-image, colors, custom-css, site-tagline`
$roles: `all`

### Options
$items: `all, site, site-title, site-tagline, site-icon, custom-css, colors, header-image, background-image, static-front-page`

$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

### Examples
```php
intervention('remove-customizer-items');
// Removes default items for all user roles.

intervention('remove-customizer-items', ['custom-css', 'site-tagline']);
// Removes items custom-css and site-tagline for all user roles.

intervention('remove-customizer-items', ['custom-css', 'site-tagline'], ['admin', 'editor']);
// Removes items custom-css and site-tagline for user roles admin and editor.
```
