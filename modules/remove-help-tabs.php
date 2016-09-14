<?php namespace Sober\Intervention\RemoveHelpTabs;

/**
 * Module: remove-help-tabs
 *
 * Hooks into admin_head to remove help tabs.
 *
 * @example intervention('remove-help-tabs');
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/functions/get_current_screen/
 * @link https://developer.wordpress.org/reference/classes/wp_screen/remove_help_tabs/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('admin_head', function () {
    $screen = get_current_screen();
    $screen->remove_help_tabs();
});
