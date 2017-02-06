<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Labels;

/**
 * Module: update-label-post
 *
 * Hooks into admin_menu to change post label/s and dashicon/s.
 *
 * @example intervention('update-label-post', $labels(string|array));
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
class UpdateLabelPost extends Instance
{
    use Labels;

    protected $type;

    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->type = 'post';
        return $this;
    }

    protected function hook()
    {
        add_action('init', [$this, 'updateLabelPost']);
        add_action('admin_menu', [$this, 'updateIconPost']);
    }

    public function updateLabelPost()
    {
        $this->setLabels($this->type, $this->config);
    }

    public function updateIconPost()
    {
        $this->setLabelIcon($this->type, $this->config);
    }
}
