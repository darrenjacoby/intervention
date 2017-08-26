<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Utils;

/**
 * Module: add-menu-page
 *
 * Uses WordPress function add_menu_page to add an backend page.
 *
 * @example intervention('add-menu-page', $config(string|array), $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/functions/add_menu_page/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.2.0
 */
class AddMenuPage extends Instance
{
    use Utils;

    public function run()
    {
        $this->setup()->config()->setLabelIcon()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig([]);
        $this->setDefaultRoles(['admin', 'editor']);
        $this->roles = $this->aliasUserRoles($this->roles);
        return $this;
    }

    protected function config()
    {
        $this->config = (object) [
            'page_title' => $this->config[0],
            'menu_title' => $this->config[0],
            'menu_slug'  => (isset($this->config[1]) ? $this->config[1] : $this->config[0]),
            'function'   => strtolower(str_replace(' ', '_', (isset($this->config[2]) ? $this->config[2] : $this->config[0]))),
            'position'   => (isset($this->config[3]) ? $this->config[3] : null),
            'icon'       => (isset($this->config[4]) ? $this->config[4] : ''),
            'capability' => (isset($this->config[5]) ? $this->config[5] : 'read')
        ];
        return $this;
    }

    protected function setLabelIcon()
    {   
        if ($this->config->icon !== '') {
            // Append 'dashicons-' prefix if it has not been included
            if (strpos($this->config->icon, 'dashicons-') === false) {
                $this->config->icon = 'dashicons-' . $this->config->icon;
            }
        }
        return $this;
    }

    protected function hook()
    {
        add_action('admin_menu', [$this, 'addMenuPage']);
    }

    public function addMenuPage()
    {
        foreach ($this->roles as $role) {
            if (current_user_can($role)) {
                add_menu_page($this->config->page_title, $this->config->menu_title, $this->config->capability, $this->config->menu_slug, $this->config->function, $this->config->icon, $this->config->position);
            }
        }
    }
}
