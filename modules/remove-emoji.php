<?php namespace Sober\Intervention\RemoveEmoji;

/**
 * Module: remove-emoji
 *
 * Hooks into init to remove emoji.
 *
 * @example intervention('remove-emoji');
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/functions/remove_action/
 * @link https://developer.wordpress.org/reference/hooks/tiny_mce_plugins/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
add_action('init', function () {
    // Remove actions related to emojis
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    add_filter('emoji_svg_url', '__return_false');
    // Remove TinyMCE emojis
    add_filter('tiny_mce_plugins', function ($plugins) {
        if (is_array($plugins)) {
            return array_diff($plugins, ['wpemoji']);
        } else {
            return [];
        }
    });
});
