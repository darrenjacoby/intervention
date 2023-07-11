<?php

namespace Jacoby\Intervention\Admin\Common;

use Jacoby\Intervention\Admin\Support\Title as TitleSupport;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Common/Tabs
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'common.title-link',
 * ]
 */
class TitleLink
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

		$compose = $compose->has('common.title')->add('common.title.', [
			'link',
		]);

		$this->config = $compose->get();
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		if ($this->config->has('common.title-link')) {
			TitleSupport::set('all')->removeLink();
		}
	}
}
