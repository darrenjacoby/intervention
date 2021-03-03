<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;
use Sober\Intervention\Support\Str;

/**
 * Menus
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/functions/register_nav_menu/
 * @link https://developer.wordpress.org/reference/functions/unregister_nav_menu/
 *
 * @param
 * [
 *     'menus.{name}' => (boolean|string) $enable|$name
 * ]
 */
class Menus
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Composer::set(Arr::normalize($config))
            ->group('menus')
            ->get();

        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('init', [$this, 'options']);
    }

    /**
     * Options
     */
    public function options()
    {
        if (!$this->config) {
            return;
        }

        foreach ($this->config as $item => $value) {
            if ($value === false) {
                unregister_nav_menu($item);
            } else {
                $value = $value === true ? Str::studly($item) : $value;
                register_nav_menu($item, $value);
            }
        }
    }
}
