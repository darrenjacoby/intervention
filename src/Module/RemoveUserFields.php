<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

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
class RemoveUserFields extends Instance
{
    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig('all');
        $this->setDefaultRoles('all');
        $this->roles = $this->aliasUserRoles($this->roles);
        return $this;
    }

    protected function hook()
    {
        add_action('admin_head-user-new.php', [$this, 'removeUserFields']);
        add_action('admin_head-user-edit.php', [$this, 'removeUserFields']);
        add_action('admin_head-profile.php', [$this, 'removeUserFields']);
    }

    public function removeUserFields()
    {
        foreach ($this->roles as $role) {
            if (current_user_can($role)) {
                // Personal Options
                if (in_array('options', $this->config) || in_array('all', $this->config)) {
                    array_push($this->config, 'option-title', 'option-editor', 'option-schemes', 'option-shortcuts', 'option-toolbar');
                }
                if (in_array('option-title', $this->config)) {
                    echo '<style>#your-profile h2:first-of-type {display: none};</style>';
                }
                if (in_array('option-editor', $this->config)) {
                    echo '<style>#your-profile tr.user-rich-editing-wrap {display: none};</style>';
                }
                if (in_array('option-schemes', $this->config)) {
                    remove_action('admin_color_scheme_picker', 'admin_color_scheme_picker');
                }
                if (in_array('option-shortcuts', $this->config)) {
                    echo '<style>#your-profile tr.user-comment-shortcuts-wrap {display: none};</style>';
                }
                if (in_array('option-toolbar', $this->config)) {
                    echo '<style>#your-profile tr.user-admin-bar-front-wrap {display: none};</style>';
                }
                // Names
                // Don't allow removal of name-username (required field from WP)
                if (in_array('names', $this->config) || in_array('all', $this->config)) {
                    array_push($this->config, 'name-first', 'name-last', 'name-nickname', 'name-display');
                }
                if (in_array('name-first', $this->config)) {
                    echo '<style>#your-profile tr.user-first-name-wrap {display: none};</style>';
                    echo '<style>#createuser .form-table .form-field:nth-child(3) {display:none};</style>';
                }
                if (in_array('name-last', $this->config)) {
                    echo '<style>#your-profile tr.user-last-name-wrap {display: none};</style>';
                    echo '<style>#createuser .form-table .form-field:nth-child(4) {display:none};</style>';
                }
                if (in_array('name-nickname', $this->config)) {
                    echo '<style>#your-profile tr.user-nickname-wrap {display: none};</style>';
                }
                if (in_array('name-display', $this->config)) {
                    echo '<style>#your-profile tr.user-display-name-wrap {display: none};</style>';
                }
                // Contact Information
                // Exclude removal of contact-email; required for safety
                if (in_array('contact', $this->config) || in_array('all', $this->config)) {
                    array_push($this->config, 'contact-web');
                }
                if (in_array('contact-web', $this->config)) {
                    echo '<style>#your-profile tr.user-url-wrap {display: none};</style>';
                    echo '<style>#createuser .form-table .form-field:nth-child(5) {display:none};</style>';
                }
                // About
                if (in_array('about', $this->config) || in_array('all', $this->config)) {
                    array_push($this->config, 'about-bio', 'about-profile');
                }
                if (in_array('about-bio', $this->config)) {
                    echo '<style>#your-profile h2:nth-of-type(4) {display: none};</style>';
                }
                if (in_array('about-profile', $this->config)) {
                    echo '<style>#your-profile .form-table:nth-of-type(4) {display: none};</style>';
                }
                // Account Management
                // Exclude removal of reset-password and user-sessions; required for safety
            }
        }
    }
}
