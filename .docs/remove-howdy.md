# remove-howdy

#### Description
Remove or replace howdy from WordPress admin toolbar.

#### Usage
Supports single instance.
```php
intervention('remove-howdy', $replace(string));
```

#### Defaults
$replace: `null`

#### Examples
```php
intervention('remove-howdy');
// Removes howdy.

intervention('remove-howdy', 'Hello');
// Removes howdy and replaces with Hello.
```
