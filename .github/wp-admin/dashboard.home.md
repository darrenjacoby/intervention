## `wp-admin.$role.dashboard.home`

Remove dashboard home components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'dashboard.home',
    'dashboard.home' => (string) $route,
    'dashboard.home.title' => (string) $title,
    'dashboard.home.title.[menu, page]' => (string) $title,
    'dashboard.home.tabs',
    'dashboard.home.tabs.[screen-options, help]',
    'dashboard.home.cols' => (int) $num_of_cols
    'dashboard.home.welcome'
    'dashboard.home.notices'
    'dashboard.home.activity'
    'dashboard.home.right-now'
    'dashboard.home.recent-comments'
    'dashboard.home.incoming-links'
    'dashboard.home.plugins'
    'dashboard.home.quick-draft'
    'dashboard.home.drafts'
    'dashboard.home.news'
    'dashboard.home.site-health'
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'dashboard.home',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'dashboard.home' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.dashboard.home]&labels=bug&assignees=darrenjacoby)**
