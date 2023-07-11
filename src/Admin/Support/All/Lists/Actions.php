<?php

namespace Jacoby\Intervention\Admin\Support\All\Lists;

use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Support/All/Lists/Actions
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/post_row_actions/
 * @link https://developer.wordpress.org/reference/hooks/taxonomy_row_actions/
 * @link https://developer.wordpress.org/reference/hooks/media_row_actions/
 * @link https://developer.wordpress.org/reference/hooks/page_row_actions/
 * @link https://developer.wordpress.org/reference/hooks/comment_row_actions/
 * @link https://developer.wordpress.org/reference/hooks/plugin_action_links/
 * @link https://developer.wordpress.org/reference/hooks/user_row_actions/
 */
class Actions
{
	protected $key;
	protected $filter;

	/**
	 * Interface
	 *
	 * @param string $key
	 * @return Jacoby\Intervention\Admin\Support\All\Lists\Actions
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
				'post_row_actions',
				'category_row_actions',
				'post_tag_row_actions',
				'media_row_actions',
				'page_row_actions',
				'comment_row_actions',
				'plugin_action_links',
				'user_row_actions',
			],
			'posts.all' => [
				'post_row_actions',
			],
			'posts.categories.all' => [
				'category_row_actions',
			],
			'posts.tags.all' => [
				'post_tag_row_actions',
			],
			'media.all' => [
				'media_row_actions',
			],
			'pages.all' => [
				'page_row_actions',
			],
			'comments.all' => [
				'comment_row_actions',
			],
			'plugins.all' => [
				'plugin_action_links',
			],
			'users.all' => [
				'user_row_actions',
			],
		]);

		$this->key = $key;
		$this->filter = $filters->get($this->key);
	}

	/**
	 * Remove
	 *
	 * @link https://developer.wordpress.org/reference/hooks/views_this-screen-id/
	 * @link https://wordpress.stackexchange.com/questions/149143/hide-the-post-count-behind-post-views-remove-all-published-and-trashed-in-cus
	 *
	 * @param array $array
	 * @return object $this
	 */
	public function remove($array)
	{
		if (!$this->filter) {
			return;
		}

		$group = Arr::normalizeTrue($array);
		$group = Composer::set($group)->removeFirstKey()->get();

		foreach ($this->filter as $item) {
			add_filter($item, function ($actions) use ($group) {
				foreach ($group->keys()->toArray() as $item) {
					if (isset($actions[$item])) {
						unset($actions[$item]);
					}
				}

				if ($group->has('all.list.actions') ||
					$group->has('categories.all.list.actions') ||
					$group->has('tags.all.list.actions')) {
					$actions = [];
				}

				return $actions;
			}, 50, 2);
		}

		return $this;
	}
}
