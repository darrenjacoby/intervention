<?php namespace Sober\Intervention;

class Instance
{
    public static function getConfig($instance)
    {
        $config = $instance['config'];
        return $config;
    }

    public static function getRoles($instance)
    {
        $roles = $instance['roles'];
        return $roles;
    }

    public static function setDefaults($default, $args)
    {
        if (current($args)) {
            return $args;
        } else {
            return $default;
        }
    }
}
