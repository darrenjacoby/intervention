<?php

namespace Sober\Intervention\Admin\Settings;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Settings/Privacy
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'settings.privacy',
 *     'settings.privacy' => (string) $route,
 *     'settings.privacy.title' => (string) $title,
 *     'settings.privacy.title.[menu, page]' => (string) $title,
 *     'settings.privacy.tabs',
 *     'settings.privacy.tabs.[screen-options, help]',
 *     'settings.privacy.policy-page',
 * ]
 */
class Privacy
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

        $compose = $compose->has('settings.privacy.all')->add('settings.privacy.', [
            'tabs', 'policy-page',
        ]);

        $compose = $compose->has('settings.privacy.title')->add('settings.privacy.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('settings.privacy.tabs')->add('settings.privacy.tabs.', [
            'screen-options', 'help',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('settings.privacy', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-options-privacy.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('settings.privacy.policy-page')) {
            // echo '<style>h2, p, hr, table.tools-privacy-policy-page {display: none;}</style>';
            echo '<style>table.tools-privacy-policy-page {display: none;}</style>';
        }
    }
}
