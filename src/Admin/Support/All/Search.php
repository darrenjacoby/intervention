<?php

namespace Sober\Intervention\Admin\Support\All;

use Sober\Intervention\Admin\Support\Maps;
use Sober\Intervention\Support\Str;

/**
 * Support/All/Search
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 */
class Search
{
    protected $key;
    protected $filter;

    /**
     * Interface
     *
     * @param string $key
     * @return Sober\Intervention\Admin\Support\All\Search
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
        $this->filter = Maps::set('screens')->get($this->key);
        // Remove anything after `?`
        $this->filter = Str::explode('?', $this->filter)[0];
    }

    /**
     * Remove
     *
     * @return object $this
     */
    public function remove()
    {
        $filter = $this->filter ? 'admin_head-' . $this->filter : 'admin_head';

        add_action($filter, function () {
            echo '<style>.search-form, .search-box {display: none !important;}</style>';
        });

        return $this;
    }
}
