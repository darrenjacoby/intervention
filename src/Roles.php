<?php

namespace Sober\Intervention;

class Roles
{
    /**
     * Get all user roles from WordPress
     *
     * @param boolean $include_admin
     * @return array
     */
    public static function getAll($incl_admin = true)
    {
        $wp_roles = new \WP_Roles();
        $wp_roles = $wp_roles->get_names();
        if (!$incl_admin) {
            unset($wp_roles['administrator']);
        }
        $roles = [];
        foreach ($wp_roles as $key => $value) {
            $roles[] = $key;
        }
        return $roles;
    }
}
