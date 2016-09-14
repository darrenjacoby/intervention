# remove-toolbar-items

#### Description
Remove the WordPress toolbar items from the front-end and back-end for specific user roles.

#### Usage
Supports multiple instances.
```php
intervention('remove-toolbar-items', $items(string|array), $roles(string|array));
```

#### Defaults
$items: `logo, updates, comments, new`
$roles: `all`

#### Options
$items: `logo, updates, site-name, comments, customize, new, new-post, new-page, new-media, new-user, account, account-user, account-profile`

$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

#### Examples
```php
invervention('remove-toolbar-items');
// Removes default toolbar items for all user roles.

invervention('remove-toolbar-items', 'comments');
// Removes toolbar item comments for all user roles.

invervention('remove-toolbar-items', ['comments', 'updates']);
// Removes toolbar items comments and updates for all user roles.

invervention('remove-toolbar-items', ['comments', 'updates'], 'editor');
// Removes toolbar items comments and updates for user role editor.

invervention('remove-toolbar-items', ['comments', 'updates'], ['editor', 'author']);
// Removes toolbar items comments and updates for user roles editor and author.
```
