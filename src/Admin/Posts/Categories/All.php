<?php

namespace Sober\Intervention\Admin\Posts\Categories;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\Menu;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Posts/Categories/All
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'posts.categories.all',
 *     'posts.categories.all' => (string) $route,
 *     'posts.categories.all.title' => (string) $title,
 *     'posts.categories.all.title.[menu, page]' => (string) $title,
 *     'posts.categories.all.tabs',
 *     'posts.categories.all.tabs.[screen-options, help]',
 *     'posts.categories.all.search',
 *     'posts.categories.all.actions',
 *     'posts.categories.all.actions.bulk',
 *     'posts.categories.all.list',
 *     'posts.categories.all.list.cols',
 *     'posts.categories.all.list.cols.[description, slug, count]',
 *     'posts.categories.all.list.actions',
 *     'posts.categories.all.list.actions.[edit, quick-edit, trash, view]',
 *     'posts.categories.all.list.count',
 *     'posts.categories.all.notes',
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
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('posts.categories.all.all')->add('posts.categories.all.', [
            'tabs', 'search', 'actions', 'list', 'notes',
        ]);

        $compose = $compose->has('posts.categories.all.title')->add('posts.categories.all.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('posts.categories.all.tabs')->add('posts.categories.all.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('posts.categories.all.actions')->add('posts.categories.all.actions.', [
            'bulk',
        ]);

        $compose = $compose->has('posts.categories.all.list')->add('posts.categories.all.list.', [
            'cols', 'actions', 'count',
        ]);

        $compose = $compose->has('posts.categories.all.list.cols')->add('posts.categories.all.list.cols.', [
            'description', 'slug', 'count',
        ]);

        $compose = $compose->has('posts.categories.all.list.cols.count')->add('posts.categories.all.list.cols.', [
            'posts',
        ]);

        $compose = $compose->has('posts.categories.all.list.actions.quick-edit')->add('posts.categories.all.list.actions.', [
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
        $shared = SharedApi::set('posts.categories.all', $this->config);
        $shared->router();
        $shared->title();

        if (!isset($_GET['taxonomy'])) {
            return;
        }

        if ($_GET['taxonomy'] !== 'category') {
            return;
        }

        $checkbox = $this->config->has('posts.categories.all.actions') || $this->config->has('posts.categories.all.actions.bulk');

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
        if ($this->config->has('posts.categories.all.notes')) {
            echo '<style>.edit-tags-php .edit-term-notes {display: none;}</style>';
        }
    }
}
