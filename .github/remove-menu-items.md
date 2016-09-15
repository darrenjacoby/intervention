# remove-menu-items

### Description
Remove WordPress menu items for specific user roles.

### Usage
&#10003; Supports multiple instances.
```php
intervention('remove-menu-items', $items(string|array), $roles(string|array));
```

### Defaults
$items: `danger-zone`
$roles: `all-not-admin`

### Options
$items: `all, danger-zone, dashboard, updates, posts, post-new, post-categories, post-tags, media, media-new, pages, page-new, comments, themes, theme-widgets, theme-menu, theme-editor, plugins, plugin-new, plugin-editor, users, user-new, user-profile, tools, tool-import, tool-export, settings, setting-writing, setting-reading, setting-media, setting-permalink, setting-discussion, setting-media, setting-disable-comments, acf, acf-new, acf-tools, acf-updates`

$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

### Examples
```php
intervention('remove-menu-items');
// Removes menu item in the danger zone for all-not-admin user roles.

intervention(remove-menu-items, 'plugins');
// Removes menu item plugin for user roles all-not-admin.

intervention(remove-menu-items, ['themes', 'plugins']);
// Removes menu items themes and plugins for user roles all-not-admin.

intervention(remove-menu-items, ['themes', 'plugins'], 'editor');
// Removes menu items themes and plugins for user role editor.

intervention(remove-menu-items, ['updates', 'themes', 'plugins'], ['editor', 'author']);
// Removes menu items themes and plugins for user roles editor and author.
```
