<?php

namespace Jacoby\Intervention\Admin\Common\All;

use Jacoby\Intervention\Admin\Support\All\Subsets as SubsetsSupport;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Common/All/Subsets
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'common.all.subsets',
 * ]
 */
class Subsets
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
			'list',
		]);

		$this->config = $compose->get();
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		if ($this->config->get('common.all.subsets')) {
			SubsetsSupport::set('all')->remove(['*.all.subsets']);
		}
	}
}
