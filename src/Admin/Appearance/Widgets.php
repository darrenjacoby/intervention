<?php

namespace Sober\Intervention\Admin\Appearance;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Appearance/Widgets
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 * @link https://developer.wordpress.org/reference/hooks/widgets_init/
 * @link https://developer.wordpress.org/reference/hooks/after_setup_theme/
 *
 * @param
 * [
 *     'appearance.widgets',
 *     'appearance.widgets' => (string) $route,
 *     'appearance.widgets.title' => (string) $title,
 *     'appearance.widgets.title.[menu, page]' => (string) $title,
 *     'appearance.widgets.title-link',
 *     'appearance.widgets.tabs',
 *     'appearance.widgets.tabs.[screen-options, help]',
 *     'appearance.widgets.inactive',
 *     'appearance.widgets.available',
 *     'appearance.widgets.available.[
 *         archives,
 *         audio,
 *         calendar,
 *         categories,
 *         custom-html,
 *         gallery,
 *         image,
 *         meta,
 *         navigation-menu,
 *         pages,
 *         recent-comments,
 *         recent-posts,
 *         rss,
 *         search,
 *         tag-cloud,
 *         text,
 *         video,
 *         akisment,
 *         links
 *     ]',
 * ]
 */
class Widgets
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

        $compose = $compose->has('appearance.widgets.all')->add('appearance.widgets.', [
            'title-link', 'tabs', 'inactive', 'available',
        ]);

        $compose = $compose->has('appearance.widgets.title')->add('appearance.widgets.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('appearance.widgets.tabs')->add('appearance.widgets.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('appearance.widgets.available')->add('appearance.widgets.available.', [
            'archives',
            'audio',
            'calendar',
            'categories',
            'custom-html',
            'gallery',
            'image',
            'meta',
            'navigation-menu',
            'pages',
            'recent-comments',
            'recent-posts',
            'rss',
            'search',
            'tag-cloud',
            'text',
            'video',
            'akismet',
            'links',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('appearance.widgets', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-widgets.php', [$this, 'head']);
        add_action('widgets_init', [$this, 'available']);
        add_action('after_setup_theme', [$this, 'inactive']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('appearance.widgets.tabs.help')) {
            // Tabs::help(); does not work on widgets page for some reason
            echo '<style>.widgets-php #contextual-help-link {display: none;}</style>';
        }

        if ($this->config->has('appearance.widgets.locations')) {
            echo '<style>.widgets-php #widgets-right {display: none;}</style>';
        }

        if ($this->config->has('appearance.widgets.inactive')) {
            echo '<style>.widgets-php .widgets-holder-wrap.inactive-sidebar {display: none;}</style>';
        }
    }

    /**
     * Available
     */
    public function available()
    {
        if ($this->config->has('appearance.widgets.available')) {
            add_action('admin_head-widgets.php', function () {
                echo '<style>.widgets-php #available-widgets {display: none;}</style>';
            });
        }

        if ($this->config->has('appearance.widgets.available.archives')) {
            unregister_widget('WP_Widget_Archives');
        }

        if ($this->config->has('appearance.widgets.available.audio')) {
            unregister_widget('WP_Widget_Media_Audio');
        }

        if ($this->config->has('appearance.widgets.available.calendar')) {
            unregister_widget('WP_Widget_Calendar');
        }

        if ($this->config->has('appearance.widgets.available.categories')) {
            unregister_widget('WP_Widget_Categories');
        }

        if ($this->config->has('appearance.widgets.available.custom-html')) {
            unregister_widget('WP_Widget_Custom_HTML');
        }

        if ($this->config->has('appearance.widgets.available.gallery')) {
            unregister_widget('WP_Widget_Media_Gallery');
        }

        if ($this->config->has('appearance.widgets.available.image')) {
            unregister_widget('WP_Widget_Media_Image');
        }

        if ($this->config->has('appearance.widgets.available.meta')) {
            unregister_widget('WP_Widget_Meta');
        }

        if ($this->config->has('appearance.widgets.available.navigation-menu')) {
            unregister_widget('WP_Nav_Menu_Widget');
        }

        if ($this->config->has('appearance.widgets.available.pages')) {
            unregister_widget('WP_Widget_Pages');
        }

        if ($this->config->has('appearance.widgets.available.recent-comments')) {
            unregister_widget('WP_Widget_Recent_Comments');
        }

        if ($this->config->has('appearance.widgets.available.recent-posts')) {
            unregister_widget('WP_Widget_Recent_Posts');
        }

        if ($this->config->has('appearance.widgets.available.rss')) {
            unregister_widget('WP_Widget_RSS');
        }

        if ($this->config->has('appearance.widgets.available.search')) {
            unregister_widget('WP_Widget_Search');
        }

        if ($this->config->has('appearance.widgets.available.tag-cloud')) {
            unregister_widget('WP_Widget_Tag_Cloud');
        }

        if ($this->config->has('appearance.widgets.available.text')) {
            unregister_widget('WP_Widget_Text');
        }

        if ($this->config->has('appearance.widgets.available.video')) {
            unregister_widget('WP_Widget_Media_Video');
        }

        if ($this->config->has('appearance.widgets.available.akismet')) {
            unregister_widget('Akismet_Widget');
        }

        if ($this->config->has('appearance.widgets.available.links')) {
            unregister_widget('WP_Widget_Links');
        }
    }

    /**
     * Inactive
     */
    public function inactive()
    {
        if ($this->config->has('appearance.widgets.inactive')) {
            $sidebars_widgets = get_option('sidebars_widgets');
            $sidebars_widgets['wp_inactive_widgets'] = [];
            update_option('sidebars_widgets', $sidebars_widgets);
        }
    }
}
