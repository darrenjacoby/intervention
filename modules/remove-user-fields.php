<?php namespace Sober\Intervention\RemoveUserFields;

use Sober\Intervention\Instance;
use Sober\Intervention\Module;
use Sober\Intervention\Alias;
use Sober\Intervention\Util;

/**
 * Module: remove-user-fields
 *
 * Updates CSS to remove user field/s for user role/s.
 *
 * @example intervention('remove-user-fields', $fields(string|array), $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/functions/remove_action/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
function remove_user_fields()
{
    // Instance config
    $instances = Module::getInstances(__FILE__);
    foreach ($instances as $instance) {
        // Instance config
        $config = Instance::getConfig($instance);
        $config = Instance::setDefaults(Util::toArray('all'), $config);
        // Instance roles
        $roles = Instance::getRoles($instance);
        $roles = Instance::setDefaults(Util::toArray('all'), $roles);
        $roles = Alias::addUserRoles($roles);

        // Run instance
        foreach ($roles as $role) {
            if (current_user_can($role)) {
                // Removals
                // Personal Options
                if (in_array('options', $config) || in_array('all', $config)) {
                    array_push($config, 'option-title', 'option-editor', 'option-schemes', 'option-shortcuts', 'option-toolbar');
                }
                if (in_array('option-title', $config)) {
                    echo '<style>#your-profile h2:first-of-type {display: none};</style>';
                }
                if (in_array('option-editor', $config)) {
                    echo '<style>#your-profile tr.user-rich-editing-wrap {display: none};</style>';
                }
                if (in_array('option-schemes', $config)) {
                    remove_action('admin_color_scheme_picker', 'admin_color_scheme_picker');
                }
                if (in_array('option-shortcuts', $config)) {
                    echo '<style>#your-profile tr.user-comment-shortcuts-wrap {display: none};</style>';
                }
                if (in_array('option-toolbar', $config)) {
                    echo '<style>#your-profile tr.user-admin-bar-front-wrap {display: none};</style>';
                }
                // Names
                // Don't allow removal of name-username (required field from WP)
                if (in_array('names', $config) || in_array('all', $config)) {
                    array_push($config, 'name-first', 'name-last', 'name-nickname', 'name-display');
                }
                if (in_array('name-first', $config)) {
                    echo '<style>#your-profile tr.user-first-name-wrap {display: none};</style>';
                    echo '<style>#createuser .form-table .form-field:nth-child(3) {display:none};</style>';
                }
                if (in_array('name-last', $config)) {
                    echo '<style>#your-profile tr.user-last-name-wrap {display: none};</style>';
                    echo '<style>#createuser .form-table .form-field:nth-child(4) {display:none};</style>';
                }
                if (in_array('name-nickname', $config)) {
                    echo '<style>#your-profile tr.user-nickname-wrap {display: none};</style>';
                }
                if (in_array('name-display', $config)) {
                    echo '<style>#your-profile tr.user-display-name-wrap {display: none};</style>';
                }
                // Contact Information
                // Don't allow removal of contact-email (required field from WP)
                if (in_array('contact', $config) || in_array('all', $config)) {
                    array_push($config, 'contact-web');
                }
                if (in_array('contact-web', $config)) {
                    echo '<style>#your-profile tr.user-url-wrap {display: none};</style>';
                    echo '<style>#createuser .form-table .form-field:nth-child(5) {display:none};</style>';
                }
                // About
                if (in_array('about', $config) || in_array('all', $config)) {
                    array_push($config, 'about-bio', 'about-profile');
                }
                if (in_array('about-bio', $config)) {
                    echo '<style>#your-profile h2:nth-of-type(4) {display: none};</style>';
                }
                if (in_array('about-profile', $config)) {
                    echo '<style>#your-profile .form-table:nth-of-type(4) {display: none};</style>';
                }
                // Account Management
                // Don't allow removal of reset-password and user-sessions.
            }
        }
    }
}

add_action('admin_head-user-new.php', __NAMESPACE__ . '\\remove_user_fields');
add_action('admin_head-user-edit.php', __NAMESPACE__ . '\\remove_user_fields');
add_action('admin_head-profile.php', __NAMESPACE__ . '\\remove_user_fields');
