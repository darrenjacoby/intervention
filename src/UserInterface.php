<?php

namespace Jacoby\Intervention;

use Jacoby\Intervention\UserInterface\Import;
use Jacoby\Intervention\UserInterface\Export;
use Jacoby\Intervention\UserInterface\Support\RegisterPage;
use Jacoby\Intervention\UserInterface\Support\UserColorSchemeCustomProps;

/**
 * UserInterface
 *
 * Interface for Intervention options.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/add_submenu_page/
 */
class UserInterface
{
    /**
     * Initialize
     */
    public function __construct()
    {
        $this->routeExport = new Export();
        $this->routeImport = new Import();

        /**
         * Register custom `wp-admin` page.
         */
        $this->registerPage();

        /**
         * Load text domain for `json` language files.
         */
        $this->registerLanguages();

        /**
         * REST routes required for React fetch requests.
         */
        $this->registerRestApis();

        /**
         * Enqueue scripts and styles required for React app.
         */
        $this->registerResources();

        /**
         * Register user color scheme custom props to match the block editor.
         */
        new UserColorSchemeCustomProps();
    }

    /**
     * Register Page
     *
     * Register custom `wp-admin` page for Intervention.
     *
     * @link https://developer.wordpress.org/reference/hooks/admin_menu/
     * @link https://developer.wordpress.org/reference/functions/add_submenu_page/
     * @link https://developer.wordpress.org/reference/hooks/admin_footer_text/
     */
    public function registerPage()
    {
        add_action('admin_menu', function () {
            $page = new RegisterPage();

            add_submenu_page(
                $page->getParentSlug(),
                $page->getPageTitle(),
                $page->getMenuTitle(),
                $page->getCapabilities(),
                $page->getSlug(),
                [$page, 'render'],
            );
        });
    }

    /**
     * Register REST APIs
     *
     * REST routes required for React fetch requests.
     *
     * @link https://developer.wordpress.org/reference/hooks/rest_api_init/
     * @link https://developer.wordpress.org/reference/classes/wp_rest_server/
     */
    public function registerRestApis()
    {
        add_action('rest_api_init', function () {
            $core = [
                'methods' => \WP_REST_Server::EDITABLE,
                'permission_callback' => function () {
                    return current_user_can('manage_options');
                },
            ];

            register_rest_route('intervention/v2', '/import', array_merge(
                $core,
                ['callback' => [$this->routeImport, 'request']],
            ));

            register_rest_route('intervention/v2', '/export', array_merge(
                $core,
                ['callback' => [$this->routeExport, 'request']],
            ));
        });
    }

    /**
     * Register Languages
     *
     * Load text domain for `json` language files.
     *
     * @link https://developer.wordpress.org/reference/hooks/plugins_loaded/
     * @link https://developer.wordpress.org/reference/functions/load_plugin_textdomain/
     * @link https://pascalbirchler.com/internationalization-in-wordpress-5-0/
     */
    public function registerLanguages()
    {
        add_action('plugins_loaded', function () {
            load_plugin_textdomain('intervention', false, dirname(plugin_basename(__DIR__)) . '/languages/');
        });
    }

    /**
     * Register Resources
     *
     * Enqueue scripts and styles required for React app.
     *
     * @link https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/
     * @link https://developer.wordpress.org/reference/functions/wp_register_script/
     * @link https://developer.wordpress.org/reference/functions/wp_localize_script/
     * @link https://developer.wordpress.org/reference/functions/wp_set_script_translations/
     * @link https://developer.wordpress.org/reference/functions/wp_enqueue_script/
     */
    public function registerResources()
    {
        add_action('admin_enqueue_scripts', function () {
            $screen = get_current_screen();

            if ($screen->id !== 'tools_page_intervention') {
                return;
            }

            /**
             * Register script.
             */
            wp_register_script('intervention-scripts-user-interface', mix('assets/scripts/user-interface.js'), ['wp-i18n', 'wp-components', 'wp-element', 'wp-api-fetch']);

            /**
             * Localization for our script.
             */
            wp_localize_script('intervention-scripts-user-interface', 'intervention', [
                'nonce' => wp_create_nonce('wp_rest'),
                'route' => [
                    'import' => [
                        'url' => esc_url_raw(rest_url('intervention/v2/import')),
                    ],
                    'export' => [
                        'url' => esc_url_raw(rest_url('intervention/v2/export')),
                        'data' => $this->routeExport->getLocalizedData(),
                    ],
                ],
            ]);

            /**
             * Load script `json` translations.
             */
            wp_set_script_translations('intervention-scripts-user-interface', 'intervention', INTERVENTION_DIR . '/languages');

            /**
             * Enqueue script.
             */
            wp_enqueue_script('intervention-scripts-user-interface');

            /**
             * Register styles.
             */
            wp_register_style('intervention/styles/user-interface', mix('assets/styles/user-interface.css'), ['wp-components']);
            wp_enqueue_style('intervention/styles/user-interface');
        });
    }
}
