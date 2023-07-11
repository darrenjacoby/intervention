<?php

namespace Jacoby\Intervention\Admin\Support\All;

use Jacoby\Intervention\Support\Config;
use Jacoby\Intervention\Support\Str;

/**
 * Support/All/Search
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 */
class Search
{
	protected $key;
	protected $filter;

	/**
	 * Interface
	 *
	 * @param string $key
	 * @return Jacoby\Intervention\Admin\Support\All\Search
	 */
	public static function set($key = false)
	{
		return new self($key);
	}

	/**
	 * Initialize
	 *
	 * @param string $key
	 */
	public function __construct($key = false)
	{
		$this->key = $key;
		$this->filter = Config::get('admin/pagenow')->get($this->key);
		// Remove anything after `?`
		$this->filter = Str::explode('?', $this->filter)[0];
	}

	/**
	 * Remove
	 *
	 * @return object $this
	 */
	public function remove()
	{
		$filter = $this->filter ? 'admin_head-' . $this->filter : 'admin_head';

		add_action($filter, function () {
			echo '<style>.search-form, .search-box {display: none !important;}</style>';
		});

		return $this;
	}
}
