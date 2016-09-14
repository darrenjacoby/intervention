# add-dashboard-redirect

#### Description
Add WordPress dashboard redirects for specific user roles.

#### Usage
Supports multiple instances.
```php
intervention('add-dashboard-redirect', $route(string), $roles(string|array));
```

#### Defaults
$route: `posts`, $roles: `all`

#### Options
$route: `posts, post-new, post-categories, post-tags, media, media-new, pages, pages-new, comments, themes, customizer, widgets, menus, plugins, plugins-new, users, user-new, user-profile, tools, setting-general, setting-writing, setting-reading, setting-discussion, setting-media, setting-permalink`

$roles: `all, all-not-admin, admin, editor, author, contributor, subscriber`

#### Examples
```php
intervention('add-dashboard-redirect');
// Redirect dashboard to posts for all user roles.

intervention('add-dashboard-redirect', 'pages');
// Redirect dashboard to pages for all user roles.

intervention('add-dashboard-redirect', 'pages', ['editor', 'author']);
// Redirect dashboard to pages for user roles editor and author.
```
