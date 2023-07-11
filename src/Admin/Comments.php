<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Comments
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'comments',
 *     'comments' => (string) $route,
 *     'comments.title' => (string) $title,
 *     'comments.icon' => (string) $dashicon,
 * ]
 */
class Comments
{
	/**
	 * Initialize
	 *
	 * @param array $config
	 */
	public function __construct($config = false)
	{
		$compose = Composer::set(Arr::normalizeTrue($config));

		$compose = $compose->has('comments.title')->add('comments.title.', [
			'page', 'menu',
		]);

		$this->config = $compose->get();
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		$shared = SharedApi::set('comments', $this->config);
		$shared->router();
		$shared->menu();
		$shared->title();
		$shared->icon();
	}
}
