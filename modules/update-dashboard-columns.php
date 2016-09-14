<?php namespace Sober\Intervention\UpdateDashboardColumns;

use Sober\Intervention\Module;
use Sober\Intervention\Instance;
use Sober\Intervention\Util;

/**
 * Module: update-dashboard-columns
 *
 * Hooks into admin_head-index.php to add CSS for dashboard columns.
 *
 * @example intervention('update-dashboard-columns', $amount(integer));
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/admin_head
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
function get_config()
{
    // Instance config
    $instance = Module::getInstances(__FILE__, false);
    $config = Instance::getConfig($instance);
    $config = Instance::setDefaults(1, $config);
    return Util::escapeArray($config);
}

function update_columns_css()
{
    $perc = (100 / get_config());
    // Column CSS
    echo '<style>.postbox-container {min-width: ' . $perc . '% !important;}</style>';
    echo '<style>#wpbody-content #dashboard-widgets #postbox-container-1 {width: ' . $perc . ' !important;}</style>';
    echo '<style>@media only screen and (max-width: 1499px) and (min-width: 800px) {#wpbody-content #dashboard-widgets .postbox-container {width: ' . $perc . '%}</style>';
    echo '<style>@media only screen and (max-width: 1499px) and (min-width: 800px) {#wpbody-content #dashboard-widgets #postbox-container-2, #wpbody-content #dashboard-widgets #postbox-container-3, #wpbody-content #dashboard-widgets #postbox-container-4 {width: ' . $perc . '% !important}}</style>';
    echo '<style>@media only screen and (max-width: 1800px) and (min-width: 1500px) {#wpbody-content #dashboard-widgets .postbox-container {width: ' . $perc . '%;}</style>';
    // Sortable drag areas
    echo '<style>.meta-box-sortables.ui-sortable.empty-container::after {display: none !important;}</style>';
    if ($perc === 100) {
        echo '<style>.meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
    } elseif ($perc === 50) {
        echo '<style>#postbox-container-3 .meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
        echo '<style>#postbox-container-4 .meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
    } else {
        echo '<style>#postbox-container-2 .meta-box-sortables.ui-sortable.empty-container {display: block !important;}</style>';
        echo '<style>#postbox-container-3 .meta-box-sortables.ui-sortable.empty-container {display: block !important;}</style>';
        echo '<style>@media only screen and (max-width: 1499px) and (min-width: 800px) {#postbox-container-3 .meta-box-sortables.ui-sortable.empty-container {display: block !important; min-height: 100px !important; height: 250px !important; border: 3px dashed #b4b9be !important;}}</style>';
        echo '<style>#postbox-container-4 .meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
    }
}
add_action('admin_head-index.php', __NAMESPACE__ . '\\update_columns_css');
