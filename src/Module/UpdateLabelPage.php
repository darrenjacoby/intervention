<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Labels;

/**
 * Module: update-label-page
 *
 * Hooks into admin_menu to change page label/s and dashicon/s.
 *
 * @example intervention('update-label-page', $labels(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/hooks/admin_menu/
 * @link https://codex.wordpress.org/Global_Variables
 * @link https://developer.wordpress.org/resource/dashicons/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class UpdateLabelPage extends Instance
{
    use Labels;

    protected $type;

    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->type = 'page';
        return $this;
    }

    protected function hook()
    {
        add_action('init', [$this, 'updateLabelPage']);
        add_action('admin_menu', [$this, 'updateIconPage']);
    }

    public function updateLabelPage()
    {
        $this->setLabels($this->type, $this->config);
    }

    public function updateIconPage()
    {
        $this->setLabelIcon($this->type, $this->config);
    }
}
