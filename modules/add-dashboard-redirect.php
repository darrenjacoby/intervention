<?php namespace Sober\Intervention\AddDashboardRedirect;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Util;
use Sober\Intervention\Alias;

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
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/functions/remove_menu_page/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
 // Redirect
add_action('wp_dashboard_setup', function () {
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        // Instance config
        $config = Instance::getConfig($instance);
        $config = Instance::setDefaults(Util::toArray('posts'), $config);
        $config = Util::toArray(map_route(Util::escapeArray($config)));
        // Instance roles
        $roles = Instance::getRoles($instance);
        $roles = Instance::setDefaults(Util::toArray('all'), $roles);
        $roles = Alias::addUserRoles($roles);
        // Run instance
        foreach ($roles as $role) {
            if (current_user_can($role)) {
                wp_redirect(admin_url(Util::escapeArray($config)));
            }
        }
    }
});

// Remove menu item
add_action('admin_init', function () {
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        $roles = Instance::getRoles($instance);
        $roles = Instance::setDefaults(Util::toArray('all'), $roles);
        $roles = Alias::addUserRoles($roles);
        foreach ($roles as $role) {
            if (current_user_can($role)) {
                remove_menu_page('index.php');
            }
        }
    }
});

// Route mapping
function map_route($config)
{
    switch ($config) {
        case 'posts':
            $config = 'edit.php';
            break;
        case 'post-new':
            $config = 'post-new.php';
            break;
        case 'post-categories':
            $config = 'edit-tags.php?taxonomy=category';
            break;
        case 'post-tags':
            $config = 'edit-tags.php?taxonomy=post_tag';
            break;
        case 'media':
            $config = 'upload.php';
            break;
        case 'media-new':
            $config = 'media-new.php';
            break;
        case 'pages':
            $config = 'edit.php?post_type=page';
            break;
        case 'page-new':
            $config = 'post-new.php?post_type=page';
            break;
        case 'comments':
            $config = 'edit-comments.php';
            break;
        case 'themes':
            $config = 'themes.php';
            break;
        case 'customizer':
            $config = 'customize.php';
            break;
        case 'widgets':
            $config = 'widgets.php';
            break;
        case 'menus':
            $config = 'nav-menus.php';
            break;
        case 'plugins':
            $config = 'plugins.php';
            break;
        case 'plugins-new':
            $config = 'plugin-install.php';
            break;
        case 'users':
            $config = 'users.php';
            break;
        case 'user-new':
            $config = 'user-new.php';
            break;
        case 'user-profile':
            $config = 'profile.php';
            break;
        case 'tools':
            $config = 'tools.php';
            break;
        case 'setting-general':
            $config = 'options-general.php';
            break;
        case 'setting-writing':
            $config = 'options-writing.php';
            break;
        case 'setting-reading':
            $config = 'options-reading.php';
            break;
        case 'setting-discussion':
            $config = 'options-discussion.php';
            break;
        case 'setting-media':
            $config = 'options-media.php';
            break;
        case 'setting-permalink':
            $config = 'options-permalink.php';
            break;
        default:
            $config = 'edit.php';
    }
    return $config;
}
