# Intervention

Easily customize **[wp-admin](#admin)** and configure **[application](#application)** options.

## Installation

#### [Composer/Bedrock](https://roots.io/bedrock/)

```shell
$ composer require soberwp/intervention
$ wp plugin activate intervention
```

#### [WP-CLI](http://wp-cli.org/)

```shell
$ wp plugin install https://github.com/soberwp/intervention/archive/master.zip --activate
```

#### Requirements:

* [PHP](http://php.net/manual/en/install.php) >= 7.0.0

## Usage

Create `config/intervention.php` or `intervention.php` inside your theme root folder and return an array.

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
* [login](.github/wp-adminlogin.md)

**Common**
* [common.adminbar](.github/wp-admincommon.adminbar.md)
* [common.footer](.github/wp-admincommon.footer.md)
* [common.menu](.github/wp-admincommon.menu.md)
* [common.tabs](.github/wp-admincommon.tabs.md)
* [common.title-link](.github/wp-admincommon.title-link.md)
* [common.updates](.github/wp-admincommon.updates.md)
* [common.all.lists](.github/wp-admincommon.all.lists.md)
* [common.all.pagination](.github/wp-admincommon.all.pagination.md)
* [common.all.search](.github/wp-admincommon.all.search.md)
* [common.all.subsets](.github/wp-admincommon.all.subsets.md)

**Dashboard**
* [dashboard](.github/wp-admindashboard.md)
* [dashboard.home](.github/wp-admindashboard.home.md)
* [dashboard.updates](.github/wp-admindashboard.updates.md)

**Posts**
* [posts](.github/wp-adminposts.md)
* [posts.all](.github/wp-adminposts.all.md)
* [posts.item](.github/wp-adminposts.item.md)
* [posts.categories](.github/wp-adminposts.categories.md)
* [posts.tags](.github/wp-adminposts.tags.md)

**Media**
* [media](.github/wp-adminmedia.md)
* [media.all](.github/wp-adminmedia.all.md)
* [media.add](.github/wp-adminmedia.add.md)

**Pages**
* [pages](.github/wp-adminpages.md)
* [pages.all](.github/wp-adminpages.all.md)
* [pages.item](.github/wp-adminpages.item.md)

**Comments**
* [comments](.github/wp-admincomments.md)
* [comments.all](.github/wp-admincomments.all.md)

**Appearance**
* [appearance](.github/wp-adminappearance.md)
* [appearance.themes](.github/wp-adminappearance.themes.md)
* [appearance.customize](.github/wp-adminappearance.customize.md)
* [appearance.widgets](.github/wp-adminappearance.widgets.md)
* [appearance.menus](.github/wp-adminappearance.menus.md)
* [appearance.theme-editor](.github/wp-adminappearance.theme-editor.md)

**Plugins**
* [plugins](.github/wp-adminplugins.md)
* [plugins.all](.github/wp-adminplugins.all.md)
* [plugins.add](.github/wp-adminplugins.add.md)
* [plugins.plugin-editor](.github/wp-adminplugins.plugin-editor.md)

**Users**
* [users](.github/wp-adminusers.md)
* [users.all](.github/wp-adminusers.all.md)
* [users.add](.github/wp-adminusers.add.md)
* [users.profile](.github/wp-adminusers.profile.md)

**Tools**
* [tools](.github/wp-admintools.md)
* [tools.available](.github/wp-admintools.available.md)
* [tools.import](.github/wp-admintools.import.md)
* [tools.export](.github/wp-admintools.export.md)
* [tools.site-health](.github/wp-admintools.site-health.md)
* [tools.export-personal-data](.github/wp-admintools.export-personal-data.md)
* [tools.erase-personal-data](.github/wp-admintools.erase-personal-data.md)

**Settings**
* [settings](.github/wp-adminsettings.md)
* [settings.general](.github/wp-adminsettings.general.md)
* [settings.writing](.github/wp-adminsettings.writing.md)
* [settings.reading](.github/wp-adminsettings.reading.md)
* [settings.discussion](.github/wp-adminsettings.discussion.md)
* [settings.media](.github/wp-adminsettings.media.md)
* [settings.permalinks](.github/wp-adminsettings.permalinks.md)

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
