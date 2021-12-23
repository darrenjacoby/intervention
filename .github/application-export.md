## Export

Reasons to export the WordPress database to an `intervention.php` config file;

* WordPress options can be placed under version control.
* WordPress `wp-admin` fields are marked as read-only.
* Intervention uses [`pre_option`](https://developer.wordpress.org/reference/hooks/pre_option_option/) to reduce database requests.

As a developer, this provides peace of mind that no breaking changes can be introduced via `wp-admin`.
