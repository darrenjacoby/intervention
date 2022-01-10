<?php

namespace Sober\Intervention\UserInterface;

use Brick\VarExporter\VarExporter as Exporter;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Config;
use Sober\Intervention\Support\Middleware\WordPressToIntervention;

/**
 * Export
 *
 * Export WordPress database to an Intervention application config file.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/wp_localize_script/
 * @link https://developer.wordpress.org/reference/functions/rest_ensure_response/
 * @link https://developer.wordpress.org/reference/functions/get_plugins/
 * @link https://developer.wordpress.org/reference/functions/is_plugin_active/
 * @link https://wordpress.stackexchange.com/questions/149802/get-plugins-doesnt-work-after-plugins-loaded
 * @link https://github.com/brick/varexporter
 *
 */
class Export
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct()
    {
        /**
         * Fetch config to database mapping.
         */
        $this->config = Arr::collect(Config::get('application/settings-database'));
    }

    /**
     * Get Localized Data
     *
     * Register options page scripts and styles.
     *
     * @link https://developer.wordpress.org/reference/functions/wp_localize_script/
     */
    public function getLocalizedData()
    {
        $theme_name = get_option('stylesheet');
        $theme = file_exists(get_stylesheet_directory() . '/config') ? $theme_name . '/config' : $theme_name;

        // group list config
        $exports = Config::get('user-interface/exports')->toArray();

        return [
            'theme' => $theme,
            'exports' => $exports,
        ];
    }

    /**
     * Request
     *
     * @param \WP_REST_Request
     * @return function rest_ensure_response()
     *
     * @link https://developer.wordpress.org/reference/functions/rest_ensure_response/
     */
    public function request(\WP_REST_Request $request)
    {
        /**
         * Collect param `groups` from the incoming REST route request.
         */
        $groups = Arr::collect($request->get_param('groups') ?? []);

        /**
         * Filter selected groups from `$this->config`.
         */
        $config = $this->config->filter(function ($v, $k) use ($groups) {
            $key_arr = explode('.', $k);
            return $groups->contains($key_arr[0]);
        });

        /**
         * Get key/option value from the WordPress database or the `pre_option` filter.
         */
        $config = $config->map(function ($v, $k) {
            return get_option($v);
        });

        /**
         * Get sanitized `plugin => []` from WordPress function `get_plugins()`.
         */
        if ($groups->contains('plugins')) {
            $plugins = $this->getPluginsData();

            if (count($plugins) > 0) {
                $config->prepend($plugins, 'plugins');
            }
        }

        /**
         * Get `theme => string` from WordPress function `get_stylesheet()`
         */
        if ($groups->contains('theme')) {
            $config->prepend(get_stylesheet(), 'theme');
        }

        /**
         * Transform ugly WordPress values with the expected Intervention config.
         */
        $config = $config->map(function ($v, $k) {
            return WordPressToIntervention::transform($k, $v);
        });

        /**
         * Extract first keys into separate arrays.
         *
         * `['general.site-title' => $x]` to `['general' => ['site-title' => $x]]`
         */
        $config = Arr::multidimensionalFirstKey($config);

        /**
         * Setup code preview by passing it through `Brick\VarExporter`.
         */
        $render_application = ['application' => $config];
        $render_exporter = "<?php\r\n\r\nreturn " . Exporter::export($render_application);
        return rest_ensure_response($render_exporter);
    }

    /**
     * Get Plugins Data
     *
     * Return an array of reduced/sanitized plugin names with their state as a value.
     *
     * @return array
     *
     * @link https://developer.wordpress.org/reference/functions/get_plugins/
     * @link https://developer.wordpress.org/reference/functions/is_plugin_active/
     * @link https://wordpress.stackexchange.com/questions/149802/get-plugins-doesnt-work-after-plugins-loaded
     * @link https://github.com/brick/varexporter
     */
    protected function getPluginsData()
    {
        if (!function_exists('get_plugins')) {
            require_once ABSPATH . 'wp-admin/includes/plugin.php';
        }

        $plugins = get_plugins();

        if (count($plugins) === 0) {
            return [];
        }

        $plugins = Arr::collect($plugins)->keys();

        $plugins = $plugins->reduce(function ($carry, $k) {
            /**
             * Store state to be used for value when returning.
             */
            $is_active = is_plugin_active($k);

            /**
             * Convert `'classic-editor/classic-editor.php' => x` to `'classic-editor' => x`.
             */
            $k_match = explode('/', $k);
            $k_match_folder = str_replace('.php', '', $k_match[1]);
            $k = $k_match[0] === $k_match_folder ? $k_match[0] : $k;

            /**
             * Pass to carry and return.
             */
            $carry[$k] = $is_active;

            return $carry;
        }, []);

        return $plugins;
    }
}
