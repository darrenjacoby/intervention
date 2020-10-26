<?php

namespace Sober\Intervention\Application\Support\Taxonomies;

use Sober\Intervention\Support\Arr;

/**
 * Support/Taxonomies/Remove
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/unregister_taxonomy/
 */
class Remove
{
    protected $taxonomy;

    /**
     * Interface
     *
     * @param string $taxonomy
     * @return Sober\Intervention\Application\Support\Taxonomy\Register
     */
    public static function set($taxonomy = 'category')
    {
        return new self($taxonomy);
    }

    /**
     * Initialize
     *
     * @param string $taxonomy
     */
    public function __construct($taxonomy = 'category')
    {
        $this->taxonomy = $taxonomy;
        $this->remove();
    }

    /**
     * Remove
     *
     * @param string $this->taxonomy
     */
    public function remove()
    {
        if (!taxonomy_exists($this->taxonomy)) {
            return;
        }

        if (Arr::collect(['category', 'post_tag'])->contains($this->taxonomy)) {
            unset($GLOBALS['wp_taxonomies'][$this->taxonomy]);
        } else {
            unregister_taxonomy($this->taxonomy);
        }
    }
}
