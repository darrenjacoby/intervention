<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\Support\Maps;

/**
 * Application/OptionsApi
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class OptionsApi
{
    protected $config;

    /**
     * Interface
     *
     * @param string $config
     * @return Sober\Intervention\Application\OptionsApi
     */
    public static function set($config = false)
    {
        return new self($config);
    }

    /**
     * Initialize
     *
     * @param string $key
     */
    public function __construct($config = false)
    {
        $this->config = $config;
    }

    /**
     * Save
     *
     * @param string|int|boolean $custom_value
     */
    public function save($key = false, $custom_value = null)
    {
        if (!$key) {
            return;
        }

        $database = Maps::set('db')->get($key);
        $value = $custom_value !== null ? $custom_value : $this->config->get($key);

        if ($database) {
            add_filter('pre_option_' . $database, function () use ($value) {
                return $value;
            });
        }
    }

    /**
     * Save Keys
     */
    public function saveKeys($keys = false)
    {
        if (!$keys) {
            return;
        }

        foreach ($keys as $key) {
            $this->save($key);
        }
    }

    /**
     * Disable
     */
    public function disable($key = false)
    {
        if (!$key) {
            return;
        }

        $element = Maps::set('element')->get($key);

        // Timeout has been set for `#page_on_front` and `#page_for_posts` bugs
        echo '
        <script>
            jQuery(window).on("load", function() {
                setTimeout(function() {
                    jQuery("' . $element . '").prop("disabled", true);
                }, 1);
            });
        </script>';
    }

    /**
     * Disable Elems From Keys
     */
    public function disableKeys()
    {
        $this->config->each(function ($item, $key) {
            $this->disable($key);
        });
    }
}
