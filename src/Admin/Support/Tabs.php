<?php

namespace Jacoby\Intervention\Admin\Support;

use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Config;
use Jacoby\Intervention\Support\Str;

/**
 * Support/Tabs
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/functions/get_current_screen/
 *
 * @param
 * [
 *     'screen-options',
 *     'screen-options.[pagination, view-mode]',
 *     'help',
 *     'help.[
 *         overview,
 *         navigation,
 *         layout,
 *         content,
 *         screen-content,
 *         available-actions,
 *         bulk-actions,
 *         adding-terms,
 *         managing-pages,
 *         available-actions,
 *         attaching-files,
 *         sidebar,
 *         moderating-comments,
 *         adding-themes,
 *         preview-customize,
 *         removing-reusing,
 *         missing-widgets,
 *         custom-html-widget,
 *         menu-management,
 *         editing-menus,
 *         troubleshooting,
 *         adding-plugins,
 *         user-roles,
 *         converter,
 *         post-email,
 *         update-services,
 *         visibility,
 *         permalink-settings,
 *         custom-structures,
 *     ]',
 * ];
 */
class Tabs
{
    protected $key;
    protected $filter;

    /**
     * Interface
     *
     * @param string $key
     * @return Jacoby\Intervention\Admin\Support\Tabs
     */
    public static function set($key = false)
    {
        return new self($key);
    }

    /**
     * Initialize
     *
     * @param string $key
     */
    public function __construct($key = false)
    {
        $this->key = $key;
        $this->filter = Config::get('admin/pagenow')->get($this->key);
        // Remove anything after `?`
        $this->filter = Str::explode('?', $this->filter)[0];
    }

    /**
     * Remove
     *
     * @param array $array
     * @return object $this
     */
    public function remove($array)
    {
        $group = Arr::normalizeTrue($array);
        $filter = $this->filter ? 'admin_head-' . $this->filter : 'admin_head';

        // add_action('current_screen', function () {
        add_action($filter, function () use ($group) {
            $screen = get_current_screen();

            if (!$screen) {
                return;
            }

            /**
             * Help
             */
            if ($group->has('help')) {
                $screen->remove_help_tabs();
            }

            // Sidebar
            if ($group->has('help.sidebar')) {
                $screen->set_help_sidebar(false);
            }

            // Dashboard
            if ($group->has('help.overview')) {
                $screen->remove_help_tab('overview');
            }

            if ($group->has('help.navigation')) {
                $screen->remove_help_tab('help-navigation');
            }

            if ($group->has('help.layout')) {
                $screen->remove_help_tab('help-layout');
            }

            // Posttypes
            if ($group->has('help.screen-content')) {
                $screen->remove_help_tab('screen-content');
            }

            if ($group->has('help.available-actions')) {
                $screen->remove_help_tab('actions-links');
                $screen->remove_help_tab('action-links');
            }

            if ($group->has('help.bulk-actions')) {
                $screen->remove_help_tab('bulk-actions');
            }

            if ($group->has('help.adding-terms')) {
                $screen->remove_help_tab('adding-terms');
            }

            if ($group->has('help.managing-pages')) {
                $screen->remove_help_tab('managing-pages');
            }

            // Media
            if ($group->has('help.content')) {
                $screen->remove_help_tab('help-content');
            }

            if ($group->has('help.attaching-files')) {
                $screen->remove_help_tab('attaching-files');
            }

            // Comments
            if ($group->has('help.moderating-comments')) {
                $screen->remove_help_tab('moderating-comments');
            }

            // Themes
            if ($group->has('help.adding-themes')) {
                $screen->remove_help_tab('adding-themes');
            }

            if ($group->has('help.preview-customize')) {
                $screen->remove_help_tab('customize-preview-themes');
            }

            // Widgets
            if ($group->has('help.removing-reusing')) {
                $screen->remove_help_tab('removing-reusing');
            }

            if ($group->has('help.missing-widgets')) {
                $screen->remove_help_tab('missing-widgets');
            }

            if ($group->has('help.custom-html-widget')) {
                $screen->remove_help_tab('custom_html_widget');
            }

            // Menus
            if ($group->has('help.menu-management')) {
                $screen->remove_help_tab('menu-management');
            }

            if ($group->has('help.editing-menus')) {
                $screen->remove_help_tab('editing-menus');
            }

            // Plugins
            if ($group->has('help.troubleshooting')) {
                $screen->remove_help_tab('compatibility-problems');
            }

            if ($group->has('help.adding-plugins')) {
                $screen->remove_help_tab('adding-plugins');
            }

            // Users
            if ($group->has('help.user-roles')) {
                $screen->remove_help_tab('user-roles');
            }

            // Tools
            if ($group->has('help.converter')) {
                $screen->remove_help_tab('converter');
            }

            // Settings
            if ($group->has('help.post-email')) {
                $screen->remove_help_tab('options-postemail');
            }

            if ($group->has('help.update-services')) {
                $screen->remove_help_tab('options-services');
            }

            if ($group->has('help.visibility')) {
                $screen->remove_help_tab('site-visibility');
            }

            if ($group->has('help.permalink-settings')) {
                $screen->remove_help_tab('permalink-settings');
            }

            if ($group->has('help.custom-structures')) {
                $screen->remove_help_tab('custom-structures');
            }

            /**
             * Screen Options
             */
            if ($group->has('screen-options')) {
                add_filter('screen_options_show_screen', '__return_false');
            }

            if ($group->has('screen-options.pagination')) {
                $screen->remove_option('per_page');
            }

            if ($group->has('screen-options.view-mode')) {
                echo '<style>#screen-options-wrap .metabox-prefs.view-mode {display: none;}</style>';
            }

            /**
             * if ($group->has('screen-options.preferences')) {
             *     echo '<style>#screen-options-wrap .metabox-prefs:not(.view-mode) {display: none;}</style>';
             * }
             */
        });

        return $this;
    }
}
