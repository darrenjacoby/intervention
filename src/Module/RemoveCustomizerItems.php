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
class RemoveCustomizerItems extends Instance
{
    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig(['header-image', 'background-image', 'colors', 'custom-css', 'site-tagline']);
        $this->setDefaultRoles('all');
        $this->roles = $this->aliasUserRoles($this->roles);
        return $this;
    }

    protected function hook()
    {
        add_action('customize_register', [$this, 'removeCustomizerItems']);
    }

    public function removeCustomizerItems($wp_customize)
    {
        foreach ($this->roles as $role) {
            if (current_user_can($role)) {
                // Sections
                // Identity
                if (in_array('site', $this->config) || in_array('all', $this->config)) {
                    $wp_customize->remove_section('title_tagline');
                }
                if (in_array('site-title', $this->config)) {
                    $wp_customize->remove_control('blogname');
                }
                if (in_array('site-tagline', $this->config)) {
                    $wp_customize->remove_control('blogdescription');
                }
                if (in_array('site-icon', $this->config)) {
                    $wp_customize->remove_control('site_icon');
                }
                // Other
                if (in_array('custom-css', $this->config) || in_array('all', $this->config)) {
                    $wp_customize->remove_section('custom_css');
                }
                if (in_array('colors', $this->config) || in_array('all', $this->config)) {
                    $wp_customize->remove_section('colors');
                }
                if (in_array('header-image', $this->config) || in_array('all', $this->config)) {
                    $wp_customize->remove_section('header_image');
                }
                if (in_array('background-image', $this->config) || in_array('all', $this->config)) {
                    $wp_customize->remove_section('background_image');
                }
                if (in_array('static-front-page', $this->config) || in_array('all', $this->config)) {
                    $wp_customize->remove_section('static_front_page');
                }
            }
        }
    }
}
