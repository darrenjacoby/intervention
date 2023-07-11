<?php

namespace Jacoby\Intervention\Admin\Posts\Tags;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Admin\Support\Menu;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Posts/Tags/All
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'posts.tags.all',
 *     'posts.tags.all' => (string) $route,
 *     'posts.tags.all.title' => (string) $title,
 *     'posts.tags.all.title.[menu, page]' => (string) $title,
 *     'posts.tags.all.tabs',
 *     'posts.tags.all.tabs.[screen-options, help]',
 *     'posts.tags.all.search',
 *     'posts.tags.all.actions',
 *     'posts.tags.all.actions.bulk',
 *     'posts.tags.all.list',
 *     'posts.tags.all.list.cols',
 *     'posts.tags.all.list.cols.[description, slug, count]',
 *     'posts.tags.all.list.actions',
 *     'posts.tags.all.list.actions.[edit, quick-edit, trash, view]',
 *     'posts.tags.all.list.count',
 *     'posts.tags.all.notes',
 * ]
 */
class All
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

		$compose = $compose->has('posts.tags.all.all')->add('posts.tags.all.', [
			'tabs', 'search', 'actions', 'list', 'notes',
		]);

		$compose = $compose->has('posts.tags.all.title')->add('posts.tags.all.title.', [
			'menu', 'page',
		]);

		$compose = $compose->has('posts.tags.all.tabs')->add('posts.tags.all.tabs.', [
			'screen-options', 'help',
		]);

		$compose = $compose->has('posts.tags.all.actions')->add('posts.tags.all.actions.', [
			'bulk',
		]);

		$compose = $compose->has('posts.tags.all.list')->add('posts.tags.all.list.', [
			'cols', 'actions', 'count',
		]);

		$compose = $compose->has('posts.tags.all.list.cols')->add('posts.tags.all.list.cols.', [
			'description', 'slug', 'count',
		]);

		$compose = $compose->has('posts.tags.all.list.cols.count')->add('posts.tags.all.list.cols.', [
			'posts',
		]);

		$compose = $compose->has('posts.tags.all.list.actions.quick-edit')->add('posts.tags.all.list.actions.', [
			'inline hide-if-no-js',
		]);

		$this->config = $compose->get();
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		// Required to run before $shared
		$shared = SharedApi::set('posts.tags.all', $this->config);
		$shared->router();
		$shared->menu();

		if (!isset($_GET['taxonomy'])) {
			return;
		}

		if ($_GET['taxonomy'] !== 'post_tag') {
			return;
		}

		$checkbox = $this->config->has('posts.tags.all.actions') || $this->config->has('posts.tags.all.actions.bulk');

		$shared->title();
		$shared->tabs();
		$shared->pagination();
		$shared->search();
		$shared->subsets();
		$shared->actionBulk();
		$shared->lists($checkbox);

		add_action('admin_head-edit-tags.php', [$this, 'head']);
	}

	/**
	 * Head
	 */
	public function head()
	{
		if ($this->config->has('posts.tags.all.notes')) {
			echo '<style>.edit-tags-php .edit-term-notes {display: none;}</style>';
		}
	}
}
