# remove-update-notices

### Description
Remove the WordPress update notices for specific user roles.

### Usage
&#10003; Supports multiple instances.
```php
intervention('remove-update-notices', $roles(string|array));
```

### Defaults
$roles: `all-not-admin`

### Options
$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

### Examples
```php
invervention(remove-update-notices);
// Removes update notices for user roles all-not-admin.

invervention(remove-update-notices, 'editor');
// Removes update notices for user role editor.

invervention(remove-update-notices, ['editor', 'author']);
// Removes update notices for user roles editor and author.
```
