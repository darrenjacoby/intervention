<?php namespace Sober\Intervention;

class Roles
{
    public static function getAll($include_admin = true)
    {
        $roles = new \WP_Roles();
        $roles = $roles->get_names();
        if (!$include_admin) {
            unset($roles['administrator']);
        }
        $roles_return = [];
        foreach ($roles as $key => $value) {
            $roles_return[] = $key;
        }
        return $roles_return;
    }
}
