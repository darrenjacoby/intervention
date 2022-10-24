<?php

namespace Sober\Intervention\Admin\Support\All\Lists;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;
use Sober\Intervention\Support\Str;

/**
 * Support/All/Lists/Columns
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/manage_screen-id_columns/
 */
class Columns
{
    protected $key;
    protected $filter;

    /**
     * Interface
     *
     * @param string $key
     * @return Sober\Intervention\Admin\Support\Menu
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
        $filters = Arr::collect([
            'all' => [
                'manage_edit-post_columns',
                'manage_edit-category_columns',
                'manage_edit-post_tag_columns',
                'manage_edit-page_columns',
                'manage_upload_columns',
                'manage_edit-comments_columns',
                'manage_plugins_columns',
                'manage_users_columns',
            ],
            'posts.all' => [
                'manage_edit-post_columns',
            ],
            'posts.categories.all' => [
                'manage_edit-category_columns',
            ],
            'posts.tags.all' => [
                'manage_edit-post_tag_columns',
            ],
            'pages.all' => [
                'manage_edit-page_columns',
            ],
            'media.all' => [
                'manage_upload_columns',
            ],
            'comments.all' => [
                'manage_edit-comments_columns',
            ],
            'plugins.all' => [
                'manage_plugins_columns',
            ],
            'users.all' => [
                'manage_users_columns',
            ],
        ]);

        $this->key = $key;
        $this->filter = $filters->get($this->key);
    }

    /**
     * Remove
     *
     * @param array $array
     * @return object $this
     */
    public function remove($array, $checkbox = false)
    {
        if (!$this->filter) {
            return;
        }

        $group = Arr::normalizeTrue($array);
        $group = Composer::set($group)->removeFirstKey()->get();

        foreach ($this->filter as $filter) {
            add_filter($filter, function ($columns) use ($group, $checkbox) {
                foreach ($group->keys()->toArray() as $item) {
                    if (isset($columns[$item])) {
                        unset($columns[$item]);
                    }
                }

                if ($group->has('all.list.cols')) {
                    $removals = array_splice($columns, 2);
                    foreach ($removals as $k => $v) {
                        unset($columns[$k]);
                    }
                }

                if ($checkbox) {
                    unset($columns['cb']);
                }

                return $columns;
            }, 10, 2);
        }

        return $this;
    }
}
