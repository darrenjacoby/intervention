<?php

namespace Sober\Intervention\Admin\Settings;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Settings/Writing
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'settings.writing',
 *     'settings.writing' => (string) $route,
 *     'settings.writing.title' => (string) $title,
 *     'settings.writing.title.[menu, page]' => (string) $title,
 *     'settings.writing.tabs',
 *     'settings.writing.tabs.[screen-options, help]',
 *     'settings.writing.default-category',
 *     'settings.writing.default-post-format',
 *     'settings.writing.post-via-email',
 *     'settings.writing.update-services',
 * ]
 */
class Writing
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

        $compose = $compose->has('settings.writing.all')->add('settings.writing.', [
            'tabs', 'default-category', 'default-post-format', 'post-via-email', 'update-services',
        ]);

        $compose = $compose->has('settings.writing.title')->add('settings.writing.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('settings.writing.tabs')->add('settings.writing.tabs.', [
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
        $shared = SharedApi::set('settings.writing', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-options-writing.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('settings.writing.default-category') && $this->config->has('settings.writing.default-post-format')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#default_category").parents("table").remove()});</script>';
        }

        if ($this->config->has('settings.writing.default-category')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#default_category").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.writing.default-post-format')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#default_post_format").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.writing.post-via-email')) {
            echo
                '<script>
                jQuery(document).ready(function() {
                    jQuery("#mailserver_url").parents("table").prev().prev().remove();
                    jQuery("#mailserver_url").parents("table").prev().remove();
                    jQuery("#mailserver_url").parents("table").remove()
                });
            </script>';
        }

        if ($this->config->has('settings.writing.update-services')) {
            echo
                '<script>
                jQuery(document).ready(function() {
                    jQuery("#ping_sites").prev().prev().remove();
                    jQuery("#ping_sites").prev().remove();
                    jQuery("#ping_sites").remove()
                });
            </script>';
        }
    }
}
