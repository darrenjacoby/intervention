<?php

namespace Jacoby\Intervention\Admin\Support;

use Jacoby\Intervention\Admin\Support\Menu;
use Jacoby\Intervention\Support\Config;

/**
 * Support/Router
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/functions/wp_redirect/
 */
class Router
{
    protected $key;
    protected $routes;
    protected $route = false;

    /**
     * Interface
     *
     * @param string $key
     * @return Jacoby\Intervention\Admin\Support\Router
     */
    public static function set($key = '')
    {
        return new self($key);
    }

    /**
     * Initialize
     *
     * @param string $key
     */
    public function __construct($key = false)
    {
        $this->key = $key;
    }

    /**
     * Route
     *
     * @param string $str
     */
    public function route($str)
    {
        // Support for shorthand/true
        $value = $str === true ? 'posts' : $str;

        if (!Config::get('admin/pagenow')->get($value)) {
            return;
        }

        $this->route = Config::get('admin/pagenow')->get($value);

        if (wp_doing_ajax()) {
            return;
        }

        // Route
        add_action('admin_init', function () {
            if (Config::get('admin/pagenow')->get($this->key) === $GLOBALS['pagenow'] . $_SERVER['QUERY_STRING']) {
                wp_redirect(admin_url($this->route));
            };
        });

        // Remove menu item
        Menu::set($this->key)->remove();
    }
}
