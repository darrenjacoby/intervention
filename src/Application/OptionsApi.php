<?php

namespace Jacoby\Intervention\Application;

use Jacoby\Intervention\Support\Config;
use Jacoby\Intervention\Support\Middleware\InterventionToWordPress;
use Jacoby\Intervention\UserInterface\Application as UserInterfaceApplication;

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
     * @return Jacoby\Intervention\Application\OptionsApi
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

        /**
         * Fetch WordPress database key from `application/settings-database`.
         */
        $database_k = Config::get('application/settings-database')->get($key);

        /**
         * Update value if there is a custom value passed in.
         */
        $value = $custom_value !== null ? $custom_value : $this->config->get($key);

        /**
         * Middleware to transform value from Intervention to WordPress database values.
         */
        $intervention_v_transformed = InterventionToWordPress::transform($key, $value);

        /**
         * Save using `pre_option` and pass data to class `UserInterface/Import`.
         */
        if ($database_k && $value !== null) {
            add_filter('pre_option_' . $database_k, function () use ($intervention_v_transformed) {
                return $intervention_v_transformed;
            });

            UserInterfaceApplication::save($database_k, $key, $value);
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

        $elem = Config::get('application/settings-dom')->get($key);

        if ($elem !== null) {
            /**
             * Timeout has been set for `#page_on_front` and `#page_for_posts` bugs.
             */
            echo '
            <script>
                jQuery(window).on("load", function() {
                    setTimeout(function() {
                        jQuery("' . esc_html($elem) . '").prop("disabled", true);
                    }, 1);
                });
            </script>';
        }
    }

    /**
     * Disable Keys
     *
     * Disable DOM elements associated with keys in `$this->config`.
     */
    public function disableKeys()
    {
        $this->config->each(function ($item, $key) {
            $this->disable($key);
        });

        /**
         * Remove the `disabled` attributes on form submit else the database values are cleared.
         */
        echo '
        <script>
            jQuery(document).on("submit", "form", function() {
                jQuery(":disabled").each(function(e) {
                    jQuery(this).removeAttr("disabled");
                })
            });
        </script>
        ';
    }
}
