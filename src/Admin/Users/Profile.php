<?php

namespace Sober\Intervention\Admin\Users;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Users/Profile
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/hooks/editable_roles/
 *
 * @param
 * [
 *     'users.profile',
 *     'users.profile' => (string) $route,
 *     'users.profile.title' => (string) $title,
 *     'users.profile.title.[menu, page]' => (string) $title,
 *     'users.profile.tabs',
 *     'users.profile.tabs.[screen-options, help]',
 *     'users.profile.options',
 *     'users.profile.options.[title, editor, syntax, schemes, shortcuts, toolbar]',
 *     'users.profile.name',
 *     'users.profile.name.[first, last, nickname, display]',
 *     'users.profile.contact',
 *     'users.profile.contact.web',
 *     'users.profile.about',
 *     'users.profile.about.[bio, picture]',
 *     'users.profile.role',
 *     'users.profile.role.[
 *         all-not-administrator,
 *         all,
 *         wc,
 *         administrator,
 *         author,
 *         editor,
 *         contributor,
 *         subscriber,
 *         customer,
 *         shop-manager
 *     ]',
 * ]
 */
class Profile
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

        $compose = $compose->has('users.profile.all')->add('users.profile.', [
            'tabs', 'options', 'name', 'contact', 'about', 'role',
        ]);

        $compose = $compose->has('users.profile.title')->add('users.profile.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('users.profile.tabs')->add('users.profile.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('users.profile.options')->add('users.profile.options.', [
            'title', 'editor', 'syntax', 'schemes', 'shortcuts', 'toolbar',
        ]);

        $compose = $compose->has('users.profile.name')->add('users.profile.name.', [
            'first', 'last', 'nickname', 'display',
        ]);

        $compose = $compose->has('users.profile.contact')->add('users.profile.contact.', [
            'web',
        ]);

        $compose = $compose->has('users.profile.about')->add('users.profile.about.', [
            'bio', 'picture',
        ]);

        $compose = $compose->has('users.profile.role')->add('users.profile.role.', [
            'author', 'contributor', 'subscriber',
        ]);

        $compose = $compose->has('users.profile.role.all-not-administrator')->add('users.profile.role.', [
            'author', 'editor', 'contributor', 'subscriber',
        ]);

        $compose = $compose->has('users.profile.role.all')->add('users.profile.role.', [
            'administrator', 'author', 'editor', 'contributor', 'subscriber', 'shop-mananger', 'customer',
        ]);

        $compose = $compose->has('users.profile.role.wc')->add('users.profile.role.', [
            'shop-mananger', 'customer',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('users.profile', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-user-new.php', [$this, 'head']);
        add_action('admin_head-user-edit.php', [$this, 'head']);
        add_action('admin_head-profile.php', [$this, 'head']);
        add_filter('editable_roles', [$this, 'removeRoles']);
    }

    /**
     * Head
     */
    public function head()
    {
        // Options
        if ($this->config->has('users.profile.options.title')) {
            echo '<style>#your-profile h2:first-of-type {display: none;}</style>';
        }

        if ($this->config->has('users.profile.options.editor')) {
            echo '<style>#your-profile tr.user-rich-editing-wrap {display: none;}</style>';
        }

        if ($this->config->has('users.profile.options.syntax')) {
            echo '<style>#your-profile tr.user-syntax-highlighting-wrap {display: none;}</style>';
        }

        if ($this->config->has('users.profile.options.schemes')) {
            remove_action('admin_color_scheme_picker', 'admin_color_scheme_picker');
        }

        if ($this->config->has('users.profile.options.shortcuts')) {
            echo '<style>#your-profile tr.user-comment-shortcuts-wrap {display: none;}</style>';
        }

        if ($this->config->has('users.profile.options.toolbar')) {
            echo '<style>#your-profile tr.user-admin-bar-front-wrap {display: none;}</style>';
        }

        // Names
        if ($this->config->has('users.profile.name.first')) {
            echo '<style>#your-profile tr.user-first-name-wrap {display: none};</style>';
            echo '<style>#createuser .form-table .form-field:nth-child(3) {display:none};</style>';
        }

        if ($this->config->has('users.profile.name.last')) {
            echo '<style>#your-profile tr.user-last-name-wrap {display: none};</style>';
            echo '<style>#createuser .form-table .form-field:nth-child(4) {display:none};</style>';
        }

        if ($this->config->has('users.profile.name.nickname')) {
            echo '<style>#your-profile tr.user-nickname-wrap {display: none};</style>';
        }

        if ($this->config->has('users.profile.name.display')) {
            echo '<style>#your-profile tr.user-display-name-wrap {display: none};</style>';
        }

        // Contact
        if ($this->config->has('users.profile.contact.web')) {
            echo '<style>#your-profile tr.user-url-wrap {display: none};</style>';
            echo '<style>#createuser .form-table .form-field:nth-child(5) {display:none};</style>';
        }

        // About
        if ($this->config->has('users.profile.about')) {
            echo '<style>#your-profile h2:nth-of-type(4) {display: none};</style>';
            echo '<style>#your-profile .form-table:nth-of-type(4) {display: none};</style>';
        }

        if ($this->config->has('users.profile.about.bio')) {
            echo '<style>#your-profile tr.user-description-wrap {display: none};</style>';
        }

        if ($this->config->has('users.profile.about.picture')) {
            echo '<style>#your-profile tr.user-profile-picture {display: none};</style>';
        }

        /**
         * Account Management
         *
         * Not allowed to remove required WordPress fields reset-password and user-sessions for safety
         */
    }

    /**
     * Remove Roles
     *
     * @param array $roles
     * @return array
     */
    public function removeRoles($roles)
    {
        $roles_arr = Composer::set($this->config)
            ->group('users.profile.role')
            ->get()
            ->toArray();

        foreach ($roles_arr as $item) {
            if (isset($roles[$item])) {
                unset($roles[$item]);
            }
        }

        if ($this->config->has('users.profile.role')) {
            $roles = [];
        }

        return $roles;
    }
}
