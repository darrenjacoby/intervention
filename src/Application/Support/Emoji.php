<?php

namespace Jacoby\Intervention\Application\Support;

/**
 * Support/Emoji
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_print_styles/
 * @link https://developer.wordpress.org/reference/hooks/wp_head/
 * @link https://developer.wordpress.org/reference/hooks/admin_print_scripts/
 * @link https://developer.wordpress.org/reference/functions/wp_print_styles/
 * @link https://developer.wordpress.org/reference/functions/wp_mail/
 * @link https://developer.wordpress.org/reference/hooks/the_content_feed/
 * @link https://developer.wordpress.org/reference/hooks/comment_text_rss/
 * @link https://developer.wordpress.org/reference/hooks/emoji_svg_url/
 * @link https://developer.wordpress.org/reference/hooks/tiny_mce_plugins/
 */
class Emoji
{
    /**
     * Interface
     */
    public static function remove()
    {
        remove_action('admin_print_styles', 'print_emoji_styles');
        remove_action('wp_head', 'print_emoji_detection_script', 7);
        remove_action('admin_print_scripts', 'print_emoji_detection_script');
        remove_action('wp_print_styles', 'print_emoji_styles');
        remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
        remove_filter('the_content_feed', 'wp_staticize_emoji');
        remove_filter('comment_text_rss', 'wp_staticize_emoji');
        add_filter('emoji_svg_url', '__return_false');
        add_filter('tiny_mce_plugins', function ($plugins) {
            return is_array($plugins) ? array_diff($plugins, ['wpemoji']) : [];
        });
    }
}
