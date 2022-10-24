<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;
use Sober\Intervention\Support\Str;

/**
 * Plugins
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/functions/activate_plugin/
 * @link https://developer.wordpress.org/reference/functions/deactivate_plugins/
 * @link https://developer.wordpress.org/reference/functions/is_plugin_active/
 *
 * @param
 * [
 *     'plugins' => (array) $plugins,
 * ]
 */
class Plugins
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Composer::set(Arr::normalize($config))
            ->group('plugins')
            ->get();

        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('admin_init', [$this, 'options']);
    }

    /**
     * Options
     */
    public function options()
    {
        if (!$this->config) {
            return;
        }

        foreach ($this->config as $item => $value) {
            // Shorthand support
            if (!Str::contains($item, '/')) {
                $item = $item . '/' . $item . '.php';
            }

            if (!is_plugin_active($item) && $value === true) {
                activate_plugin($item);
            }

            if (is_plugin_active($item) && $value === false) {
                deactivate_plugins($item);
            }
        }
    }
}
