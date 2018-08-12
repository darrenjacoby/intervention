<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Utils;

/**
 * Module: add-dashboard-redirect
 *
 * Hooks into wp_dashboard_setup to redirect dashboard for user role/s.
 *
 * @example intervention('add-dashboard-redirect', $route(string), $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/functions/wp_dashboard_setup/
 * @link https://developer.wordpress.org/reference/functions/wp_redirect/
 * @link https://developer.wordpress.org/reference/functions/admin_url/
 * @link https://developer.wordpress.org/reference/hooks/admin_menu/
 * @link https://developer.wordpress.org/reference/functions/remove_menu_page/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class AddDashboardRedirect extends Instance
{
    use Utils;

    public function run()
    {
        $this->setup()->redirectRouter()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig('posts');
        $this->config = $this->escArray($this->config);
        $this->setDefaultRoles('all');
        $this->roles = $this->aliasUserRoles($this->roles);
        return $this;
    }

    protected function redirectRouter()
    {
        switch ($this->config) {
            case 'posts':
                $this->config = 'edit.php';
                break;
            case 'post-new':
                $this->config = 'post-new.php';
                break;
            case 'post-categories':
                $this->config = 'edit-tags.php?taxonomy=category';
                break;
            case 'post-tags':
                $this->config = 'edit-tags.php?taxonomy=post_tag';
                break;
            case 'media':
                $this->config = 'upload.php';
                break;
            case 'media-new':
                $this->config = 'media-new.php';
                break;
            case 'pages':
                $this->config = 'edit.php?post_type=page';
                break;
            case 'page-new':
                $this->config = 'post-new.php?post_type=page';
                break;
            case 'comments':
                $this->config = 'edit-comments.php';
                break;
            case 'themes':
                $this->config = 'themes.php';
                break;
            case 'customizer':
                $this->config = 'customize.php';
                break;
            case 'widgets':
                $this->config = 'widgets.php';
                break;
            case 'menus':
                $this->config = 'nav-menus.php';
                break;
            case 'plugins':
                $this->config = 'plugins.php';
                break;
            case 'plugins-new':
                $this->config = 'plugin-install.php';
                break;
            case 'users':
                $this->config = 'users.php';
                break;
            case 'user-new':
                $this->config = 'user-new.php';
                break;
            case 'user-profile':
                $this->config = 'profile.php';
                break;
            case 'tools':
                $this->config = 'tools.php';
                break;
            case 'setting-general':
                $this->config = 'options-general.php';
                break;
            case 'setting-writing':
                $this->config = 'options-writing.php';
                break;
            case 'setting-reading':
                $this->config = 'options-reading.php';
                break;
            case 'setting-discussion':
                $this->config = 'options-discussion.php';
                break;
            case 'setting-media':
                $this->config = 'options-media.php';
                break;
            case 'setting-permalink':
                $this->config = 'options-permalink.php';
                break;
        }
        return $this;
    }

    protected function hook()
    {
        add_action('wp_dashboard_setup', [$this, 'redirect']);
        add_action('admin_menu', [$this, 'removeDashboard']);
    }

    public function redirect()
    {
        foreach ($this->roles as $role) {
            if (current_user_can($role)) {
                wp_redirect(admin_url($this->escArray($this->config)));
            }
        }
    }

    public function removeDashboard()
    {
        foreach ($this->roles as $role) {
            if (current_user_can($role)) {
                remove_menu_page('index.php');
            }
        }
    }
}
