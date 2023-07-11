<?php

namespace Jacoby\Intervention\Admin\Common\All;

use Jacoby\Intervention\Admin\Support\All\Search as SearchSupport;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Common/All/Search
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'common.all.search',
 * ]
 */
class Search
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

		$compose = $compose->has('common.all')->add('common.all.', [
			'search',
		]);

		$this->config = $compose->get();
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		if ($this->config->get('common.all.search')) {
			SearchSupport::set('all')->remove(['*.all.search']);
		}
	}
}
