<?php

namespace Sober\Intervention\Admin\Support\All;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;
use Sober\Intervention\Support\Str;

/**
 * Support/All/Subsets
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/views_this-screen-id/
 * @link https://wordpress.stackexchange.com/questions/149143/hide-the-post-count-behind-post-views-remove-all-published-and-trashed-in-cus
 */
class Subsets
{
    protected $key;
    protected $filter;
    protected $config;

    /**
     * Interface
     *
     * @param string $key
     * @return Sober\Intervention\Admin\Support\Subsets
     */
    public static function set($key = false)
    {
        return new self($key, $custom);
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
                'views_edit-post',
                'views_edit-page',
                'views_edit-comments',
                'views_users',
                'views_plugins',
            ],
            'posts.all' => [
                'views_edit-post',
            ],
            'pages.all' => [
                'views_edit-page',
            ],
            'comments.all' => [
                'views_edit-comments',
            ],
            'users.all' => [
                'views_users',
            ],
            'plugins.all' => [
                'views_plugins',
            ],
        ]);

        $this->filter = $filters->get($this->key);
    }

    /**
     * Remove
     *
     * @param array $array
     * @return array
     */
    public function remove($array)
    {
        $group = Arr::normalize($array);
        $group = Composer::set($group)
            ->removeFirstKey()
            ->get();

        foreach ($this->filter as $item) {
            add_filter($item, function ($views) use ($group) {
                foreach ($group->keys()->toArray() as $item) {
                    if (isset($views[$item])) {
                        unset($views[$item]);
                    }
                }

                if ($group->has('counts')) {
                    foreach ($views as $index => $item) {
                        $views[$index] = preg_replace('/ <span class="count">\((.*?)\)<\/span>/', '', $item);
                    }
                }

                if ($group->has('all.subsets')) {
                    $views = [];
                }

                return $views;
            });
        }

        return $this;
    }
}
