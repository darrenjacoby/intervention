<?php

namespace Sober\Intervention\Admin\Appearance;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Appearance/Menus
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'appearance.menus',
 *     'appearance.menus' => (string) $route,
 *     'appearance.menus.title' => (string) $title,
 *     'appearance.menus.title.[menu, page]' => (string) $title,
 *     'appearance.menus.title-link',
 *     'appearance.menus.tabs',
 *     'appearance.menus.tabs.[screen-options, help]',
 *     'appearance.menus.nag',
 *     'appearance.menus.add',
 *     'appearance.menus.add.[custom, post, page, category, tag]',
 *     'appearance.menus.item',
 *     'appearance.menus.item.[target, title, classes, xfn, description, remove]',
 *     'appearance.menus.settings',
 *     'appearance.menus.settings.[auto-add, location]',
 *     'appearance.menus.delete',
 *     'appearance.menus.max-depth' => (int) $depth
 *     'appearance.menus.max-depth.$name' => (int) $depth
 * ]
 */
class Menus
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('appearance.menus.all')->add('appearance.menus.', [
            'title-link', 'preview', 'tabs', 'nag', 'item', 'settings', 'delete',
        ]);

        $compose = $compose->has('appearance.menus.title')->add('appearance.menus.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('appearance.menus.tabs')->add('appearance.menus.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('appearance.menus.add')->add('appearance.menus.add.', [
            'custom', 'post', 'page', 'category', 'tag',
        ]);

        $compose = $compose->has('appearance.menus.item')->add('appearance.menus.item.', [
            'target', 'title', 'classes', 'xfn', 'description', 'remove',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('appearance.menus', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-nav-menus.php', [$this, 'head']);
        add_action('admin_enqueue_scripts', [$this, 'maxDepth']);
    }

    /**
     * Head
     */
    public function head()
    {
        // Nag
        if ($this->config->has('appearance.menus.nag')) {
            echo '<style>.nav-menus-php .manage-menus {display: none;}</style>';
        }

        // Add
        if ($this->config->has('appearance.menus.add')) {
            echo '<style>.nav-menus-php #menu-settings-column {display: none!important;}</style>';
            echo '<style>.nav-menus-php #nav-menus-frame {margin-left: 0;}</style>';
        }

        if ($this->config->has('appearance.menus.add.custom')) {
            remove_meta_box('add-custom-links', 'nav-menus', 'side');
        }

        if ($this->config->has('appearance.menus.add.post')) {
            remove_meta_box('add-post-type-post', 'nav-menus', 'side');
        }

        if ($this->config->has('appearance.menus.add.page')) {
            remove_meta_box('add-post-type-page', 'nav-menus', 'side');
        }

        if ($this->config->has('appearance.menus.add.category')) {
            remove_meta_box('add-category', 'nav-menus', 'side');
        }

        if ($this->config->has('appearance.menus.add.tag')) {
            remove_meta_box('add-post_tag', 'nav-menus', 'side');
        }

        // Item
        if ($this->config->has('appearance.menus.item.target')) {
            echo '
            <script>
                jQuery(document).ready(function() {
                    jQuery(".nav-menus-php #link-target-hide").parent().remove();
                    jQuery("#menu-to-edit .field-link-target").remove();
                });
            </script>';
        }

        if ($this->config->has('appearance.menus.item.title')) {
            echo '
            <script>
                jQuery(document).ready(function() {
                    jQuery(".nav-menus-php #title-attribute-hide").parent().remove();
                    jQuery(".nav-menus-php .field-title-attribute").remove();
                });
            </script>';
        }

        if ($this->config->has('appearance.menus.item.classes')) {
            echo '
            <script>
                jQuery(document).ready(function() {
                    jQuery(".nav-menus-php #css-classes-hide").parent().remove();
                    jQuery(".nav-menus-php .field-css-classes").remove();
                });
            </script>';
        }

        if ($this->config->has('appearance.menus.item.xfn')) {
            echo '
            <script>
                jQuery(document).ready(function() {
                    jQuery(".nav-menus-php #xfn-hide").parent().remove();
                    jQuery(".nav-menus-php .field-xfn").remove();
                });
            </script>';
        }

        if ($this->config->has('appearance.menus.item.description')) {
            echo '
            <script>
                jQuery(document).ready(function() {
                    jQuery(".nav-menus-php #description-hide").parent().remove();
                    jQuery(".nav-menus-php .field-description").remove();
                });
            </script>';
        }

        if ($this->config->has('appearance.menus.item.remove')) {
            echo '<style>.nav-menus-php #menu-to-edit .item-delete {display: none;}</style>';
            echo '<style>.nav-menus-php #menu-to-edit .item-delete + .meta-sep {display: none;}</style>';
        }

        // Settings
        if ($this->config->has('appearance.menus.settings') || $this->config->has('appearance.menus.settings.auto-add') && $this->config->has('appearance.menus.settings.location')) {
            echo '<style>.nav-menus-php .menu-settings {display: none;}</style>';
        }

        if ($this->config->has('appearance.menus.settings.auto-add')) {
            echo '<style>.nav-menus-php .menu-settings .auto-add-pages {display: none;}</style>';
        }

        if ($this->config->has('appearance.menus.settings.location')) {
            echo '<style>.nav-menus-php .menu-settings .menu-theme-locations {display: none;}</style>';
        }

        // Delete
        if ($this->config->has('appearance.menus.delete')) {
            echo '<style>.nav-menus-php #nav-menu-footer .delete-action {display: none;}</style>';
        }
    }

    /**
     * Max Depth
     */
    public function maxDepth($page)
    {
        if ($page !== 'nav-menus.php') {
            return;
        }

        $menus = Composer::set($this->config)
            ->group('appearance.menus.max-depth')
            ->get();

        if ($menus->has('appearance.menus.max-depth')) {
            $menus
                ->prepend($menus->get('appearance.menus.max-depth'), 'all')
                ->forget('appearance.menus.max-depth');
        }

        wp_register_script('intervention-menus', plugin_dir_url(__DIR__) . 'Appearance/Menus.js', []);
        wp_localize_script('intervention-menus', 'menus', $menus->toArray());
        wp_enqueue_script('intervention-menus');
    }
}
