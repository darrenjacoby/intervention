<?php

namespace Sober\Intervention;

class Instance
{
    use Utils;

    protected $config;
    protected $roles;

    /**
     * @param string|array $config
     * @param string|array $roles
     */
    public function __construct($config, $roles)
    {
        $this->config = $this->toArray($config);
        $this->roles = $this->toArray($roles);
    }

    /**
     * Setup $config default values
     *
     * @param string|array $args
     */
    protected function setDefaultConfig($args)
    {
        if (!current($this->config)) {
            $this->config = $this->toArray($args);
        }
    }

    /**
     * Setup $roles default values
     *
     * @param string|array $args
     */
    protected function setDefaultRoles($args)
    {
        if (!current($this->roles)) {
            $this->roles = $this->toArray($args);
        }
    }

    /**
     * Alias user roles 'all' and 'all-not-admin'
     * Replace short-hand 'admin' with 'administrator'
     *
     * @param string|array $args
     * @return string|array
     */
    protected function aliasUserRoles($args)
    {
        if (in_array('all', $args)) {
            $args = $this->getUserRoles();
        }
        if (in_array('all-not-admin', $args)) {
            $args = $this->getUserRoles(false);
        }
        $args = preg_replace('/\badmin\b/', 'administrator', $args);
        return $args;
    }

    /**
     * Get all user roles from WordPress
     *
     * @param bool $include_admin
     * @return array
     */
    public static function getUserRoles($incl_admin = true)
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

    /**
     * Replace 'tag' with 'post_tag'
     *
     * @param string|array $args
     * @return string|array
     */
    protected function aliasTaxTag($args)
    {
        $args = preg_replace('/\btag\b/', 'post_tag', $args);
        return $args;
    }
}
