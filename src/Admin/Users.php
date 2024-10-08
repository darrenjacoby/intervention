<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Admin\Support\Menu;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Users
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'users',
 *     'users' => (string) $route,
 *     'users.title' => (string) $title,
 *     'users.icon' => (string) $dashicon,
 * ];
 */
class Users
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

        $compose = $compose->has('users.title')->add('users.title.', [
            'menu',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('users', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->icon();

        if ($this->config->get('users') === true) {
            Menu::set('profile')->remove();
        }
    }
}
