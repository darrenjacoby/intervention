<?php

namespace Sober\Intervention\Admin\Support;

use Sober\Intervention\Support\Config;
use Sober\Intervention\Support\Str;

/**
 * Support/Menu
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_menu/
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 */
class Menu
{
    protected $key;
    protected $page;
    protected $subpage;
    protected $position;

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
        $this->key = $key;

        /**
         * Eg: dashboard or dashboard.home
         */
        $this->position = Config::get('admin/menu-positions')
            ->get($this->key);

        $this->page = Config::get('admin/pagenow')
            ->get(Str::explode('.', $this->key)->first());

        $this->subpage = Config::get('admin/pagenow')
            ->get($this->key);
    }

    /**
     * Rename
     *
     * @param string $str
     * @return object $this
     */
    public function rename($str)
    {
        if (!is_string($str)) {
            return $this;
        }

        if (wp_doing_ajax()) {
            return;
        }

        add_action('admin_menu', function () use ($str) {
            if (Str::contains($this->key, '.')) {
                $GLOBALS['submenu'][$this->page][$this->position][0] = $str;
            } else {
                $GLOBALS['menu'][$this->position][0] = $str;
            }
        });

        return $this;
    }

    /**
     * Icon
     *
     * @param string $icon
     * @return object $this
     */
    public function icon($icon)
    {
        if (wp_doing_ajax()) {
            return;
        }

        add_action('admin_menu', function () use ($icon) {
            if ($this->position) {
                // Append 'dashicons-' prefix if it has not been included
                if (!Str::contains($icon, 'dashicons-')) {
                    $icon = 'dashicons-' . $icon;
                }
                $GLOBALS['menu'][$this->position][6] = $icon;
            }
        });

        return $this;
    }

    /**
     * Remove
     *
     * @return object $this
     */
    public function remove()
    {
        add_action('admin_menu', function () {
            // customize.php exception for removing menu items
            if ($this->subpage === 'customize.php') {
                $this->subpage = 'customize.php?return=' . urlencode($_SERVER['REQUEST_URI']);
            }

            if (Str::contains($this->key, '.')) {
                remove_submenu_page($this->page, $this->subpage);
            } else {
                remove_menu_page($this->page);
            }
        });

        return $this;
    }
}
