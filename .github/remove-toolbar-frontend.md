# remove-toolbar-frontend

### Description
Remove the WordPress admin toolbar on the front-end for specific user roles.

### Usage
&#10003; Supports multiple instances.
```php
intervention('remove-toolbar-frontend', $roles(string|array));
```

### Defaults
$roles: `all`

### Options
$roles:  `all, all-not-admin, admin, editor, author, contributor, subscriber`

### Examples
```php
invervention(remove-toolbar-frontend);
// Removes front-end toolbar for all user roles.

invervention(remove-toolbar-frontend, 'contributor');
// Removes front-end toolbar for user role contributor.

invervention(remove-toolbar-frontend, ['contributor', 'subscriber']);
// Removes front-end toolbar for user roles contributor and subscriber.
```
