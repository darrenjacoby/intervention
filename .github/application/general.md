## `application.general`

Set application general options.

### Options;

```php
<?php

return [
    'application.general' => [
        'site-title' => (string) $title,
        'tagline' => (string) $tagline,
        'wp-address' => (string) $wp_url,
        'site-address' => (string) $site_url,
        'admin-email' => (string) $admin_email,
        'admin-email.verification' => (boolean|int) $verification,
        'email-from' => (string) $email_from,
        'email-from-name' => (string) $email_from_name,
        'membership' => (boolean) $enable_membership,
        'default-role' => (string) $role,
        'language' => (string) $language,
        'timezone' => (string) $timezone,
        'date-format' => (string) $date_format,
        'time-format' => (string) $time_format,
        'week-starts' => (string) $week_starts,
    ],
];
```

### Example;

```php
<?php

return [
    'application.general' => [
        'site-title' => 'soberwp',
        'tagline' => 'Tools for WordPress',
        'wp-address' => 'https://soberwp.com/wp',
        'site-address' => 'https://soberwp.com',
        'admin-email' => 'example@soberwp.com',
        'admin-email.verification' => 6 * MONTH_IN_SECONDS,
        'email-from' => 'app@soberwp.com'
        'email-from-name' => 'soberwp'
        'membership' => true,
        'default-role' => 'editor',
        'language' => 'en_US',
        'timezone' => 'Africa/Johannesburg',
        'date-format' => 'F j Y',
        'time-format' => 'g:i a',
        'week-starts' => 'Mon',
    ],
];
```

### Note;

The language must be installed and available in order for `'language' => (string) $language` to work. You can see if the language is available using [get_available_languages()](https://developer.wordpress.org/reference/functions/get_available_languages/).

### Further Reading;

* **Option Reference**
    * [https://codex.wordpress.org/Option_Reference#General](https://codex.wordpress.org/Option_Reference#Reading)
* `general.timezone`
    * [WordPress accepted timezones gist](https://gist.github.com/mj1856/f0eaa302d56cd7b3dd3e)
* `general.date-format`
    * [https://www.php.net/manual/en/datetime.formats.date.php](https://www.php.net/manual/en/datetime.formats.date.php)
* `general.time-format`
    * [https://www.php.net/manual/en/datetime.formats.time.php](https://www.php.net/manual/en/datetime.formats.time.php)
* `general.week-starts`
    * [https://www.php.net/manual/en/datetime.formats.relative.php](https://www.php.net/manual/en/datetime.formats.relative.php)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[application.general]&labels=bug&assignees=darrenjacoby)**