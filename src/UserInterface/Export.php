<?php

namespace Jacoby\Intervention\UserInterface;

use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\CodeExporter;
use Jacoby\Intervention\Support\Config;
use Jacoby\Intervention\Support\Middleware\WordPressToIntervention;
use Jacoby\Intervention\Support\Str;

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
    protected $selected = [];
    protected $application_settings_database = [];
    protected $config_file_admin = [];
    protected $admin_components_order_keys = [];

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct()
    {
        /**
         * Intervention keys to database keys settings.
         */
        $this->application_settings_database = Config::get('application/settings-database');

        /**
         * Config file `wp-admin` options array excluding `wp-admin` prefix from keys, required for localized and query admin data.
         */
        $this->config_file_admin = Arr::collect(\Jacoby\Intervention\getConfigFile() ?? [])
            ->filter(function ($v, $k) {
                return Str::startsWith($k, 'wp-admin.');
            })
            ->reduce(function ($carry, $v, $k) {
                $key_no_prefix = Str::replace('wp-admin.', '', $k);
                $carry[$key_no_prefix] = $v;
                return $carry;
            }, []);

        /**
         * Components order keys for rendering `wp-admin` user interface.
         */
        $this->admin_components_order_keys = Config::get('user-interface/export/components-order-keys')->all();
    }

    /**
     * Get Localized Data
     *
     * Application and Admin sidebar group arrays.
     *
     * @return array
     */
    public function getLocalizedData()
    {
        $application = Config::get('user-interface/export/application-selection')->toArray();
        // $admin = $this->getLocalizedAdminData();

        return [
            'application' => $application,
            // 'admin' => $admin,
        ];
    }

    /**
     * Get Query Application Data
     *
     * Get and format application request data.
     *
     * @return array
     */
    public function getQueryApplicationData()
    {
        /**
         * Filter `selected` from `$this->application_settings_database`.
         */
        $application = $this->application_settings_database->filter(function ($v, $k) {
            $key_arr = explode('.', $k);
            return $this->selected->contains($key_arr[0]);
        });

        /**
         * Get key/option value from the WordPress database or the `pre_option` filter.
         */
        $application = $application->map(function ($v, $k) {
            return get_option($v);
        });

        /**
         * Get sanitized `plugin => []` from WordPress function `get_plugins()`.
         */
        if ($this->selected->contains('plugins')) {
            $plugins = $this->getPluginsData();

            if (count($plugins) > 0) {
                $application->prepend($plugins, 'plugins');
            }
        }

        /**
         * Get `theme => string` from WordPress function `get_stylesheet()`
         */
        if ($this->selected->contains('theme')) {
            $application->prepend(get_stylesheet(), 'theme');
        }

        /**
         * Transform ugly WordPress values with the expected Intervention config.
         */
        $application = $application->map(function ($v, $k) {
            return WordPressToIntervention::transform($k, $v);
        });

        /**
         * Extract first keys into separate arrays.
         *
         * `['general.site-title' => $x]` to `['general' => ['site-title' => $x]]`
         */
        return Arr::multidimensionalFirstKey($application);
    }

    /**
     * Get Query Admin Data
     *
     * Get and format admin request data.
     *
     * @return array
     */
    public function getQueryAdminData()
    {
        /**
         * Get database options.
         */
        $database = get_option('intervention_admin');

        /**
         * Get config file options
         */
        $config = Arr::transformEntriesToTrue($this->config_file_admin);

        /**
         * Merge database and config file
         */
        $admin = $database ? Arr::collect($database)->mergeRecursive($config) : Arr::collect($config);

        /**
         * Filter `$this->selected`.
         */
        $admin = $admin->filter(function ($v, $k) {
            return $this->selected->contains($k);
        });

        /**
         * Sort by `$this->admin_components_order_keys`
         */
        $admin = $admin->map(function ($v, $k) {
            return Arr::sortArrayByOrderArray($v, $this->admin_components_order_keys);
        });

        /**
         * Return
         */
        return $admin->all();
    }

    /**
     * Request Admin Options
     *
     * @param \WP_REST_Request
     * @return function rest_ensure_response()
     *
     * @link https://developer.wordpress.org/reference/functions/rest_ensure_response/
     */
    public function requestAdminOptions(\WP_REST_Request $request)
    {
        /**
         * Get only items starting with `wp-admin`, remove `wp-admin` prefix and return values
         */
        $config = Arr::collect($this->config_file_admin)->keys();

        /**
         * Get database options or an empty array.
         */
        $database = [];
        if (get_option('intervention_admin')) {
            $database = Arr::collect(get_option('intervention_admin'))->keys();
        }

        /**
         * Get all admin options by merging the config file with the database
         */
        $admin = $config->merge($database)->unique()->all();

        /**
         * Format title function used for rendering purposes.
         */
        function format_title($array)
        {
            return Arr::collect($array)->map(function ($role) {
                if ($role === 'all-not-administrator') {
                    return Arr::collect(explode('-', $role))->map(function ($word) {
                        return ucwords($word);
                    })->join(' ');
                }
                return ucwords($role);
            })->join('/');
        }

        /**
         * Format array for `Export.js` to consume, roles must be passed as an array for render sorting purposes.
         */
        $render = Arr::collect($admin)->map(function ($v) {
            $roles_arr = explode('|', $v);

            return [
                'key' => $v,
                'title' => format_title($roles_arr),
                'roles' => [$roles_arr],
            ];
        })->values();

        return rest_ensure_response($render);
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
         * Set `$this->selected` from `$request`.
         */
        $this->selected = Arr::collect($request->get_param('selected') ?? []);

        /**
         * Query application and admin data
         */
        $application = $this->getQueryApplicationData();
        $admin = $this->getQueryAdminData();

        /**
         * Render
         */
        $render = [
            'application' => $application,
            'wp-admin' => $admin,
        ];

        if (empty($application)) {
            unset($render['application']);
        }

        if (empty($admin)) {
            unset($render['wp-admin']);
        }

        $render_exporter = CodeExporter::export($render);
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
        /**
         * Require function `get_plugins()`
         */
        if (!function_exists('get_plugins')) {
            require_once ABSPATH . 'wp-admin/includes/plugin.php';
        }

        /**
         * Get Plugins
         */
        $plugins = get_plugins();

        if (count($plugins) === 0) {
            return [];
        }

        $plugins = Arr::collect($plugins)->keys();

        /**
         * Return plugins code for the code block.
         */
        return $plugins->reduce(function ($carry, $k) {
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
    }
}
