<?php

namespace Jacoby\Intervention\Admin\Common;

use Jacoby\Intervention\Admin\Support\Tabs as TabsSupport;
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
 *     'common.tabs',
 *     'common.tabs.screen-options',
 *     'common.tabs.screen-options.[pagination, view-mode]',
 *     'common.tabs.help',
 *     'common.tabs.help.[
 *         overview,
 *         navigation,
 *         layout,
 *         content,
 *         screen-content,
 *         available-actions,
 *         bulk-actions,
 *         adding-terms,
 *         managing-pages,
 *         available-actions,
 *         attaching-files,
 *         sidebar,
 *         moderating-comments,
 *         adding-themes,
 *         preview-customize,
 *         removing-reusing,
 *         missing-widgets,
 *         custom-html-widget,
 *         menu-management,
 *         editing-menus,
 *         troubleshooting,
 *         adding-plugins,
 *         user-roles,
 *         converter,
 *         post-email,
 *         update-services,
 *         visibility,
 *         permalink-settings,
 *         custom-structures,
 *     ]',
 * ]
 */
class Tabs
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

		$compose = $compose->has('common.tabs')->add('common.tabs.', [
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
		$group = Composer::set($this->config)->groupKeys('common.tabs')->get();
		TabsSupport::set('all')->remove($group->toArray());
	}
}
