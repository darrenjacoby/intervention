<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: remove-toolbar-frontend
 *
 * Add filter to return false for show_admin_bar for user role/s.
 *
 * @example intervention('remove-toolbar-frontend', $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/functions/show_admin_bar/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class RemoveToolbarFrontend extends Instance
{
    public function run()
    {
        $this->setup()->removeToolbarFrontend();
    }

    protected function setup()
    {
        $this->setDefaultConfig('all');
        $this->config = $this->aliasUserRoles($this->config);
        return $this;
    }

    public function removeToolbarFrontend()
    {
        foreach ($this->config as $role) {
            if (current_user_can($role)) {
                add_filter('show_admin_bar', '__return_false');
            }
        }
    }
}
