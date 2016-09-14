# remove-dashboard-items

#### Description
Remove WordPress dashboard items/widgets for specific user roles.

#### Usage
Supports multiple instances.
```php
intervention('remove-dashboard-items', $items(string|array), $roles(string|array));
```

#### Defaults
$items: `all`
$roles: `all`

#### Options
$items: `all, welcome, notices, activity, right-now, recent-comments, incoming-links, plugins, quick-draft, drafts, news`

$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

#### Examples
```php
intervention('remove-dashboard-items');
// Removes all items/widgets for all user roles.

intervention('remove-dashboard-items', ['welcome', 'activity']);
// Removes items/widgets welcome and activity for all user roles.

intervention('add-dashboard-items', ['welcome', 'activity'], ['admin', 'editor']);
// Removes items/widgets welcome and activity for user roles admin and editor.
```
