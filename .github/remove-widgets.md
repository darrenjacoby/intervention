# remove-widgets

### Description
Remove WordPress widgets.

### Usage
&#10003; Supports multiple instances.
```php
intervention('remove-widgets', $widgets(string|array));
```

### Defaults
$widgets: `all`

### Options
$widgets: `pages, calendar, archives, links, meta, search, text, categories, recent-posts, recent-comments, rss, tag-cloud, custom-menu`

### Examples
```php
intervention('remove-widgets');
// Removes all widgets.

intervention('remove-widgets', 'calendar');
// Removes widget calendar.

intervention('remove-widgets', ['calendar', 'rss']);
// Removes widgets calendar and rss.
```
