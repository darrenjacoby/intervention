<?php

namespace Jacoby\Intervention\Admin\Dashboard;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Dashboard/Home
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/functions/wp_dashboard_setup/
 *
 * @param
 * [
 *     'dashboard.home',
 *     'dashboard.home' => (string) $route,
 *     'dashboard.home.title' => (string) $title,
 *     'dashboard.home.title.[menu, page]' => (string) $title,
 *     'dashboard.home.tabs',
 *     'dashboard.home.tabs.[screen-options, help]',
 *     'dashboard.home.cols' => (int) $num_of_cols
 *     'dashboard.home.welcome'
 *     'dashboard.home.notices'
 *     'dashboard.home.activity'
 *     'dashboard.home.right-now'
 *     'dashboard.home.recent-comments'
 *     'dashboard.home.incoming-links'
 *     'dashboard.home.plugins'
 *     'dashboard.home.quick-draft'
 *     'dashboard.home.drafts'
 *     'dashboard.home.news'
 *     'dashboard.home.site-health'
 * ]
 */
class Home
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

        $compose = $compose->has('dashboard.home.all')->add('dashboard.home.', [
            'tabs',
            'cols',
            'welcome',
            'notices',
            'activity',
            'right-now',
            'recent-comments',
            'incoming-links',
            'plugins',
            'quick-draft',
            'drafts',
            'news',
            'site-health',
        ]);

        $compose = $compose->has('dashboard.home.title')->add('dashboard.home.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('dashboard.home.tabs')->add('dashboard.home.tabs.', [
            'screen-options', 'help',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('dashboard.home', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-index.php', [$this, 'head']);
        add_action('wp_dashboard_setup', [$this, 'dashboard']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->get('dashboard.home.cols')) {
            $num = ($this->config->get('dashboard.home.cols') === true) ? 2 : $this->config->get('dashboard.home.cols');
            $num = ($num > 3) ? 3 : $num;
            $width = (100 / $num);

            // Columns
            echo '<style>.postbox-container {min-width: ' . esc_html($width) . '% !important;}</style>';
            echo '<style>#wpbody-content #dashboard-widgets #postbox-container-1 {width: ' . esc_html($width) . ' !important;}</style>';
            echo '<style>@media only screen and (max-width: 1499px) and (min-width: 800px) {#wpbody-content #dashboard-widgets .postbox-container {width: ' . esc_html($width) . '%}</style>';
            echo '<style>@media only screen and (max-width: 1499px) and (min-width: 800px) {#wpbody-content #dashboard-widgets #postbox-container-2, #wpbody-content #dashboard-widgets #postbox-container-3, #wpbody-content #dashboard-widgets #postbox-container-4 {width: ' . esc_attr($width) . '% !important}}</style>';
            echo '<style>@media only screen and (max-width: 1800px) and (min-width: 1500px) {#wpbody-content #dashboard-widgets .postbox-container {width: ' . esc_html($width) . '%;}</style>';

            // Sortable areas
            echo '<style>.meta-box-sortables.ui-sortable.empty-container::after {display: none !important;}</style>';

            if ($width === 100) {
                echo '<style>.meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
            } elseif ($width === 50) {
                echo '<style>#postbox-container-3 .meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
                echo '<style>#postbox-container-4 .meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
            } else {
                echo '<style>#postbox-container-2 .meta-box-sortables.ui-sortable.empty-container {display: block !important;}</style>';
                echo '<style>#postbox-container-3 .meta-box-sortables.ui-sortable.empty-container {display: block !important;}</style>';
                echo '<style>@media only screen and (max-width: 1499px) and (min-width: 800px) {#postbox-container-3 .meta-box-sortables.ui-sortable.empty-container {display: block !important; min-height: 100px !important; height: 250px !important; border: 3px dashed #b4b9be !important;}}</style>';
                echo '<style>#postbox-container-4 .meta-box-sortables.ui-sortable.empty-container {display: none !important;}</style>';
            }
        }
    }

    /**
     * Dashboard
     */
    public function dashboard()
    {
        if ($this->config->get('dashboard.home.welcome')) {
            remove_action('welcome_panel', 'wp_welcome_panel');
        }

        if ($this->config->get('dashboard.home.site-health')) {
            remove_meta_box('dashboard_site_health', 'dashboard', 'normal');
        }

        if ($this->config->get('dashboard.home.notices')) {
            remove_meta_box('dashboard_browser_nag', 'dashboard', 'normal');
        }

        if ($this->config->get('dashboard.home.activity')) {
            remove_meta_box('dashboard_activity', 'dashboard', 'normal');
        }

        if ($this->config->get('dashboard.home.right-now')) {
            remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
        }

        if ($this->config->get('dashboard.home.recent-comments')) {
            remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
        }

        if ($this->config->get('dashboard.home.incoming-links')) {
            remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
        }

        if ($this->config->get('dashboard.home.plugins')) {
            remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
        }

        if ($this->config->get('dashboard.home.quick-draft')) {
            remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
        }

        if ($this->config->get('dashboard.home.drafts')) {
            remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side');
        }

        if ($this->config->get('dashboard.home.news')) {
            remove_meta_box('dashboard_primary', 'dashboard', 'side');
        }
    }
}
