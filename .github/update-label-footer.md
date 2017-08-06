# update-label-footer

### Description
Update WordPress footer label.

### Usage
Supports single instance.
```php
intervention('update-label-footer', $label(string));
```

### Defaults
$label: `null`

### Examples
```php
intervention('update-label-footer');
// Removes footer label

intervention('update-label-footer', 'Created by developer');
// Updates footer label to Created by developer
```
