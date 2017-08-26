# add-menu-page

### Description
Add custom WordPress menu page/s.

### Usage
&#10003; Supports multiple instances.

You may pass a string to `$config` to update page_title, menu_title and menu_slug, and callback function name or an array using any [add_menu_page options](https://developer.wordpress.org/reference/functions/add_menu_page/).

```php
intervention('add-menu-page', $config(string|array), $roles(string|array));
```

### Defaults
$config: `null`
$roles: `admin, editor`

### Options
$config: [add_menu_page options](https://developer.wordpress.org/reference/functions/add_menu_page/)

$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

### Examples
```php

intervention('add-menu-page', 'Name');
// Adds a custom menu page with page and menu title as Name, slug as name, and callback function as name().

intervention('add-menu-page', [
    'page_title'    => 'Page Name',
    'menu_title'    => 'Menu Name ',
    'menu_slug'     => 'name',
    'function'      => '\App\name',
    'icon_url'      => 'welcome-learn-more',
    'position'      => 5
]);
// Adds a custom menu page using the https://developer.wordpress.org/reference/functions/add_menu_page/ parameters.

intervention('add-menu-page', 'Name', 'admin');
// Adds a custom menu page for user role admin.

intervention('add-menu-page', 'Name', ['admin', 'editor']);
// Adds a custom menu page for user roles admin and editor.
```
