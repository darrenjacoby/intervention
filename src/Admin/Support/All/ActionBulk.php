<?php

namespace Sober\Intervention\Admin\Support\All;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Str;

/**
 * Support/All/ActionBulk
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/bulk_actions-this-screen-id/
 */
class ActionBulk
{
    protected $key;
    protected $filter;

    /**
     * Interface
     *
     * @param string $key
     * @return Sober\Intervention\Admin\Support\All\ActionBulk
     */
    public static function set($key = false)
    {
        return new self($key);
    }

    /**
     * Initialize
     *
     * @param string $key
     */
    public function __construct($key = false)
    {
        $this->key = $key;

        $filters = Arr::collect([
            'all' => [
                'bulk_actions-edit-post',
                'bulk_actions-edit-category',
                'bulk_actions-edit-post_tag',
                'bulk_actions-upload',
                'bulk_actions-edit-page',
                'bulk_actions-edit-comments',
                'bulk_actions-plugins',
                'bulk_actions-users',
            ],
            'posts.all' => [
                'bulk_actions-edit-post',
            ],
            'posts.categories.all' => [
                'bulk_actions-edit-category',
            ],
            'posts.tags.all' => [
                'bulk_actions-edit-post_tag',
            ],
            'pages.all' => [
                'bulk_actions-edit-page',
            ],
            'media.all' => [
                'bulk_actions-upload',
            ],
            'comments.all' => [
                'bulk_actions-edit-comments',
            ],
            'plugins.all' => [
                'bulk_actions-plugins',
            ],
            'users.all' => [
                'bulk_actions-users',
            ],
        ]);

        $this->filter = $filters->get($this->key);
    }

    /**
     * Remove
     *
     * @return object $this
     */
    public function remove()
    {
        if (!$this->filter) {
            return;
        }

        foreach ($this->filter as $item) {
            add_filter($item, function ($actions) {
                return [];
            });
        }

        return $this;
    }
}
