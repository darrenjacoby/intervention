<?php

namespace Sober\Intervention\Application\Support\Posttypes;

use Sober\Intervention\Admin;
use Sober\Intervention\Application;
use Sober\Intervention\Support\Arr;

/**
 * Support/Posttypes/Remove
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/unregister_post_type/
 * @link https://developer.wordpress.org/reference/hooks/wp_loaded/
 */
class Remove
{
    protected $posttype;

    /**
     * Interface
     *
     * @param string $posttype
     * @return Sober\Intervention\Application\Support\Posttypes\Register
     */
    public static function set($posttype = 'post')
    {
        return new self($posttype);
    }

    /**
     * Initialize
     *
     * @param string $posttype
     */
    public function __construct($posttype = 'post')
    {
        $this->posttype = $posttype;
        $this->remove();
    }

    /**
     * Remove
     *
     * Remove the post type.
     *
     * @param string $this->posttype
     */
    public function remove()
    {
        if (Arr::collect(['post', 'page'])->contains($this->posttype)) {
            $this->removeDefault();
        } elseif (Arr::collect(['attachment'])->contains($this->posttype)) {
            new RemoveAttachment();
        } else {
            add_action('wp_loaded', function() {
                unregister_post_type($this->posttype);
            });
        }
    }

    /**
     * Remove Default
     *
     * Remove default post types through unsetting globals, remove admin components and pages.
     *
     * @param string $this->posttype
     */
    public function removeDefault()
    {
        if (!$GLOBALS['wp_post_types'][$this->posttype]) {
            return;
        }

        /**
         * Unsets
         *
         * Remove from menu and then global wp_post_types and wp_post_type_features.
         */
        $menu_position = $GLOBALS['wp_post_types'][$this->posttype]->menu_position;
        unset($GLOBALS['menu'][$menu_position]);
        unset($GLOBALS['wp_post_types'][$this->posttype]);
        unset($GLOBALS['_wp_post_type_features'][$this->posttype]);

        /**
         * Admin
         *
         * Remove admin components and pages for post type post or page.
         */
        if ($this->posttype === 'post') {
            Application::set('reading', ['front-page.posts' => 'page']);
            Admin::set('settings.writing', true);
            Admin::set('settings.reading', ['posts-per-page', 'posts-per-rss', 'rss-excerpt']);
        }

        if ($this->posttype === 'page') {
            Application::set('reading', ['front-page' => 'post']);
            Admin::set('settings.privacy', true);
        }
    }
}
