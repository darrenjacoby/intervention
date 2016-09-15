# update-dashboard-columns

### Description
Update WordPress dashboard columns layout.

### Usage
Supports single instance.
```php
intervention('update-dashboard-columns', $amount(integer));
```

### Defaults
$amount: `1`

### Options
$amount: `1, 2, 3`

### Examples
```php
invervention('update-dashboard-columns');
// Updates dashboard to 1 column layout

invervention('update-dashboard-columns', 2);
// Updates dashboard to 2 column layout
```
