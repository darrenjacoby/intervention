<?php namespace Sober\Intervention\UpdatePagination;

use Sober\Intervention\Module;
use Sober\Intervention\Instance;
use Sober\Intervention\Util;

/**
 * Module: update-pagination
 *
 * Hooks into admin_menu to change pagination for posts, pages and comments.
 *
 * @example intervention('update-pagination', $amount(integer));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('admin_head', function () {
    $instance = Module::getInstances(__FILE__, false);
    $config = Instance::getConfig($instance);
    $config = Instance::setDefaults(40, $config);
    $config = Util::escapeArray($config);
    $users = get_users();
    foreach ($users as $user) {
        $key = 'edit_post_per_page';
        update_user_meta($user->ID, $key, $config);
    }
    foreach ($users as $user) {
        $key = 'edit_page_per_page';
        update_user_meta($user->ID, $key, $config);
    }
    foreach ($users as $user) {
        $key = 'edit_comments_per_page';
        update_user_meta($user->ID, $key, $config);
    }
});
