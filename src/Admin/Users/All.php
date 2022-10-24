<?php

namespace Sober\Intervention\Admin\Users;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Admin\Support\Title;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Users/All
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'users.all',
 *     'users.all' => (string) $route,
 *     'users.all.title' => (string) $title,
 *     'users.all.title.[menu, page]' => (string) $title,
 *     'users.all.title-link',
 *     'users.all.tabs',
 *     'users.all.tabs.[screen-options, help]',
 *     'users.all.pagination' => (int) $pagination,
 *     'users.all.search',
 *     'users.all.subsets',
 *     'users.all.subsets.[administrator, editor, author, contributor, subscriber]',
 *     'users.all.subsets.counts',
 *     'users.all.actions',
 *     'users.all.actions.bulk',
 *     'users.all.list',
 *     'users.all.list.[cols, actions, count]',
 *     'users.all.list.cols',
 *     'users.all.list.cols.[name, email, role, posts]',
 *     'users.all.list.actions',
 *     'users.all.list.actions.[edit, view, delete]',
 *     'users.all.list.count',
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

        $compose = $compose->has('users.all.all')->add('users.all.', [
            'title-link', 'tabs', 'pagination', 'search', 'subsets', 'actions', 'list',
        ]);

        $compose = $compose->has('users.all.title')->add('users.all.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('users.all.tabs')->add('users.all.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('users.all.actions')->add('users.all.actions.', [
            'change-role', 'bulk',
        ]);

        $compose = $compose->has('users.all.list')->add('users.all.list.', [
            'cols', 'actions', 'count',
        ]);

        $compose = $compose->has('users.all.list.cols')->add('users.all.list.cols.', [
            'name', 'email', 'role', 'posts',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $checkbox = $this->config->has('users.all.actions.bulk') && $this->config->has('users.all.actions.change-role');

        $shared = SharedApi::set('users.all', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();
        $shared->pagination();
        $shared->search();
        $shared->subsets();
        $shared->actionBulk();
        $shared->lists($checkbox);

        add_action('admin_head-users.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('users.all.actions.change-role')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#new_role, #new_role2").closest(".actions").css("display", "none")})</script>';
        }
    }
}
