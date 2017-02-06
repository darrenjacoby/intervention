<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Utils;

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
class UpdateDashboardColumns extends Instance
{
    use Utils;

    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig(1);
        $this->config = (100 / $this->escArray($this->config));
        return $this;
    }

    protected function hook()
    {
        add_action('admin_head-index.php', [$this, 'updateDashboardColumns']);
    }

    public function updateDashboardColumns()
    {
        // Column CSS
        echo '<style>.postbox-container {min-width: ' . $this->config . '% !important;}</style>';
        echo '<style>#wpbody-content #dashboard-widgets #postbox-container-1 {width: ' . $this->config . ' !important;}</style>';
        echo '<style>@media only screen and (max-width: 1499px) and (min-width: 800px) {#wpbody-content #dashboard-widgets .postbox-container {width: ' . $this->config . '%}</style>';
        echo '<style>@media only screen and (max-width: 1499px) and (min-width: 800px) {#wpbody-content #dashboard-widgets #postbox-container-2, #wpbody-content #dashboard-widgets #postbox-container-3, #wpbody-content #dashboard-widgets #postbox-container-4 {width: ' . $this->config . '% !important}}</style>';
        echo '<style>@media only screen and (max-width: 1800px) and (min-width: 1500px) {#wpbody-content #dashboard-widgets .postbox-container {width: ' . $this->config . '%;}</style>';
        // Sortable areas
        echo '<style>.meta-box-sortables.ui-sortable.empty-container::after {display: none !important;}</style>';
        if ($this->config === 100) {
            echo '<style>.meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
        } elseif ($this->config === 50) {
            echo '<style>#postbox-container-3 .meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
            echo '<style>#postbox-container-4 .meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
        } else {
            echo '<style>#postbox-container-2 .meta-box-sortables.ui-sortable.empty-container {display: block !important;}</style>';
            echo '<style>#postbox-container-3 .meta-box-sortables.ui-sortable.empty-container {display: block !important;}</style>';
            echo '<style>@media only screen and (max-width: 1499px) and (min-width: 800px) {#postbox-container-3 .meta-box-sortables.ui-sortable.empty-container {display: block !important; min-height: 100px !important; height: 250px !important; border: 3px dashed #b4b9be !important;}}</style>';
            echo '<style>#postbox-container-4 .meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
        }
    }
}
