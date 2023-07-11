<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Posts
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'pages',
 *     'pages' => (string) $route,
 *     'pages.title' => (string) $title,
 *     'pages.icon' => (string) $dashicon,
 * ]
 */
class Posts
{
	/**
	 * Initialize
	 *
	 * @param array $config
	 */
	public function __construct($config = false)
	{
		$compose = Composer::set(Arr::normalizeTrue($config));

		$compose = $compose->has('posts.title')->add('posts.title.', [
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
		$shared = SharedApi::set('posts', $this->config);
		$shared->router();
		$shared->menu();
		$shared->title();
		$shared->icon();
	}
}
