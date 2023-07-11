<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Settings
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'settings',
 *     'settings' => (string) $route,
 *     'settings.title' => (string) $title,
 *     'settings.icon' => (string) $dashicon,
 * ]
 */
class Settings
{
	/**
	 * Initialize
	 *
	 * @param array $config
	 */
	public function __construct($config = false)
	{
		$compose = Composer::set(Arr::normalizeTrue($config));

		$compose = $compose->has('settings.title')->add('settings.title.', [
			'menu',
		]);

		$this->config = $compose->get();
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		$shared = SharedApi::set('settings', $this->config);
		$shared->router();
		$shared->menu();
		$shared->title();
		$shared->icon();
	}
}
