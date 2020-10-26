## `wp-admin.$role.common.adminbar`

Remove wp-admin adminbar components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'common.adminbar',
    'common.adminbar.wp',
    'common.adminbar.wp.[about, documentation, support, feedback]',
    'common.adminbar.updates',
    'common.adminbar.site',
    'common.adminbar.site.[menu, visit, dashboard, themes, widgets, menus]',
    'common.adminbar.comments',
    'common.adminbar.new',
    'common.adminbar.new.[post, page, media, user]',
    'common.adminbar.edit',
    'common.adminbar.view',
    'common.adminbar.view.[archive, single]',
    'common.adminbar.user',
    'common.adminbar.user.[howdy, avatar, profile, edit]',
    'common.adminbar.search',
    'common.adminbar.theme',
];
```

### Examples;

Remove all;

```php
[
    'common.adminbar',
];
```

Remove from theme view;

```php
[
    'common.adminbar.theme',
];
```

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.common.adminbar]&labels=bug&assignees=darrenjacoby)**
