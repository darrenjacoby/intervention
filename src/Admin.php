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

        // `::set()` shorthand is used
        if ($config) {
            $this->init($config);
        }
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

        Routes::set('wp-admin')->map(function ($class, $k) {
            (new Intervention())->init($this->config, $class, $k);
        });
    }
}
