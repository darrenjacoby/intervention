<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: remove-help-tabs
 *
 * Hooks into admin_head to remove help tabs.
 *
 * @example intervention('remove-help-tabs');
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/functions/get_current_screen/
 * @link https://developer.wordpress.org/reference/classes/wp_screen/remove_help_tabs/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class RemoveHelpTabs extends Instance
{
    protected $screen;

    public function run()
    {
        $this->hook();
    }

    protected function hook()
    {
        add_action('admin_head', [$this, 'removeHelpTabs']);
    }

    public function removeHelpTabs()
    {
        $this->screen = get_current_screen();

        if ($this->screen) {
            $this->screen->remove_help_tabs();
        }
    }
}
