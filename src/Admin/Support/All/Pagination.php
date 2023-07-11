<?php

namespace Jacoby\Intervention\Admin\Support\All;

use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Str;

/**
 * Support/All/Pagination
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/get_user_option_option/
 * @link https://developer.wordpress.org/reference/hooks/current_screen/
 */
class Pagination
{
	protected $key;
	protected $filter;

	/**
	 * Interface
	 *
	 * @param string $key
	 * @return Jacoby\Intervention\Admin\Support\All\Pagination
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
		$filters = Arr::collect([
			'all' => [
				'get_user_option_edit_post_per_page',
				'get_user_option_upload_per_page',
				'get_user_option_edit_page_per_page',
				'get_user_option_edit_comments_per_page',
				'get_user_option_users_per_page',
				'get_user_option_plugins_per_page',
			],
			'posts.all' => [
				'get_user_option_edit_post_per_page',
			],
			'pages.all' => [
				'get_user_option_edit_page_per_page',
			],
			'media.all' => [
				'get_user_option_upload_per_page',
			],
			'comments.all' => [
				'get_user_option_edit_comments_per_page',
			],
			'users.all' => [
				'get_user_option_users_per_page',
			],
			'plugins.all' => [
				'get_user_option_plugins_per_page',
			],
		]);

		$this->key = $key;
		$this->filter = $filters->get($this->key);
	}

	/**
	 * To
	 *
	 * @link https://developer.wordpress.org/reference/hooks/current_screen/
	 *
	 * @param int $int
	 * @return object $this
	 */
	public function to($int)
	{
		add_action('current_screen', function () use ($int) {
			$screen = get_current_screen();

			if (!$screen) {
				return;
			}

			$pagination = ($int === true) ? 20 : $int;

			foreach ($this->filter as $item) {
				add_filter($item, function ($result) use ($pagination) {
					return $pagination;
				});
			}
		});

		return $this;
	}
}
