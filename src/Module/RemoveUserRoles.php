<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: remove-user-roles
 *
 * Filters editable_roles to remove user role/s.
 *
 * @example intervention('remove-user-roles', $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/editable_roles/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class RemoveUserRoles extends Instance
{
    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig(['author', 'subscriber', 'contributor']);
        $this->config = $this->aliasUserRoles($this->config);
        return $this;
    }

    protected function hook()
    {
        add_filter('editable_roles', [$this, 'removeUserRoles']);
    }

    public function removeUserRoles($roles)
    {
        foreach ($this->config as $role) {
            if (isset($roles[$role])) {
                unset($roles[$role]);
            }
        }
        return $roles;
    }
}
