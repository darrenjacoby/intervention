<?php

namespace Sober\Intervention\Admin\Comments;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Comments/All
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/hooks/views_this-screen-id/
 * @link https://developer.wordpress.org/reference/hooks/bulk_actions-this-screen-id/
 * @link https://developer.wordpress.org/reference/hooks/comment_row_actions/
 * @link https://developer.wordpress.org/reference/hooks/manage_screen-id_columns/
 *
 * @param
 * [
 *     'comments.all',
 *     'comments.all' => (string) $route,
 *     'comments.all.title' => (string) $title,
 *     'comments.all.title.[menu, page]' => (string) $title,
 *     'comments.all.tabs',
 *     'comments.all.tabs.[screen-options, help]',
 *     'comments.all.pagination' => (int) $pagination,
 *     'comments.all.search',
 *     'comments.all.subsets',
 *     'comments.all.subsets.[all, mine, pending, approved, spam, trash]',
 *     'comments.all.subsets.counts',
 *     'comments.all.actions',
 *     'comments.all.actions.[bulk, types]',
 *     'comments.all.list',
 *     'comments.all.list.cols',
 *     'comments.all.list.cols.[comment, response, date]',
 *     'comments.all.list.actions',
 *     'comments.all.list.actions.[unapprove, reply, quickedit, edit, spam, trash]',
 *     'comments.all.list.count',
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

        $compose = $compose->has('comments.all.all')->add('comments.all.', [
            'tabs', 'pagination', 'search', 'subsets', 'actions', 'list',
        ]);

        $compose = $compose->has('comments.all.title')->add('comments.all.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('comments.all.tabs')->add('comments.all.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('comments.all.actions')->add('comments.all.actions.', [
            'types', 'bulk',
        ]);

        $compose = $compose->has('comments.all.list')->add('comments.all.list.', [
            'cols', 'actions', 'count',
        ]);

        $compose = $compose->has('comments.all.list.cols')->add('comments.all.list.cols.', [
            'comment', 'response', 'date',
        ]);

        $compose = $compose->has('comments.all.subsets.pending')->add('comments.all.subsets.', [
            'moderated',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $checkbox = $this->config->has('comments.all.actions.bulk') && $this->config->has('comments.all.actions.types');

        $shared = SharedApi::set('comments.all', $this->config);
        $shared->router();
        $shared->title();
        $shared->tabs();
        $shared->pagination();
        $shared->search();
        $shared->subsets();
        $shared->actionBulk();
        $shared->lists($checkbox);

        add_action('admin_head-edit-comments.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('comments.all.actions.types')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#filter-by-comment-type").closest(".actions").css("display", "none")})</script>';
        }
    }
}
