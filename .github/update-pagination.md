# update-pagination

### Description
Update WordPress admin area posts per page for default post types.

### Usage
Supports single instance.
```php
intervention('update-pagination', $amount(integer));
```

### Defaults
$amount: `40`

### Examples
```php
intervention('update-pagination');
// Updates to 40 posts per page. (WordPress default is 20)

intervention('update-pagination', 100);
// Updates to 100 posts per page.
```
