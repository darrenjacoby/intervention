<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\OptionsApi;
use Sober\Intervention\Support\Arr;

/**
 * Permalinks
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/functions/flush_rewrite_rules/
 *
 * @param
 * [
 *     'permalinks.structure' => (string) $tags,
 *     'permalinks.category-base' => (boolean|string) false|$category_base_path,
 *     'permalinks.tag-base' => (boolean|string) false|$tag_base_path,
 *     'permalinks.search-base' => (boolean|string) true|$search_base_path
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
        $this->config = Arr::normalize($config);
        $this->api = OptionsApi::set($this->config);
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('init', [$this, 'options']);
        add_action('admin_head-options-permalink.php', [$this->api, 'disableKeys']);
    }

    /**
     * Options
     */
    public function options()
    {
        $this->api->saveKeys([
            'permalinks.category-base',
            'permalinks.tag-base',
        ]);

        if ($this->config->has('permalinks.structure')) {
            $structure = $this->config->has('permalinks.structure');
            if (get_option('permalink_structure') !== $structure) {
                $this->api->save('permalinks.structure', $this->config->get('permalinks.structure'));
                flush_rewrite_rules();
            }
        }

        if ($this->config->has('permalinks.search-base')) {
            $search_base = $this->config->get('permalinks.search-base') === true ?
                'search' :
                $this->config->get('permalinks.search-base');

            add_action('template_redirect', function () use ($search_base) {
                if (is_search() && !empty($_GET['s'])) {
                    wp_redirect(home_url('/' . $search_base . '/') . urlencode(get_query_var('s')));
                    exit();
                }
            });

            $GLOBALS['wp_rewrite']->search_base = $search_base;
            $GLOBALS['wp_rewrite']->flush_rules();
        }
    }
}
