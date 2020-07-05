<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Utils;

/**
 * Module: update-pagination
 *
 * Hooks into admin_menu to change pagination for posts, pages and comments.
 *
 * @example intervention('update-pagination', $amount(integer));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class UpdatePagination extends Instance
{
    use Utils;

    protected $users;
    protected $key;

    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->setDefaultConfig(40);
        $this->config = $this->escArray($this->config);
        $this->users = get_users();
        return $this;
    }

    protected function hook()
    {
        add_action('current_screen', [$this, 'setPaginationFilter']);
    }

    public function setPaginationFilter()
    {
        $screen = get_current_screen();
        $filter = false;

        if ($screen->id == 'upload') {
            $filter = "get_user_option_upload_per_page";
        } elseif ($screen->id == 'edit-comments') {
            $filter = "get_user_option_edit_comments_per_page";
        } elseif ($screen->taxonomy != '') {
            $filter = "get_user_option_edit_{$screen->taxonomy}_per_page";
        } elseif ($screen->post_type != '') {
            $filter = "get_user_option_edit_{$screen->post_type}_per_page";
        }

        if ($filter) {
            add_filter($filter, [$this, 'updatePagination']);
        }
    }

    public function updatePagination($result)
    {
        return $result ?: $this->config;
    }
}
