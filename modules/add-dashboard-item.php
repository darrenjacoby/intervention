<?php namespace Sober\Intervention\AddDashboardItem;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Util;

/**
 * Module: add-dashboard-item
 *
 * Hooks into wp_dashboard_setup to add dashboard widget/s.
 *
 * @example intervention('add-dashboard-item', $item(array));
 *
 * @link https://developer.wordpress.org/reference/functions/wp_dashboard_setup/
 * @link https://developer.wordpress.org/reference/functions/wp_add_dashboard_widget/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('wp_dashboard_setup', function () {
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        // Instance config
        $config = Instance::getConfig($instance);
        $slug = strtolower(str_replace(' ', '_', $config[0]));
        $content = (Util::isArrayValueSet(1, $config) ? $config[1] : current($config));
        // Run instance
        wp_add_dashboard_widget(
            $slug,
            $config[0],
            __NAMESPACE__ . '\\dashboard_content',
            null,
            $content
        );
    }
});

function dashboard_content($var, $content)
{
    echo $content['args'];
}
