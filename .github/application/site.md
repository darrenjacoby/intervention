## `application.site`

Set application site/general options.

### Options;

```php
[
    'site' => [
        'site-title' => (string) $title,
        'tagline' => (string) $tagline,
        'wp-address' => (string) $wp_url,
        'site-address' => (string) $site_url,
        'admin-email' => (string) $admin_email,
        'membership' => (boolean) $enable_membership,
        'default-role' => (string) $role,
        'timezone' => (string) $timezone,
        'date-format' => (string) $date_format,
        'time-format' => (string) $time_format,
        'week-starts' => (string) $week_starts,
    ],
];
```

### Example;

```php
[
    'site' => [
        'site-title' => 'soberwp',
        'tagline' => 'Tools for WordPress',
        'wp-address' => 'https://soberwp.com/wp',
        'site-address' => 'https://soberwp.com',
        'admin-email' => 'example@soberwp.com',
        'membership' => true,
        'default-role' => 'editor',
        'timezone' => 'Africa/Johannesburg',
        'date-format' => 'F j Y',
        'time-format' => 'g:i a',
        'week-starts' => 'Mon',
    ],
];
```

### Further Reading;

* **Option Reference**
    * [https://codex.wordpress.org/Option_Reference#General](https://codex.wordpress.org/Option_Reference#Reading)
* `site.timezone`
    * [WordPress accepted timezones gist](https://gist.github.com/mj1856/f0eaa302d56cd7b3dd3e)
* `site.date-format`
    * [https://www.php.net/manual/en/datetime.formats.date.php](https://www.php.net/manual/en/datetime.formats.date.php)
* `site.time-format`
    * [https://www.php.net/manual/en/datetime.formats.time.php](https://www.php.net/manual/en/datetime.formats.time.php)
* `site.week-starts`
    * [https://www.php.net/manual/en/datetime.formats.relative.php](https://www.php.net/manual/en/datetime.formats.relative.php)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[application.site]&labels=bug&assignees=darrenjacoby)**