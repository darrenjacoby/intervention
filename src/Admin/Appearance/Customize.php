<?php

namespace Sober\Intervention\Admin\Appearance;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Appearance/Customize
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head
 * @link https://developer.wordpress.org/reference/hooks/customize_previewable_devices/
 * @link https://developer.wordpress.org/reference/hooks/customize_register/
 * @link https://stackoverflow.com/a/52090607
 * @link https://make.wordpress.org/core/2016/01/28/previewing-site-responsiveness-in-the-customizer/
 * @link https://developer.wordpress.org/reference/hooks/customize_register/
 *
 * @param
 * [
 *     'appearance.customize',
 *     'appearance.customize' => (string) $route,
 *     'appearance.customize.title' => (string) $title,
 *     'appearance.customize.title.[menu, page]' => (string) $title,
 *     'appearance.customize.theme',
 *     'appearance.customize.site',
 *     'appearance.customize.site.[title, tagline, icon]',
 *     'appearance.customize.custom-css',
 *     'appearance.customize.colors',
 *     'appearance.customize.header-image',
 *     'appearance.customize.background-image',
 *     'appearance.customize.homepage',
 *     'appearance.customize.menus',
 *     'appearance.customize.menus.[locations, add]',
 *     'appearance.customize.widgets',
 *     'appearance.customize.footer',
 *     'appearance.customize.footer.[devices]',
 * ]
 */
class Customize
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('appearance.customize.all')->add('appearance.customize.', [
            'theme', 'site', 'custom-css', 'colors', 'header-image', 'background-image', 'homepage', 'menus', 'widgets', 'footer',
        ]);

        $compose = $compose->has('appearance.customize.title')->add('appearance.customize.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('appearance.customize.site')->add('appearance.customize.site.', [
            'title', 'tagline', 'icon',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('appearance.customize', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();

        if ($this->config->has('appearance.customize.footer.devices')) {
            add_filter('customize_previewable_devices', '__return_empty_array');
        }

        add_action('admin_head', [$this, 'head']);
        add_action('customize_register', [$this, 'customize'], 20);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('appearance.customize.footer')) {
            echo '<style>.wp-customizer #customize-footer-actions {display: none;}</style>';
        }
    }

    /**
     * Customize
     *
     * @param object $wp_customize
     */
    public function customize($wp_customize)
    {
        if ($this->config->has('appearance.customize.theme')) {
            $wp_customize->remove_section('installed_themes');
            $wp_customize->remove_section('wporg_themes');
        }

        if ($this->config->has('appearance.customize.site')) {
            $wp_customize->remove_section('title_tagline');
        }

        if ($this->config->has('appearance.customize.site.title')) {
            $wp_customize->remove_control('blogname');
        }

        if ($this->config->has('appearance.customize.site.tagline')) {
            $wp_customize->remove_control('blogdescription');
        }

        if ($this->config->has('appearance.customize.site.icon')) {
            $wp_customize->remove_control('site_icon');
        }

        if ($this->config->has('appearance.customize.colors')) {
            $wp_customize->remove_section('colors');
        }

        if ($this->config->has('appearance.customize.header-image')) {
            $wp_customize->remove_section('header_image');
        }

        if ($this->config->has('appearance.customize.background-image')) {
            $wp_customize->remove_section('background_image');
        }

        if ($this->config->has('appearance.customize.homepage')) {
            $wp_customize->remove_section('static_front_page');
        }

        if ($this->config->has('appearance.customize.custom-css') || $this->config->has('appearance.customize.css')) {
            $wp_customize->remove_section('custom_css');
        }

        if ($this->config->has('appearance.customize.menus')) {
            $wp_customize->remove_panel('nav_menus');
        }

        if ($this->config->has('appearance.customize.menus.locations')) {
            $wp_customize->remove_section('menu_locations');
        }

        if ($this->config->has('appearance.customize.menus.add')) {
            $wp_customize->remove_section('add_menu');
        }

        if ($this->config->has('appearance.customize.widgets')) {
            $wp_customize->remove_panel('widgets');
        }
    }
}
