<?php namespace Sober\Intervention;

class Alias
{
    public static function addUserRoles($args)
    {
        if (in_array('all', $args)) {
            $args = Roles::getAll();
        }
        if (in_array('all-not-admin', $args)) {
            $args = Roles::getAll(false);
        }
        $args = preg_replace('/\badmin\b/', 'administrator', $args);
        return $args;
    }

    public static function addTaxTag($args)
    {
        $args = preg_replace('/\btag\b/', 'post_tag', $args);
        return $args;
    }
}
