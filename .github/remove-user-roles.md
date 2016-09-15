# remove-user-roles

### Description
Remove WordPress default user roles.

### Usage
&#10003; Supports multiple instances.
```php
intervention('remove-user-roles', $roles(string|array));
```

### Defaults
$roles: `author, subscriber, contributor`

### Options
$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

### Examples
```php
intervention('remove-user-roles');
// Removes default user roles.

intervention('remove-user-roles', 'contributor');
// Removes user role contributor.

intervention('remove-user-roles', ['contributor', 'subscriber']);
// Removes user roles contributor and subscriber.
```
