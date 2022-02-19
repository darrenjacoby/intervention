<?php

namespace Jacoby\Intervention\Application;

use Jacoby\Intervention\Admin;
use Jacoby\Intervention\Support\Arr;

/**
 * Theme
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init
 * @link https://developer.wordpress.org/reference/functions/wp_get_theme/
 * @link https://developer.wordpress.org/reference/functions/switch_theme/
 *
 * @param
 * [
 *     'theme' => (string) $stylesheet,
 * ]
 */
class Theme
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalize($config);
        $this->hook();
    }

    /**
     * Hook
     *
     * @link https://developer.wordpress.org/reference/hooks/init
     */
    protected function hook()
    {
        add_action('init', [$this, 'options']);

        $this->admin();
    }

    /**
     * Options
     */
    public function options()
    {
        if ($this->config->has('theme')) {
            $theme = $this->config->get('theme');
            $active = wp_get_theme();

            if (!wp_get_theme($theme)->exists()) {
                return;
            }

            if ($active->stylesheet !== $theme) {
                switch_theme($theme);
            }
        }
    }

    /**
     * Admin
     */
    public function admin()
    {
        if ($this->config->has('theme')) {
            Admin::set('appearance.themes', true);
        }
    }
}
