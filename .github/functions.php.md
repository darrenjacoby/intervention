# functions.php

### Description
Include modules into your themes functions.php file.

Recommended: Use a conditional statement to determine if the plugin is activated to avoid errors.

```php
if (function_exists('Sober\Intervention\intervention')) {
    // functions
}
```

### Example
```php
/**
 * Intervention functions/modules
 * @link https://github.com/soberwp/
 */
use function Sober\Intervention\intervention;

if (function_exists('Sober\Intervention\intervention')) {
    intervention('add-acf-page', 'Theme Settings');
    intervention('add-dashboard-item', ['Header', 'Content']);
    intervention('add-dashboard-redirect', 'pages', ['editor', 'author']);
    intervention('add-svg-support', ['admin', 'editor']);
    intervention('remove-dashboard-items', ['right-now', 'activity'], ['admin', 'editor']);
    intervention('remove-emoji');
    intervention('remove-help-tabs');
    intervention('remove-howdy');
    intervention('remove-menu-items', ['themes', 'plugins'], ['editor', 'author']);
    intervention('remove-page-components', ['author', 'custom-fields', 'comments']);
    intervention('remove-post-components', ['custom-fields', 'comments', 'trackbacks']);
    intervention('remove-taxonomies', ['tag', 'category']);
    intervention('remove-toolbar-frontend', ['all-not-admin']);
    intervention('remove-toolbar-items', ['logo', 'updates', 'comments', 'new-media', 'new-user'], ['editor', 'author']);
    intervention('remove-update-notices', ['editor', 'author']);
    intervention('remove-user-fields', ['options', 'names', 'contact'], ['editor', 'author']);
    intervention('remove-user-roles', ['subscriber', 'contributor']);
    intervention('remove-widgets', ['calendar', 'rss']);
    intervention('update-dashboard-columns', 2);
    intervention('update-label-footer', 'Footer Paragraph');
    intervention('update-label-page', ['Content', 'Content', 'smiley']);
    intervention('update-label-post', ['Books', 'Book', 'book']);
    intervention('update-pagination', 100);
}
```
