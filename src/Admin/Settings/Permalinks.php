<?php

namespace Sober\Intervention\Admin\Settings;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Settings/Permalinks
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'settings.permalinks',
 *     'settings.permalinks' => (string) $route,
 *     'settings.permalinks.title' => (string) $title,
 *     'settings.permalinks.title.[menu, page]' => (string) $title,
 *     'settings.permalinks.tabs',
 *     'settings.permalinks.tabs.[screen-options, help]',
 *     'settings.permalinks.common',
 *     'settings.permalinks.optional',
 *     'settings.permalinks.optional.[category, tag]',
 * ]
 */
class Permalinks
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

        $compose = $compose->has('settings.permalinks.all')->add('settings.permalinks.', [
            'tabs', 'common', 'optional',
        ]);

        $compose = $compose->has('settings.permalinks.title')->add('settings.permalinks.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('settings.permalinks.tabs')->add('settings.permalinks.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('settings.permalinks.optional')->add('settings.permalinks.optional.', [
            'category', 'tag',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('settings.permalinks', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-options-permalink.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('settings.permalinks.common')) {
            echo
                '<script>
                jQuery(document).ready(function() {
                    jQuery("#permalink_structure").parents("table").prev().remove();
                    jQuery("#permalink_structure").parents("table").remove();
                });
            </script>';
        }

        if ($this->config->has('settings.permalinks.optional')) {
            echo
                '<script>
                jQuery(document).ready(function() {
                    jQuery("#category_base").parents("table").prev().prev().remove();
                    jQuery("#category_base").parents("table").prev().remove();
                    jQuery("#category_base").parents("table").remove();
                });
            </script>';
        }

        if ($this->config->has('settings.permalinks.optional.category')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#category_base").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.permalinks.optional.tag')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#tag_base").parents("tr").remove()});</script>';
        }
    }
}
