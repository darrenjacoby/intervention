## `application.menus`

Set application menus.

### Options;

```php
[
    'menus' => [
        '$name' => (boolean|string) $enable|$name
    ],
];
```

### Examples;

#### Register

```php
[
    'menus' => [
        'main' => true,
        'side' => 'Sidebar'
    ],
];
```

Passing in `true` will use the key in studly case. `main_menu` displays as `Main Menu`.

### Remove;

```php
[
    'menus' => [
        'primary_navigation' => false,
    ],
];
```

### Further Reading;

* `menus.$name`
    * [https://developer.wordpress.org/reference/functions/register_nav_menus/](https://developer.wordpress.org/reference/functions/register_nav_menus/)

### Bug?

* **[Please open an issue](https://github.com/soberwp/intervention/issues/new?title=[application.menus]&labels=bug&assignees=darrenjacoby)**