<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Utils;

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
class AddDashboardItem extends Instance
{
    use Utils;

    protected $slug;
    protected $content;

    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->slug = strtolower(str_replace(' ', '_', $this->config[0]));
        $this->content = $this->isArrayValueSet(1, $this->config) ? $this->config[1] : current($this->config);
        return $this;
    }

    protected function hook()
    {
        add_action('wp_dashboard_setup', [$this, 'addDashboardItem']);
    }

    public function addDashboardItem()
    {
        wp_add_dashboard_widget(
            $this->slug,
            $this->config[0],
            [$this, 'addDashboardItemCallback']
        );
    }

    public function addDashboardItemCallback()
    {
        echo $this->content;
    }
}
