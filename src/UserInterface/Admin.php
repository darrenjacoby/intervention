<?php

namespace Sober\Intervention\UserInterface;

use Brick\VarExporter\VarExporter as Exporter;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Config;

/**
 * Admin
 *
 * Remove WordPress `wp-admin` elements from the user interface.
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
class Admin
{
    public $roles = [];
    public static $configfile = false;

    /**
     *
     */
    public static function set($configfile = false)
    {
        self::$configfile = $configfile;
    }

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct()
    {
        $this->getQuery();
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
        global $wp_roles;
        $all_roles = $wp_roles->roles;
        $this->roles = apply_filters('editable_roles', $all_roles);

        $components = Config::get('user-interface/admin/components')->toArray();
        $components = Arr::transformEntriesToTrue($components);
        $pagenow = Config::get('admin/pagenow')->keys()->toArray();
        $dashicons = Config::get('admin/dashicons')->values()->toArray();

        return [
            'roles' => $this->roles,
            'components' => $components,
            'pagenow' => $pagenow,
            'dashicons' => $dashicons,
        ];
    }

    /**
     * Get Response
     *
     * Middleware for merging `$self::config_file` and `get_option('intervention_admin')` before passing to UI.
     */
    public function getQuery()
    {
        /**
         * get config file as
         *
         * [
         *      {role} => {components} [],
         * ]
         *
         */
        $roles_components = Arr::multidimensionalFirstKey(self::$configfile);
        $config_file = [];
        foreach ($roles_components as $role => $components) {
            $config_file[$role]['immutable'] = true;

            foreach ($components as $key => $value) {
                $config_file[$role][$key] = [$value, true];
            }
        }

        /**
         * merge config file and database arrays
         */
        $database = Arr::collect(get_option('intervention_admin', []));
        $merged = Arr::collect($config_file)->mergeRecursive($database);

        /**
         * rendering formatting
         * [
         *      'roles' => [],
         *      'components' => [],
         * ]
         */
        $render = [];
        foreach ($merged->toArray() as $role => $array) {
            if (!is_array($array)) {
                return $render;
            }

            $immutable = array_key_exists('immutable', $array) ? $array['immutable'] : false;
            if ($immutable) {
                unset($array['immutable']);
            }

            $roles = explode('|', $role);

            $render[] = [
                'roles' => [$roles, $immutable],
                'components' => $array,
            ];
        }

        return $render;
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
        $data = $request->get_param('data');
        $save = $request->get_param('save');

        if ($save) {
            update_option('intervention_admin', $data);
        }

        $response['data'] = $this->getQuery();
        return rest_ensure_response($response);
    }
}
