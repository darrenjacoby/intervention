<?php

namespace Jacoby\Intervention\Application\Media;

use Jacoby\Intervention\Application\OptionsApi;
use Jacoby\Intervention\Support\Arr;

/**
 * Media/Uploads
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/after_setup_theme/
 * @link https://developer.wordpress.org/reference/hooks/init/
 *
 * @param
 * [
 *     'media.uploads.organize' => (boolean) $enable_upload_organization,
 * ]
 */
class Uploads
{
	protected $config;

	/**
	 * Initialize
	 *
	 * @param array $config
	 */
	public function __construct($config = false)
	{
		$this->config = Arr::normalize($config);
		$this->api = OptionsApi::set($this->config);
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		add_action('init', [$this, 'options']); // after_setup_theme
		add_action('admin_head-options-media.php', [$this->api, 'disableKeys']);
	}

	/**
	 * Options
	 */
	public function options()
	{
		$this->api->saveKeys([
			'media.uploads.organize',
		]);
	}
}
