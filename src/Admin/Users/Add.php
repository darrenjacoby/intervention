<?php

namespace Sober\Intervention\Admin\Users;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Users/Add
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'users.add',
 *     'users.add' => (string) $route,
 *     'users.add.title' => (string) $title,
 *     'users.add.title.[menu, page]' => (string) $title,
 *     'users.add.tabs',
 *     'users.add.tabs.[screen-options, help]',
 *     'users.add.user-notification'
 * ]
 */
class Add
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

        $compose = $compose->has('users.add.all')->add('users.add.', [
            'tabs', 'user-notification',
        ]);

        $compose = $compose->has('users.add.title')->add('users.add.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('users.all.tabs')->add('users.add.tabs.', [
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
        $shared = SharedApi::set('users.add', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-user-new.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('users.add.user-notification')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#send_user_notification").closest("tr").css("display", "none");});</script>';
        }
    }
}
