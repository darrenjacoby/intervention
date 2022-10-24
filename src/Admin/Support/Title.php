<?php

namespace Sober\Intervention\Admin\Support;

use Sober\Intervention\Admin\Support\Maps;
use Sober\Intervention\Support\Str;

/**
 * Support/Title
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 */
class Title
{
    protected $key;
    protected $filter;

    /**
     * Interface
     *
     * @param string $key
     * @return Sober\Intervention\Admin\Support\Page
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
     * Rename
     *
     * @param string $str
     * @return object $this
     */
    public function rename($str)
    {
        if (!$this->filter) {
            return $this;
        }

        if (!is_string($str)) {
            return $this;
        }

        add_action('admin_head-' . $this->filter, function () use ($str) {
            echo '
                <style>
                    .wrap h1:first-child {font-size: 0; visibility: hidden;}
                    .wrap h1:first-child::after {font-size: 23px; visibility: visible; content: "' . $str . '"}
                </style>
            ';
        });

        return $this;
    }

    /**
     * Remove Link
     *
     * @return object $this
     */
    public function removeLink()
    {
        $filter = $this->filter ? 'admin_head-' . $this->filter : 'admin_head';

        add_action($filter, function () {
            echo '<style>.page-title-action {display: none;}</style>';
        });

        return $this;
    }
}
