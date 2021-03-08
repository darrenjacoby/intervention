## `wp-admin.$role.appearance.widgets`

Remove wp-admin widgets components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance.widgets',
        'appearance.widgets' => (string) $route,
        'appearance.widgets.title' => (string) $title,
        'appearance.widgets.title.[menu, page]' => (string) $title,
        'appearance.widgets.title-link',
        'appearance.widgets.tabs',
        'appearance.widgets.tabs.[screen-options, help]',
        'appearance.widgets.inactive',
        'appearance.widgets.available',
        'appearance.widgets.available.[
            archives, 
            audio, 
            calendar, 
            categories, 
            custom-html, 
            gallery, 
            image, 
            meta, 
            navigation-menu, 
            pages, 
            recent-comments, 
            recent-posts, 
            rss, 
            search, 
            tag-cloud, 
            text, 
            video, 
            akisment, 
            links
        ]',
    ],
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance.widgets',
    ],
];
```

Remove from menu and enforce a page redirect;

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'appearance.widgets' => 'posts',
    ],
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.appearance.widgets]&labels=bug&assignees=darrenjacoby)**
