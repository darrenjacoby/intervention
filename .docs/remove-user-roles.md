# remove-user-roles

#### Description
Remove WordPress default user roles.

#### Usage
Supports multiple instances.
```php
intervention('remove-user-roles', $roles(string|array));
```

#### Defaults
$roles: `author, subscriber, contributor`

#### Options
$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

#### Examples
```php
invervention('remove-user-roles');
// Removes default user roles.

invervention('remove-user-roles', 'contributor');
// Removes user role contributor.

invervention('remove-user-roles', ['contributor', 'subscriber']);
// Removes user roles contributor and subscriber.
```
