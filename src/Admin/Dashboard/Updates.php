<?php

namespace Jacoby\Intervention\Admin\Dashboard;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Dashboard/Updates
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'dashboard.updates',
 *     'dashboard.updates' => (string) $route,
 *     'dashboard.updates.title' => (string) $title,
 *     'dashboard.updates.title.[menu, page]' => (string) $title,
 *     'dashboard.updates.tabs',
 *     'dashboard.updates.tabs.help',
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
		$compose = Composer::set(Arr::normalizeTrue($config));

		$compose = $compose->has('dashboard.updates.all')->add('dashboard.updates.', [
			'tabs',
		]);

		$compose = $compose->has('dashboard.updates.title')->add('dashboard.updates.title.', [
			'menu', 'page',
		]);

		$compose = $compose->has('dashboard.updates.tabs')->add('dashboard.updates.tabs.', [
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
		$shared = SharedApi::set('dashboard.updates', $this->config);
		$shared->router();
		$shared->menu();
		$shared->title();
		$shared->tabs();
	}
}
