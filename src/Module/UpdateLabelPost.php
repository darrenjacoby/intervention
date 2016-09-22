<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Label;

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
    protected $type;

    public function run()
    {
        $this->setup();
        $this->hook();
    }

    protected function setup()
    {
        $this->type = 'post';
    }

    protected function hook()
    {
        add_action('init', [$this, 'updateLabelPost']);
        add_action('admin_menu', [$this, 'updateIconPost']);
    }

    public function updateLabelPost()
    {
        Label::setLabels($this->type, $this->config);
    }

    public function updateIconPost()
    {
        Label::setIcon($this->type, $this->config);
    }
}
