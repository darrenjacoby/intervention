<?php

namespace Sober\Intervention\Admin\Appearance;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Appearance/Themes
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'appearance.themes',
 *     'appearance.themes' => (string) $route,
 *     'appearance.themes.title' => (string) $title,
 *     'appearance.themes.title.[menu, page]' => (string) $title,
 *     'appearance.themes.title-count',
 *     'appearance.themes.title-link',
 *     'appearance.themes.search',
 *     'appearance.themes.tabs',
 *     'appearance.themes.inactive',
 *     'appearance.themes.theme',
 *     'appearance.themes.theme.[actions, nag]',
 *     'appearance.themes.theme.actions.[activate, customize]',
 * ]
 */
class Themes
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

        $compose = $compose->has('appearance.themes.all')->add('appearance.themes.', [
            'title-link', 'title-count', 'search', 'tabs', 'inactive', 'theme',
        ]);

        $compose = $compose->has('appearance.themes.title')->add('appearance.themes.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('appearance.themes.tabs')->add('appearance.themes.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('appearance.themes.theme')->add('appearance.themes.theme.', [
            'nag', 'actions',
        ]);

        $compose = $compose->has('appearance.themes.theme.actions')->add('appearance.themes.theme.actions.', [
            'activate', 'customize',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('appearance.themes', $this->config);
        $shared->router();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-themes.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('appearance.themes.title-count')) {
            echo '<style>.themes-php .title-count.theme-count {display: none;}</style>';
        }

        if ($this->config->has('appearance.themes.add')) {
            echo '<style>.themes-php .theme.add-new-theme {display: none;}</style>';
        }

        if ($this->config->has('appearance.themes.search')) {
            echo '<style>.themes-php .search-form {display: none;}</style>';
        }

        if ($this->config->has('appearance.themes.inactive')) {
            echo '<style>.themes-php .themes .theme:not(.active) {display: none;}</style>';
        }

        if ($this->config->has('appearance.themes.theme.nag')) {
            echo '<style>.themes-php .themes .notice {display: none;}</style>';
        }

        if ($this->config->has('appearance.themes.theme.actions.activate')) {
            echo '<style>.themes-php .theme-actions .activate {display: none;}</style>';
        }

        if ($this->config->has('appearance.themes.theme.actions.customize')) {
            echo '<style>.themes-php .theme-actions .load-customize {display: none;}</style>';
        }

        if ($this->config->has('appearance.themes.theme.actions.activate') && $this->config->has('appearance.themes.theme.actions.customize')) {
            echo '<style>.themes-php .theme-actions {display: none;}</style>';
        }
    }
}
