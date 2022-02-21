## `application.writing`

Set application writing options.

### Options;

```php
<?php

return [
    'application.writing' => [
        'emoji' => (boolean) $enable_emoji,
        'default-category' => (int) $default_category_id,
        'default-post-format' => (string) $default_post_format,
        'post-via-email.server' => (string) $email_server,
        'post-via-email.port' => (int) $email_port,
        'post-via-email.login' => (string) $email_login,
        'post-via-email.pass' => (string) $email_pass,
        'post-via-email.default-category' => (int) $email_default_category_id,
        'update-services' => (string) $update_services_url,
    ],
];
```

### Example;

```php
<?php

return [
    'application.writing' => [
        'emoji' => false,
        'default-category' => 10,
        'default-post-format' => 'standard',
        'post-via-email.server' => 'mail.example.com',
        'post-via-email.port' => 100,
        'post-via-email.login' => 'example@example.com',
        'post-via-email.pass' => 'secret',
        'post-via-email.default-category' => 10,
        'update-services' => 'http://rpc.pingomatic.com/',
    ],
];
```

### Further Reading;

- **Option Reference**
  - [https://codex.wordpress.org/Option_Reference#Writing](https://codex.wordpress.org/Option_Reference#Writing)
- `writing.default-post-format`
  - [https://wordpress.org/support/article/post-formats/](https://wordpress.org/support/article/post-formats/)

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[application.writing]&labels=bug&assignees=darrenjacoby)**
