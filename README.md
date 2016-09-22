# Intervention

Lightweight WordPress plugin containing modules to cleanup and customize wp-admin easily.

## Installation

### Composer:
Recommended method; [Roots Bedrock](https://roots.io/bedrock/) and [WP-CLI](http://wp-cli.org/)
```shell
$ composer require soberwp/intervention 1.0.1
$ wp plugin activate intervention
```

### Manual:
* Download the [zip file](https://github.com/soberwp/intervention/archive.master.zip)
* Unzip to your sites plugin folder
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

Use function `intervention()` to use plugin modules.<br>
[Example functions.php file](.github/functions.php.md)

```php
intervention('remove-menu-items', ['themes', 'plugins'], ['editor', 'author']);
```

**Click on a module below to view its usage documentation:**

* [add-acf-page](.github/add-acf-page.md)
* [add-dashboard-item](.github/add-dashboard-item.md)
* [add-dashboard-redirect](.github/add-dashboard-item.md)
* [add-svg-support](.github/add-svg-support.md)
* [remove-dashboard-items](.github/remove-dashboard-items.md)
* [remove-emoji](.github/remove-emoji.md)
* [remove-help-tabs](.github/remove-help-tabs.md)
* [remove-howdy](.github/remove-howdy.md)
* [remove-menu-items](.github/remove-menu-items.md)
* [remove-page-components](.github/remove-page-components.md)
* [remove-post-components](.github/remove-post-components.md)
* [remove-taxonomies](.github/remove-taxonomies.md)
* [remove-toolbar-frontend](.github/remove-toolbar-frontend.md)
* [remove-toolbar-items](.github/remove-toolbar-items.md)
* [remove-update-notices](.github/remove-update-notices.md)
* [remove-user-fields](.github/remove-user-fields.md)
* [remove-user-roles](.github/remove-user-roles.md)
* [remove-widgets](.github/remove-widgets.md)
* [update-dashboard-columns](.github/update-dashboard-columns.md)
* [update-label-footer](.github/update-label-footer.md)
* [update-label-page](.github/update-label-page.md)
* [update-label-post](.github/update-label-post.md)
* [update-pagination](.github/update-pagination.md)

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
**Change the composer.json version to ^1.0.1**<br>
Please check CHANGELOG.md for any breaking changes before updating.

```shell
$ composer update
```

### WordPress:
Includes support for [github-updater](https://github.com/afragen/github-updater) to keep track on updates through the WordPress backend.
* Download [github-updater](https://github.com/afragen/github-updater)
* Clone [github-updater](https://github.com/afragen/github-updater) to your sites plugins/ folder
* Activate via WordPress

## Socializing

Just because we're sober doesn't mean we don't enjoy socializing.

* Twitter [@withjacoby](https://twitter.com/withjacoby)
* GitHub [https://github.com/soberwp](https://github.com/soberwp)
