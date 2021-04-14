<?php

namespace Sober\Intervention\Admin\Common;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;
use Sober\Intervention\Support\Str;

/**
 * Common/Adminbar
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://gist.github.com/ocean90/1723233
 * @link https://developer.wordpress.org/reference/functions/show_admin_bar/
 * @link https://developer.wordpress.org/reference/hooks/wp_before_admin_bar_render/
 * @link https://developer.wordpress.org/reference/hooks/pre_option_option/
 * @link https://developer.wordpress.org/reference/hooks/show_admin_bar/
 *
 * @param
 * [
 *     'common.adminbar',
 *     'common.adminbar.wp',
 *     'common.adminbar.wp.[about, documentation, support, feedback]',
 *     'common.adminbar.updates',
 *     'common.adminbar.site',
 *     'common.adminbar.site.[menu, visit, dashboard, themes, widgets, menus]',
 *     'common.adminbar.comments',
 *     'common.adminbar.new',
 *     'common.adminbar.new.[post, page, media, user]',
 *     'common.adminbar.edit',
 *     'common.adminbar.view',
 *     'common.adminbar.view.[archive, single]',
 *     'common.adminbar.user',
 *     'common.adminbar.user.[howdy, avatar, profile, edit]',
 *     'common.adminbar.search',
 *     'common.adminbar.theme',
 * ]
 */
class Adminbar
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('common.adminbar')->add('common.adminbar.', [
            'wp', 'updates', 'site', 'comments', 'new', 'edit', 'view', 'user', 'search', 'theme',
        ]);

        $compose = $compose->has('common.adminbar.wp')->add('common.adminbar.wp.', [
            'about', 'wporg', 'documentation', 'support', 'feedback',
        ]);

        $compose = $compose->has('common.adminbar.new')->add('common.adminbar.new.', [
            'post', 'page', 'media', 'user',
        ]);

        $compose = $compose->has('common.adminbar.view')->add('common.adminbar.view.', [
            'archive', 'single',
        ]);

        $compose = $compose->has('common.adminbar.user')->add('common.adminbar.user.', [
            'howdy', 'profile', 'edit', 'avatar',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        if ($this->config->has('common.adminbar.user.avatar')) {
            add_action('admin_head', function () {
                echo '
                <style>
                    #wpadminbar #wp-admin-bar-my-account a::before, 
                    #wpadminbar #wp-admin-bar-my-account.with-avatar > a img,
                    #wpadminbar #wp-admin-bar-my-account.without-avatar > a img {display: none}
                </style>';
                echo '<script>jQuery(document).ready(function() {jQuery("#wp-admin-bar-my-account").removeClass("with-avatar").addClass("without-avatar")});</script>';
            });
        }

        if ($this->config->has('common.adminbar.theme')) {
            add_filter('show_admin_bar', '__return_false');
        }

        add_action('wp_before_admin_bar_render', [$this, 'adminbar']);
    }

    /**
     * Adminbar
     */
    public function adminbar()
    {
        // WordPress
        if ($this->config->has('common.adminbar.wp')) {
            $GLOBALS['wp_admin_bar']->remove_node('wp-logo');
        }

        if ($this->config->has('common.adminbar.wp.about')) {
            $GLOBALS['wp_admin_bar']->remove_node('about');
        }

        if ($this->config->has('common.adminbar.wp.wporg')) {
            $GLOBALS['wp_admin_bar']->remove_node('wporg');
        }

        if ($this->config->has('common.adminbar.wp.documentation')) {
            $GLOBALS['wp_admin_bar']->remove_node('documentation');
        }

        if ($this->config->has('common.adminbar.wp.support')) {
            $GLOBALS['wp_admin_bar']->remove_node('support-forums');
        }

        if ($this->config->has('common.adminbar.wp.feedback')) {
            $GLOBALS['wp_admin_bar']->remove_node('feedback');
        }

        // Updates
        if ($this->config->has('common.adminbar.updates')) {
            $GLOBALS['wp_admin_bar']->remove_node('updates');
        }

        // Site
        if ($this->config->has('common.adminbar.site')) {
            $GLOBALS['wp_admin_bar']->remove_node('site-name');
        }

        if ($this->config->has('common.adminbar.site.menu')) {
            $GLOBALS['wp_admin_bar']->remove_node('site-menu');
        }

        if ($this->config->has('common.adminbar.site.view')) {
            $GLOBALS['wp_admin_bar']->remove_node('view-site');
        }

        if ($this->config->has('common.adminbar.site.dashboard')) {
            $GLOBALS['wp_admin_bar']->remove_node('dashboard');
        }

        if ($this->config->has('common.adminbar.site.themes')) {
            $GLOBALS['wp_admin_bar']->remove_node('themes');
        }

        if ($this->config->has('common.adminbar.site.widgets')) {
            $GLOBALS['wp_admin_bar']->remove_node('widgets');
        }

        if ($this->config->has('common.adminbar.site.menus')) {
            $GLOBALS['wp_admin_bar']->remove_node('menus');
        }

        // Comments
        if ($this->config->has('common.adminbar.comments')) {
            $GLOBALS['wp_admin_bar']->remove_node('comments');
        }

        // New
        if ($this->config->has('common.adminbar.new')) {
            $GLOBALS['wp_admin_bar']->remove_node('new-content');
        }

        if ($this->config->has('common.adminbar.new.post')) {
            $GLOBALS['wp_admin_bar']->remove_node('new-post');
        }

        if ($this->config->has('common.adminbar.new.page')) {
            $GLOBALS['wp_admin_bar']->remove_node('new-page');
        }

        if ($this->config->has('common.adminbar.new.media')) {
            $GLOBALS['wp_admin_bar']->remove_node('new-media');
        }

        if ($this->config->has('common.adminbar.new.user')) {
            $GLOBALS['wp_admin_bar']->remove_node('new-user');
        }

        // Edit
        if ($this->config->has('common.adminbar.edit')) {
            $GLOBALS['wp_admin_bar']->remove_node('edit');
        }

        // View
        if ($this->config->has('common.adminbar.view.archive')) {
            $GLOBALS['wp_admin_bar']->remove_node('archive');
        }

        if ($this->config->has('common.adminbar.view.single')) {
            $GLOBALS['wp_admin_bar']->remove_node('view');
        }

        // User
        if ($this->config->has('common.adminbar.user.profile')) {
            $GLOBALS['wp_admin_bar']->remove_node('user-info');
        }

        if ($this->config->has('common.adminbar.user.edit')) {
            $GLOBALS['wp_admin_bar']->remove_node('edit-profile');
        }

        if ($this->config->has('common.adminbar.user.howdy')) {
            $howdy_str = $this->config->get('common.adminbar.user.howdy');
            $howdy_str = $howdy_str !== true ? $howdy_str : '';
            $howdy_str_replace = Str::replaceFirst(' %s', '', __('Howdy, %s'));
            $acc_title = Str::replaceFirst($howdy_str_replace, $howdy_str, $GLOBALS['wp_admin_bar']->get_node('my-account')->title);

            $GLOBALS['wp_admin_bar']->add_node(['id' => 'my-account', 'title' => $acc_title]);
        }

        if ($this->config->has('common.adminbar.user.logout')) {
            $GLOBALS['wp_admin_bar']->remove_node('logout');
        }

        // Search
        if ($this->config->has('common.adminbar.search')) {
            $GLOBALS['wp_admin_bar']->remove_node('search');
        }
    }
}
