<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: remove-customizer
 *
 * Hooks into customize_register and removes Customizer options
 *
 * @example intervention('remove-customizer', $items(string|array), $roles(string|array));
 *
 * @link https://codex.wordpress.org/Class_Reference/WP_Customize_Manager/remove_section
 * @link https://developer.wordpress.org/reference/hooks/customize_register/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.1.0
 */
class RemoveCustomizer extends Instance
{
    public function run()
    {
        $this->setup();
        $this->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig(['header-image', 'background-image', 'colors']);
        $this->setDefaultRoles('all');
        $this->roles = $this->aliasUserRoles($this->roles);
    }

    protected function hook()
    {
      add_action('customize_register', [$this, 'removeCustomizer']);
    }

    public function removeCustomizer($wp_customize)
    {
        foreach ($this->roles as $role) {
            if (current_user_can($role)) {
                // sections
                if (in_array('title-tagline', $this->config)) {
                    $wp_customize->remove_section('title_tagline');
                }
                if (in_array('colors', $this->config)) {
                    $wp_customize->remove_section('colors');
                }
                if (in_array('header-image', $this->config)) {
                    $wp_customize->remove_section('header_image');
                }
                if (in_array('background-image', $this->config)) {
                    $wp_customize->remove_section('background_image');
                }
                if (in_array('nav', $this->config)) {
                    $wp_customize->remove_section('nav');
                }
                if (in_array('static-front-page', $this->config)) {
                    $wp_customize->remove_section('static_front_page');
                }
                if (in_array('widgets', $this->config)) {
                    $wp_customize->remove_section('widgets');
                }
                // panels
                if (in_array('menus', $this->config) || in_array('all', $this->config)) {
                    $wp_customize->get_panel( 'nav_menus' )->active_callback = '__return_false';
                }
            }
        }
    }
}
