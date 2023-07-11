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
	}

	/**
	 * Get Localized Data
	 *
	 * Application sidebar group arrays.
	 *
	 * @return array
	 */
	public function getLocalizedData()
	{
		$application = Config::get('user-interface/application-selection')->toArray();

		return [
			'application' => $application,
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
		 * Query application data
		 */
		$application = $this->getQueryApplicationData();

		/**
		 * Render
		 */
		$render = [
			'application' => $application,
		];

		if (empty($application)) {
			unset($render['application']);
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
