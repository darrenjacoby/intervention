# Intervention

WordPress plugin containing modules to help clean up and modify the backend.

## Installation

### Composer:
Recommended method; [Roots Bedrock](https://roots.io/bedrock/) and [WP-CLI](http://wp-cli.org/)
```shell
$ composer require soberwp/intervention 1.0.0
$ wp plugin activate intervention
```

### Manual:
* Clone this repository to plugins/
* Activate via WordPress

## Requirements

* [PHP](http://php.net/manual/en/install.php) >= 5.4.x

## Usage

### Import the namespace function:

Place at the top of your themes functions.php file.
```php
use function Sober\Intervention\intervention;
```

### Modules:

Use function `intervention()` to use plugin modules.

```php
intervention('remove-menu-items', ['themes', 'plugins'], ['editor', 'author']);
```
[Example functions.php file](.docs/functions.php.md)

**Click on a module below to view its usage documentation:**

* [add-acf-page](.docs/add-acf-page.md)
* [add-dashboard-item](.docs/add-dashboard-item.md)
* [add-dashboard-redirect](.docs/add-dashboard-item.md)
* [add-svg-support](.docs/add-svg-support.md)
* [remove-dashboard-items](.docs/remove-dashboard-items.md)
* [remove-emoji](.docs/remove-emoji.md)
* [remove-help-tabs](.docs/remove-help-tabs.md)
* [remove-howdy](.docs/remove-howdy.md)
* [remove-menu-items](.docs/remove-menu-items.md)
* [remove-page-components](.docs/remove-page-components.md)
* [remove-post-components](.docs/remove-post-components.md)
* [remove-taxonomies](.docs/remove-taxonomies.md)
* [remove-toolbar-frontend](.docs/remove-toolbar-frontend.md)
* [remove-toolbar-items](.docs/remove-toolbar-items.md)
* [remove-update-notices](.docs/remove-update-notices.md)
* [remove-user-fields](.docs/remove-user-fields.md)
* [remove-user-roles](.docs/remove-user-roles.md)
* [remove-widgets](.docs/remove-widgets.md)
* [update-dashboard-columns](.docs/update-dashboard-columns.md)
* [update-label-footer](.docs/update-label-footer.md)
* [update-label-page](.docs/update-label-page.md)
* [update-label-post](.docs/update-label-post.md)
* [update-pagination](.docs/update-pagination.md)

### Quick Reference

* **add-acf-page**<br>
`intervention('add-acf-page', $config(string|array), $roles(string|array));`

* **add-dashboard-item**<br>
`intervention('add-dashboard-item', $item(array));`

* **add-dashboard-redirect**<br>
`intervention('add-dashboard-redirect', $route(string), $roles(string|array));`

* **add-svg-support**<br>
`intervention('add-svg-support', $roles(string|array));`

* **remove-dashboard-items**<br>
`intervention('remove-dashboard-items', $items(string|array), $roles(string|array));`

* **remove-emoji**<br>
`intervention('remove-emoji');`

* **remove-help-tabs**<br>
`intervention('remove-help-tabs');`

* **remove-howdy**<br>
`intervention('remove-howdy', $replace(string));`

* **remove-menu-items**<br>
`intervention('remove-menu-items', $items(string|array), $roles(string|array));`

* **remove-page-components**<br>
`intervention('remove-page-components', $components(string|array));`

* **remove-post-components**<br>
`intervention('remove-post-components', $components(string|array));`

* **remove-taxonomies**<br>
`intervention('remove-taxonomies', $taxonomies(string|array));`

* **remove-toolbar-frontend**<br>
`intervention('remove-toolbar-frontend', $roles(string|array));`

* **remove-toolbar-items**<br>
`intervention('remove-toolbar-items', $items(string|array), $roles(string|array));`

* **remove-update-notices**<br>
`intervention('remove-update-notices', $roles(string|array));`

* **remove-user-fields**<br>
`intervention('remove-user-fields', $fields(string|array), $roles(string|array));`

* **remove-user-roles**<br>
`intervention('remove-user-roles', $roles(string|array));`

* **remove-widgets**<br>
`intervention('remove-widgets', $widgets(string|array));`

* **update-dashboard-columns**<br>
`intervention('update-dashboard-columns', $amount(integer));`

* **update-label-footer**<br>
`intervention('update-label-footer', $label(string));`

* **update-label-page**<br>
`intervention('update-label-page', $labels(string|array));`

* **update-label-post**<br>
`intervention('update-label-post', $labels(string|array));`

* **update-pagination**<br>
`intervention('update-pagination', $amount(integer));`

## Updating

### Composer:
```shell
$ composer update
```

### WordPress:
Includes support for [github-updater](https://github.com/afragen/github-updater)
* Download [github-updater](https://github.com/afragen/github-updater)
* Clone to to plugins/ or mu-plugins/
* Activate via WordPress


## Socializing

Just because we're sober doesn't mean we don't enjoy socializing.

WordPress themes and plugins without the hangover.

* Twitter [@withjacoby](https://twitter.com/darrenjacoby)
* GitHub [@soberwp](https://github.com/soberwp)
