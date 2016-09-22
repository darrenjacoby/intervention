# add-acf-page

### Description
Add custom Advanced Custom Fields option page/s.

### Usage
&#10003; Supports multiple instances.

You may pass a string to `$config` to update page_title, menu_title and menu_slug, or an array using any [advanced custom field options](https://www.advancedcustomfields.com/resources/acf_add_options_page/).

```php
intervention('add-acf-page', $config(string|array), $roles(string|array));
```

### Defaults
$config: `null`
$roles: `admin, editor`

### Options
$config: [advanced custom field options](https://www.advancedcustomfields.com/resources/acf_add_options_page/)

$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

### Examples
```php
intervention('add-acf-page');
// Adds a default Advanced Custom Fields options page.

intervention('add-acf-page', 'Theme Settings');
// Adds a Advanced Custom Fields options page with page and menu title as Theme Settings and slug theme_settings.

intervention('add-acf-page', [
    'page_title' 	=> 'Theme General Settings',
    'menu_title'  => 'Theme Settings',
    'menu_slug'   => 'theme-general-settings'
]);
// Adds a Advanced Custom Fields options page using the https://www.advancedcustomfields.com/resources/acf_add_options_page/ parameters.

intervention('add-acf-page', 'Theme Settings', 'admin');
// Adds a Advanced Custom Fields custom options page for user role admin.

intervention('add-acf-page', 'Theme Settings', ['admin', 'editor']);
// Adds a Advanced Custom Fields custom options page for user roles admin and editor.
```
