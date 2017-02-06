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
        add_action('admin_head', [$this, 'updatePagination']);
    }

    public function updatePagination()
    {
        foreach ($this->users as $user) {
            $this->key = 'edit_post_per_page';
            update_user_meta($user->ID, $this->key, $this->config);
        }
        foreach ($this->users as $user) {
            $this->key = 'edit_page_per_page';
            update_user_meta($user->ID, $this->key, $this->config);
        }
        foreach ($this->users as $user) {
            $this->key = 'edit_comments_per_page';
            update_user_meta($user->ID, $this->key, $this->config);
        }
    }
}
