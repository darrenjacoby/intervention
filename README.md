# Intervention

Easily customize [wp-admin](#admin) and configure [application](#application) options.

## Installation

[Composer/Bedrock](https://roots.io/bedrock/)

```shell
$ composer require soberwp/intervention
$ wp plugin activate intervention
```

[WP-CLI](http://wp-cli.org/)

```shell
$ wp plugin install https://github.com/soberwp/intervention/archive/master.zip --activate
```

#### Requirements:

* [PHP](http://php.net/manual/en/install.php) >= 7.0.0

## Usage

Create `config/intervention.php` (Sage 10 users) or `intervention.php` inside your theme root folder and return an array.

```php
return [
    'application' => [

    ],
    'wp-admin.{role}' => [

    ],
];
```

For the options, you can use [dot notatation, a standard array, or a combination](.github/config.md).

## Admin

Remove components from wp-admin.

Return `wp-admin.{role}`

* Support for multiple user roles using a pipe operator. 
    * `editor|author`

```php
return [
    'wp-admin.{role}' => [
        'common.adminbar',
    ],
];
```

**User Roles**

* `all` 
* `all-not-administrator` (shortcut alias)
* `administrator`
* `author`
* `editor`
* `contributor`
* `subscriber`
* `shop-mananger` (woocommerce)
* `customer` (woocommerce)

### Options
<!-- **[Quick Reference]()** -->

**Login**
* [login](.github/wp-admin/login.md)

**Common**
* [common.adminbar](.github/wp-admin/common.adminbar.md)
* [common.footer](.github/wp-admin/common.footer.md)
* [common.menu](.github/wp-admin/common.menu.md)
* [common.tabs](.github/wp-admin/common.tabs.md)
* [common.title-link](.github/wp-admin/common.title-link.md)
* [common.updates](.github/wp-admin/common.updates.md)
* [common.all.lists](.github/wp-admin/common.all.lists.md)
* [common.all.pagination](.github/wp-admin/common.all.pagination.md)
* [common.all.search](.github/wp-admin/common.all.search.md)
* [common.all.subsets](.github/wp-admin/common.all.subsets.md)

**Dashboard**
* [dashboard](.github/wp-admin/dashboard.md)
* [dashboard.home](.github/wp-admin/dashboard.home.md)
* [dashboard.updates](.github/wp-admin/dashboard.updates.md)

**Posts**
* [posts](.github/wp-admin/posts.md)
* [posts.all](.github/wp-admin/posts.all.md)
* [posts.item](.github/wp-admin/posts.item.md)
* [posts.categories](.github/wp-admin/posts.categories.md)
* [posts.tags](.github/wp-admin/posts.tags.md)

**Media**
* [media](.github/wp-admin/media.md)
* [media.all](.github/wp-admin/media.all.md)
* [media.add](.github/wp-admin/media.add.md)

**Pages**
* [pages](.github/wp-admin/pages.md)
* [pages.all](.github/wp-admin/pages.all.md)
* [pages.item](.github/wp-admin/pages.item.md)

**Comments**
* [comments](.github/wp-admin/comments.md)
* [comments.all](.github/wp-admin/comments.all.md)

**Appearance**
* [appearance](.github/wp-admin/appearance.md)
* [appearance.themes](.github/wp-admin/appearance.themes.md)
* [appearance.customize](.github/wp-admin/appearance.customize.md)
* [appearance.widgets](.github/wp-admin/appearance.widgets.md)
* [appearance.menus](.github/wp-admin/appearance.menus.md)
* [appearance.theme-editor](.github/wp-admin/appearance.theme-editor.md)

**Plugins**
* [plugins](.github/wp-admin/plugins.md)
* [plugins.all](.github/wp-admin/plugins.all.md)
* [plugins.add](.github/wp-admin/plugins.add.md)
* [plugins.plugin-editor](.github/wp-admin/plugins.plugin-editor.md)

**Users**
* [users](.github/wp-admin/users.md)
* [users.all](.github/wp-admin/users.all.md)
* [users.add](.github/wp-admin/users.add.md)
* [users.profile](.github/wp-admin/users.profile.md)

**Tools**
* [tools](.github/wp-admin/tools.md)
* [tools.available](.github/wp-admin/tools.available.md)
* [tools.import](.github/wp-admin/tools.import.md)
* [tools.export](.github/wp-admin/tools.export.md)
* [tools.site-health](.github/wp-admin/tools.site-health.md)
* [tools.export-personal-data](.github/wp-admin/tools.export-personal-data.md)
* [tools.erase-personal-data](.github/wp-admin/tools.erase-personal-data.md)

**Settings**
* [settings](.github/wp-admin/settings.md)
* [settings.general](.github/wp-admin/settings.general.md)
* [settings.writing](.github/wp-admin/settings.writing.md)
* [settings.reading](.github/wp-admin/settings.reading.md)
* [settings.discussion](.github/wp-admin/settings.discussion.md)
* [settings.media](.github/wp-admin/settings.media.md)
* [settings.permalinks](.github/wp-admin/settings.permalinks.md)

## Application

Set application options.

* Passed in options are automatically removed from `wp-admin`.
* Configuration can be placed under version control.

Return `application`.

```php
return [
    'application' => [
        'site' => [
            'tagline' => 'Intervention',
            'wp-address' => 'https://soberwp.com/wp',
            'site-address' => 'https://soberwp.com',
            'admin-email' => 'example@soberwp.com',
            'membership' => false,
            'default-role' => 'editor',
            'timezone' => 'Africa/Johannesburg',
            'date-format' => 'F j Y',
            'time-format' => 'g:i a',
            'week-starts' => 'Mon',
        ],
    ],
];
```

### Options

* [theme](.github/application/theme.md)
* [posts/posttypes](.github/application/posts.md)
* [taxonomies](.github/application/taxonomies.md)
* [menus](.github/application/menus.md)
* [plugins](.github/application/plugins.md)
* [site](.github/application/site.md)
* [reading](.github/application/reading.md)
* [writing](.github/application/writing.md)
* [discussion](.github/application/discussion.md)
* [media](.github/application/media.md)
* [permalinks](.github/application/permalinks.md)
* [privacy](.github/application/privacy.md)

### Quick Reference

* [Full configuration options](.github/application-options.md)
* [Full configuration example](.github/application-example.md)
* [Register custom posttype](.github/application/posts.md#register)
* [Register custom taxonomy](.github/application/taxonomies.md#register)
* [Register custom image sizes](.github/application/media.md#custom-image-sizes)
* [Register custom nav menu](.github/application/menus.md#register)
* [Remove posttype](.github/application/posts.md#remove)
* [Remove taxonomy](.github/application/taxonomies.md#remove)
* [Remove emoji](.github/application/writing.md)
* [Remove attachments](.github/application/posts.md#remove)
* [Enable custom media/mime types](.github/application/media.md#custom-mime-types)

## Updating

* **[Guide to upgrade from version 1.x.x to 2.x.x](.github/upgrading.md)**

#### Composer:

* Change the composer.json version to ^2.0.0**<br>
* Check [CHANGELOG.md](CHANGELOG.md) for any breaking changes before updating.

```shell
$ composer update
```

#### WordPress:

Includes support for github-updater to track updates through wp-admin.
* [Download](https://github.com/afragen/github-updater)

## Roadmap

* Better visual documentation.
* Better support for the block editor.
* Support `wp-admin` custom post types.
* Support removing comments.
* Support for advanced custom fields.
* Support `application.site.language`.

## Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?labels=bug&assignees=darrenjacoby)**

**Have a suggestion for Intervention, or want to track new releases? [@soberwp](https://twitter.com/soberwp)**
