<?php

namespace Sober\Intervention;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Routes;

/**
 * Admin
 * 
 * Programmatic API for wp-admin.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Admin
{
    protected $key;
    protected $roles;
    protected $config;

    /**
     * Set
     */
    public static function set($key = false, $config = false)
    {
        return new self($key, $config);
    }

    /**
     * Construct
     *
     * @param array $config
     */
    public function __construct($key = false, $config = false)
    {
        $this->key = $key;
        $this->roles = Arr::collect(['all']);

        // `::set()` shorthand is used
        if ($config) {
            $this->init($config);
        }
    }

    /**
     * Roles
     *
     * @param array $roles
     * @return object $this
     */
    public function roles($roles)
    {
        $this->roles = Arr::collect($roles);

        $wp_roles = new \WP_Roles();

        /**
         * Alias for all-not-administrator
         */
        if ($this->roles->contains('all-not-administrator')) {
            foreach ($wp_roles->get_names() as $role => $v) {
                if ($role === 'administrator') {
                    continue;
                }
                $this->roles->push($role);
            }

            // remove from collection
            $this->roles->pull('all-not-administrator');
        }

        return $this;
    }

    /**
     * Init
     *
     * Direct routing to avoid action required for config file
     *
     * @param array $config
     */
    public function init($config = false)
    {
        $this->config = Arr::normalize([$this->key => $config]);

        foreach ($this->roles->toArray() as $role) {
            $allowed_role = $role === 'all' || current_user_can($role);

            if (!$allowed_role) {
                continue;
            }

            Routes::set('wp-admin')->map(function ($class, $k) {
                (new Intervention())->init($this->config, $class, $k);
            });
        }
    }
}
