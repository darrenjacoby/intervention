## `application.plugins`

Set application plugins.

### Options;

```php
[
    'plugins' => (array) $plugins,
];
```

### Examples;

#### Activate

```php
[
    'plugins' => [
        'disable-comments' => true,
        'regenerate-thumbnails' => true,
    ],
];
```

#### Deactivate

```php
[
    'plugins' => [
        'disable-comments' => false,
        'regenerate-thumbnails' => false,
    ],
];
```

### Note;

Intervention uses [activate_plugin()](https://developer.wordpress.org/reference/functions/activate_plugin/), which requires a path to the plugin file. 

Intervention matches folder name to the plugin file name, `'disable-comments' => true` becomes `'disable-comments/disable-comments.php' => true`

**Should folder and file name not match, use the full path;**

```php
[
    'plugins' => [
        'advanced-custom-fields-pro/acf.php' => true,
    ],
];
```

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[application.plugins]&labels=bug&assignees=darrenjacoby)**