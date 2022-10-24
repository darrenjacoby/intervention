<?php

namespace Sober\Intervention\Admin\Support;

use Sober\Intervention\Support\Arr;

/**
 * Support/PostComponents
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 */
class PostComponents
{
    protected $posttypes;

    /**
     * Interface
     *
     * @param array $posttypes
     * @return Sober\Intervention\Admin\Support\PostComponents
     */
    public static function set($posttypes = false)
    {
        return new self($posttypes);
    }

    /**
     * Initialize
     *
     * @param array $posttypes
     */
    public function __construct($posttypes = false)
    {
        $this->posttypes = $posttypes;
    }

    /**
     * Remove
     *
     * @param array $array
     * @return object $this
     */
    public function remove($array)
    {
        $group = Arr::normalizeTrue($array);

        add_action('admin_init', function () use ($group) {
            foreach ($this->posttypes as $posttype) {
                if ($group->has('editor')) {
                    remove_post_type_support($posttype, 'editor');
                }

                if ($group->has('author')) {
                    remove_post_type_support($posttype, 'author');
                }

                if ($group->has('excerpt')) {
                    remove_post_type_support($posttype, 'excerpt');
                }

                if ($group->has('trackbacks')) {
                    remove_post_type_support($posttype, 'trackbacks');
                }

                if ($group->has('custom-fields')) {
                    remove_post_type_support($posttype, 'custom-fields');
                }

                if ($group->has('discussion')) {
                    remove_post_type_support($posttype, 'comments');
                }

                if ($group->has('link') || $group->has('slug')) {
                    remove_post_type_support($posttype, 'slug');
                    remove_meta_box('slugdiv', $posttype, 'normal');
                }

                if ($group->has('featured-image')) {
                    remove_post_type_support($posttype, 'thumbnail');
                }

                if ($group->has('categories')) {
                    remove_meta_box('categorydiv', $posttype, 'normal');
                }

                if ($group->has('tags')) {
                    remove_meta_box('tagsdiv-post_tag', $posttype, 'normal');
                }

                if ($group->has('sticky')) {
                    add_action('admin_head', function () {
                        echo '<style>#sticky-span, .components-panel__row:nth-last-child(2) {display:none !important}</style>';
                    });
                }

                if ($group->has('attributes')) {
                    remove_post_type_support($posttype, 'page-attributes');
                }

                if ($group->has('revisions')) {
                    remove_post_type_support($posttype, 'revisions');
                }

                if ($group->has('format')) {
                    remove_meta_box('formatdiv', $posttype, 'normal');
                }
            }
        });

        return $this;
    }
}
