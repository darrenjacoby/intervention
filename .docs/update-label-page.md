# update-label-page

#### Description
Update WordPress pages post type labels.

#### Usage
Supports single instance.
```php
intervention('update-label-page', $labels(string|array));
```

#### Defaults
$labels: `null`

#### Examples
```php
invervention('update-label-page', 'Contents');
// Updates plural label from Pages to Contents.

invervention('update-label-page', '[Contents, 'Content']');
// Param 1 updates plural label from Pages to Contents.
// Param 2 updates singular label from Page to Content.

invervention('update-label-page', '[Contents, 'Content', 'smiley']');
// Param 1 updates plural label from Pages to Contents.
// Param 2 updates singular label from Page to Content.
// Param 3 updates dashicon to dashicons-smiley.
```
