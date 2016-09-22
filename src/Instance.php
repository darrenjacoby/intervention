<?php

namespace Sober\Intervention;

class Instance
{
    protected $config;
    protected $roles;

    /**
     * @param string|array $config
     * @param string|array $roles
     */
    public function __construct($config, $roles)
    {
        $this->config = Util::toArray($config);
        $this->roles = Util::toArray($roles);
    }

    /**
     * Setup $config default values
     *
     * @param string|array $args
     */
    protected function setDefaultConfig($args)
    {
        if (!current($this->config)) {
            $this->config = Util::toArray($args);
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
            $this->roles = Util::toArray($args);
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
            $args = Roles::getAll();
        }
        if (in_array('all-not-admin', $args)) {
            $args = Roles::getAll(false);
        }
        $args = preg_replace('/\badmin\b/', 'administrator', $args);
        return $args;
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
