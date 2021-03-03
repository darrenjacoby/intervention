# Upgrading

## 1.x.x to 2.x.x

* [remove-customizer-items](#remove-customizer-items)
* [remove-dashboard-items](#remove-dashboard-items)
* [remove-help-tabs](#remove-help-tabs)
* [remove-howdy](#remove-howdy)
* [remove-menu-items](#remove-menu-items)
* [remove-page-components](#remove-page-components)
* [remove-post-components](#remove-post-components)
* [remove-taxonomies](#remove-taxonomies)
* [remove-toolbar-frontend](#remove-toolbar-frontend)
* [remove-update-notices](#remove-update-notices)
* [remove-user-fields](#remove-user-fields)
* [remove-user-roles](#remove-user-roles)
* [remove-widgets](#remove-widgets)
* [remove-emoji](#remove-emoji)
* [remove-attachment-pages](#remove-attachment-pages)
* [update-dashboard-columns](#update-dashboard-columns)
* [update-label-footer](#update-label-footer)
* [update-label-page](#update-label-page)
* [update-label-post](#update-label-post)
* [update-pagination](#update-pagination)
* [add-dashboard-redirect](#add-dashboard-redirect)
* [add-svg-support](#add-svg-support)
* [add-dashboard-item](#add-dashboard-item)
* [add-menu-page](#add-menu-page)
* [add-acf-page](#add-acf-page)

### remove-customizer-items

```php
intervention('remove-customizer-items', ['site', 'custom-css'], '$role');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'appearance.customize', => [
            'site', 'custom-css'
        ],
    ],
];
```

### remove-dashboard-items

```php
intervention('remove-dashboard-items', ['right-now', 'recent-comments'], '$role');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'dashboard.home' => [
            'right-now', 'recent-comments'
        ],
    ],
];
```

### remove-help-tabs

```php
intervention('remove-help-tabs');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'common.tabs',
    ],
];
```

### remove-howdy

```php
intervention('remove-howdy');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'common.adminbar.user.howdy',
    ],
];
```

### remove-menu-items

```php
intervention('remove-menu-items', ['media', 'comments'], '$role');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'media', 'comments'
    ],
];
```

### remove-page-components

```php
intervention('remove-page-components', ['author', 'custom-fields']);
```

```php
<?php

return [
    'wp-admin.$role' => [
        'pages.item' => [
            'author', 'custom-fields'
        ],
    ],
];
```

### remove-post-components

```php
intervention('remove-post-components', ['author', 'custom-fields']);
```

```php
<?php

return [
    'wp-admin.$role' => [
        'posts.item' => [
            'author', 'custom-fields'
        ],
    ],
];
```

### remove-taxonomies

```php
intervention('remove-taxonomies', ['category', 'tag']);
```

```php
<?php

return [
    'application' => [
        'taxonomies' => [
            'category' => false,
            'post-tag' => false,
        ],
    ],
];
```

### remove-toolbar-frontend

```php
intervention('remove-toolbar-frontend', '$role');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'common.adminbar.theme',
    ],
];
```

### remove-toolbar-items

```php
intervention('remove-toolbar-items', ['logo', 'new'], '$role');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'common.adminbar' => [
            'wp', 'new'
        ],
    ],
];
```

### remove-update-notices

```php
intervention('remove-update-notices', '$role'));
```

```php
<?php

return [
    'wp-admin.$role' => [
        'common.updates',
    ],
];
```

### remove-user-fields

```php
intervention('remove-user-fields', ['options', 'names'], '$role');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'users.profile' => [
            'options', 'name'
        ],
    ],
];
```

### remove-user-roles

```php
intervention('remove-user-roles', ['contributor', 'subscriber'], '$role');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'users.profile.role' => [
            'contributor', 'subscriber'
        ],
    ],
];
```

### remove-widgets

```php
intervention('remove-widgets', ['calendar', 'rss']);
```

```php
<?php

return [
    'wp-admin.$role' => [
        'appearance.widgets.available' => [
            'calendar', 'rss'
        ],
    ],
];
```

### remove-emoji

```php
intervention('remove-emoji', 40);
```

```php
<?php

return [
    'application' => [
        'writing.emoji' => false,
    ],
];
```

### remove-attachment-pages

```php
intervention('remove-attachment-pages');
```

```php
<?php

return [
    'application' => [
        'posts.attachment' => false,
    ],
];
```

### update-dashboard-columns

```php
intervention('update-dashboard-columns', 2);
```

```php
<?php

return [
    'wp-admin.$role' => [
        'dashboard.home.cols' => 2,
    ],
];
```


### update-label-footer

```php
intervention('update-label-footer', 'Created by');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'common.footer.credit' => 'Created by',
    ],
];
```

### update-label-page

```php
intervention('update-label-page', 'Label');
```

```php
<?php

return [
    'application' => [
        'posts.page.labels' => [
            'one' => 'Label',
            'many' => 'Labels',
        ],
    ],
];
```

### update-label-post

```php
intervention('update-label-post', 'Label');
```

```php
<?php

return [
    'application' => [
        'posts.post.labels' => [
            'one' => 'Label',
            'many' => 'Labels',
        ],
    ],
];
```

### update-pagination

```php
intervention('update-pagination', 40);
```

```php
<?php

return [
    'wp-admin.$role' => [
        'common.pagination' => 40,
    ],
];
```

### add-dashboard-redirect

```php
intervention('add-dashboard-redirect', 'posts', '$role');
```

```php
<?php

return [
    'wp-admin.$role' => [
        'dashboard' => 'posts'
    ],
];
```

### add-svg-support

```php
intervention('add-svg-support');
```

```php
<?php

return [
    'application' => [
        'media.mimes.svg' => true,
    ],
];
```

### add-dashboard-item

* Removed to maintain focus on removing components from wp-admin.
    * [WordPress documentation](https://developer.wordpress.org/reference/functions/wp_add_dashboard_widget/)

### add-menu-page

* Removed to maintain focus on removing components from wp-admin.
    * [WordPress documentation](https://developer.wordpress.org/reference/functions/add_menu_page/)

### add-acf-page

* On the roadmap for better Advanced Custom Fields support.
    * [Advaned Custom Fields documentation](https://www.advancedcustomfields.com/resources/acf_add_options_page/)
