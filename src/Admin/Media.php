<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Media
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'media',
 *     'media' => (string) $route,
 *     'media.title' => (string) $title,
 *     'media.icon' => (string) $dashicon,
 * ]
 */
class Media
{
	/**
	 * Initialize
	 *
	 * @param array $config
	 */
	public function __construct($config = false)
	{
		$compose = Composer::set(Arr::normalizeTrue($config));

		$compose = $compose->has('media.title')->add('media.title.', [
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
		$shared = SharedApi::set('media', $this->config);
		$shared->router();
		$shared->menu();
		$shared->title();
		$shared->icon();
	}
}
