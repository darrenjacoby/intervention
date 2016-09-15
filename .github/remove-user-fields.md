# remove-user-fields

### Description
Remove WordPress user fields from profiles for specific user roles.

### Usage
&#10003; Supports multiple instances.
```php
intervention('remove-user-fields', $fields(string|array), $roles(string|array));
```

### Defaults
$items: `all`
$roles: `all`

### Options
$fields: `options, option-title, option-editor, option-schemes, option-shortcuts, option-toolbar, names, name-first, name-last, name-nickname, name-display, contact, contact-web, about, about-bio, about-profile`

$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

### Examples
```php
intervention('remove-user-fields');
// Removes all user fields for all user roles.

intervention('remove-user-fields', 'options');
// Removes user fields options for all user roles.

intervention('remove-user-fields', ['options', 'names']);
// Removes user fields options and names for all user roles.

intervention('remove-user-fields', ['options', 'names'], 'editor');
// Removes user fields options and names for user role editor.

intervention('remove-user-fields', ['options', 'names'], ['editor', 'author']);
// Removes user fields options and names for user roles editor and author.
```
