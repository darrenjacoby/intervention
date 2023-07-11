<?php

namespace Jacoby\Intervention\Admin\Media;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Admin\Support\Title;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Media/Add
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'media.add',
 *     'media.add' => (string) $route,
 *     'media.add.title' => (string) $title,
 *     'media.add.title.[menu, page]' => (string) $title,
 *     'media.add.tabs',
 *     'media.add.tabs.[screen-options, help]',
 * ]
 */
class Add
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

		$compose = $compose->has('media.add.all')->add('media.add.', [
			'tabs',
		]);

		$compose = $compose->has('media.add.title')->add('media.add.title.', [
			'menu', 'page',
		]);

		$compose = $compose->has('media.add.tabs')->add('media.add.tabs.', [
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
		$shared = SharedApi::set('media.add', $this->config);
		$shared->router();
		$shared->menu();
		$shared->title();
		$shared->tabs();

		if ($this->config->has('media.add.add')) {
			Title::set('media.add')->removeLink();
		}
	}
}
