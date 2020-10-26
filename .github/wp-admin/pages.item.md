## `wp-admin.{role}.pages.item`

Remove pages item components.

### Options;

* Parent items remove child items. 
* For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
[
    'pages.item',
    'pages.item' => (string) $route,
    'pages.item.title' => (string) $title,
    'pages.item.title.[menu, page]' => (string) $title,
    'pages.item.title-link',
    'pages.item.tabs',
    'pages.item.tabs.[screen-options, help]',
    'pages.item.editor',
    'pages.item.author',
    'pages.item.link',
    'pages.item.featured-image',
    'pages.item.attributes',
    'pages.item.custom-fields',
    'pages.item.discussion',
];
```

* [Route options](../route-options.md)

### Remove;

Remove from menu;

```php
[
    'pages.item',
];
```

Remove from menu and enforce a page redirect;

```php
[
    'pages.item' => 'posts',
];
```

* [Route options](../route-options.md)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[wp-admin.pages.item]&labels=bug&assignees=darrenjacoby)**