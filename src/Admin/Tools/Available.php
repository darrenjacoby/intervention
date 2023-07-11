<?php

namespace Jacoby\Intervention\Admin\Tools;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Tools/Available
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'tools.available',
 *     'tools.available' => (string) $route,
 *     'tools.available.title' => (string) $title,
 *     'tools.available.title.[menu, page]' => (string) $title,
 *     'tools.available.tabs',
 *     'tools.available.tabs.[screen-options, help]',
 * ]
 */
class Available
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

		$compose = $compose->has('tools.available.all')->add('tools.available.', [
			'tabs',
		]);

		$compose = $compose->has('tools.available.title')->add('tools.available.title.', [
			'menu', 'page',
		]);

		$compose = $compose->has('tools.available.tabs')->add('tools.available.tabs.', [
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
		$shared = SharedApi::set('tools.available', $this->config);
		$shared->router();
		$shared->menu();
		$shared->title();
		$shared->tabs();
	}
}
