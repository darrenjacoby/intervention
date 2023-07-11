<?php

namespace Jacoby\Intervention\Admin\Common;

use Jacoby\Intervention\Admin\Support\Menu;
use Jacoby\Intervention\Support\Arr;

/**
 * Common/Updates
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/pre_site_transient_transient/
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/hooks/update_footer/
 * @link https://developer.wordpress.org/reference/hooks/admin_notices/
 * @link https://developer.wordpress.org/reference/hooks/network_admin_notices/
 *
 * @param
 * [
 *     'common.updates'
 * ]
 */
class Updates
{
	protected $config;

	/**
	 * Initialize
	 *
	 * @param array $config
	 */
	public function __construct($config = false)
	{
		$this->config = Arr::normalizeTrue($config);
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		if ($this->config->has('common.updates')) {
			Menu::set('dashboard.updates')->remove();

			remove_filter('update_footer', 'core_update_footer');
			remove_action('admin_notices', 'update_nag', 3);
			remove_action('network_admin_notices', 'update_nag', 3);

			add_filter('pre_site_transient_update_core', [$this, 'removeUpdateTransient']);
			add_filter('pre_site_transient_update_plugins', [$this, 'removeUpdateTransient']);
			add_filter('pre_site_transient_update_themes', [$this, 'removeUpdateTransient']);
		}
	}

	/**
	 * Remove Update Transient
	 */
	public function removeUpdateTransient()
	{
		return (object) [
			'last_checked' => time(),
			'version_checked' => $GLOBALS['wp_version'],
			'updates' => [],
		];
	}
}
