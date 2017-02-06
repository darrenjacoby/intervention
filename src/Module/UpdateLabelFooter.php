<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Utils;

/**
 * Module: update-label-footer
 *
 * Filters admin_footer_text to change footer label.
 *
 * @example intervention('update-label-footer', $label(string));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_footer_text/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class UpdateLabelFooter extends Instance
{
    use Utils;

    public function run()
    {
        $this->hook();
    }

    protected function hook()
    {
        add_filter('admin_footer_text', [$this, 'updateLabelFooter']);
    }

    public function updateLabelFooter()
    {
        return $this->escArray($this->config);
    }
}
