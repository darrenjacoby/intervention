# add-svg-support

### Description
Add WordPress svg file support for specific user roles.

### Usage
Supports multiple instances.
```php
intervention('add-svg-support', $roles(string|array));
```

### Defaults
$roles: `admin, editor, author`

### Options
$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

### Examples
```php
intervention('add-svg-support');
// Adds svg support for user roles admin, editor and author.

intervention('add-svg-support', 'admin');
// Adds svg support for only user role admin.

intervention('add-svg-support', ['admin', 'editor']);
// Adds svg support for user roles admin and editor.
```
