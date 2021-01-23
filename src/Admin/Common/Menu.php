<?php

namespace Sober\Intervention\Admin\Common;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Common/Menu
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'common.menu',
 *     'common.menu.collapse',
 *     'common.menu.icons',
 *     'common.menu.nags',
 * ]
 */
class Menu
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('common.menu')->add('common.menu.', [
            'collapse', 'icons', 'nags',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('admin_head', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('common.menu.collapse')) {
            echo '<style>#collapse-menu {display: none; visibility: hidden;}</style>';
        }

        if ($this->config->has('common.menu.icons')) {
            echo '
                <style>
                    body:not(.folded) #adminmenu div.wp-menu-image {width:12px;} 
                    body:not(.folded) #adminmenu div.wp-menu-image:before {content:""!important;} 
                    body:not(.folded) #adminmenu .collapse-button-icon {display: none;} 
                    body:not(.folded) #collapse-button .collapse-button-label {padding-left:12px;}
                    body:not(.folded) #adminmenu div.wp-menu-name {padding-left: 12px;}
                </style>';
        }

        if ($this->config->has('common.menu.nags')) {
            echo '<style>#adminmenu div.wp-menu-name span {display:none!important;}</style>';
        }
    }
}
