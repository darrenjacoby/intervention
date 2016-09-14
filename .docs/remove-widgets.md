# remove-widgets

### Description
Remove WordPress widgets.

### Usage
Supports multiple instances.
```php
intervention('remove-widgets', $widgets(string|array));
```

### Defaults
$widgets: `all`

### Options
$widgets: `pages, calendar, archives, links, meta, search, text, categories, recent-posts, recent-comments, rss, tag-cloud, custom-menu`

### Examples
```php
invervention('remove-widgets');
// Removes all widgets.

invervention('remove-widgets', 'calendar');
// Removes widget calendar.

invervention('remove-widgets', ['calendar', 'rss']);
// Removes widgets calendar and rss.
```
