<?php

namespace Sober\Intervention\Application\Support;

use Sober\Intervention\Admin;
use Sober\Intervention\Admin\Support\BlockEditor;

/**
 * Support/Comments
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/hooks/rest_endpoints/
 * @link https://developer.wordpress.org/reference/hooks/admin_print_footer_scripts/
 * @link https://developer.wordpress.org/reference/hooks/comments_open/
 * @link https://developer.wordpress.org/reference/hooks/pings_open/
 * @link https://developer.wordpress.org/reference/hooks/comments_array
 */
class Comments
{
    /**
     * Remove
     */
    public static function remove()
    {
        $self = new self();

        add_filter('rest_endpoints', [$self, 'filterRestEndpoints']);
        add_action('wp_loaded', [$self, 'removePostTypesSupport']);
        add_action('admin_init', [$self, 'adminMenuRedirect']);
        add_action('admin_head-index.php', [$self, 'dashboard']);

        if (!is_admin()) {
            add_action('template_redirect', [$self, 'templateComments']);
            add_filter('comments_open', '__return_false', 10, 1);
            add_filter('pings_open', '__return_false', 10, 1);
            add_filter('post_comments_feed_link', '__return_false', 10, 1);
            add_filter('comments_link_feed', '__return_false', 10, 1);
            add_filter('comment_link', '__return_false', 10, 1);
            add_filter('get_comments_number', '__return_false', 10, 2);
            add_filter('feed_links_show_comments_feed', '__return_false');
            // add_filter('comments_array', '__return_empty_array', 10, 2);
        }

        Admin::set('common.adminbar.comments', true);
        Admin::set('dashboard.home.recent-commments', true);
        Admin::set('posts.all.list.cols.comments', true);
        Admin::set('pages.all.list.cols.comments', true);
        Admin::set('comments', true);
        Admin::set('settings.discussion', true);
        Admin::set('appearance.widgets.available.recent-comments', true);
        Admin::set('users.profile.options.shortcuts', true);
        BlockEditor::set(['discussion']);
    }

    /**
     * Disable support for comments and trackbacks in post types
     */
    public function removePostTypesSupport()
    {
        $post_types = get_post_types();

        foreach ($post_types as $post_type) {
            if (post_type_supports($post_type, 'comments')) {
                remove_post_type_support($post_type, 'comments');
                remove_post_type_support($post_type, 'trackbacks');
            }
        }
    }

    /**
     * Redirect any user trying to access comments page
     */
    public function adminMenuRedirect()
    {
        global $pagenow;

        if ($pagenow === 'edit-comments.php') {
            wp_safe_redirect(admin_url());
            exit;
        }
    }

    /**
     * Remove the comments endpoint for the REST API
     */
    public function filterRestEndpoints($endpoints)
    {
        unset($endpoints['comments']);
        return $endpoints;
    }

    /**
     * Dashboard
     */
    public function dashboard()
    {
        echo '
        <style>
            #dashboard_right_now .comment-count,
            #dashboard_right_now .comment-mod-count,
            #latest-comments,
            #welcome-panel .welcome-comments {
                display: none !important;
            }
        </style>';
    }

    /**
     * Template comments
     */
    public function templateComments()
    {
        if (!is_singular()) {
            return;
        }

        wp_deregister_script('comment-reply');
        remove_action('wp_head', 'feed_links_extra', 3);
        add_filter('comments_template', function () {
            return INTERVENTION_DIR . '/comments-template.php';
        }, 20);
    }
}
