## `wp-admin.$role.users.profile`

Remove users profile components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'users.profile',
    'users.profile' => (string) $route,
    'users.profile.title' => (string) $title,
    'users.profile.title.[menu, page]' => (string) $title,
    'users.profile.tabs',
    'users.profile.tabs.[screen-options, help]',
    'users.profile.options',
    'users.profile.options.[title, editor, syntax, schemes, shortcuts, toolbar]',
    'users.profile.name',
    'users.profile.name.[first, last, nickname, display]',
    'users.profile.contact',
    'users.profile.contact.web',
    'users.profile.about',
    'users.profile.about.[bio, picture]',
    'users.profile.role',
    'users.profile.role.[
        all-not-admin, 
        all, 
        wc, 
        administrator, 
        author, 
        editor, 
        contributor, 
        subscriber, 
        customer, 
        shop-manager
    ]',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'users.profile',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'users.profile' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.users.profile]&labels=bug&assignees=darrenjacoby)**
