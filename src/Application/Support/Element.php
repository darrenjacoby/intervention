<?php

namespace Sober\Intervention\Application\Support;

/**
 * Support/Element
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Element
{
    /**
     * Interface
     */
    public static function disabled($elem, $loaded = false)
    {
        if ($loaded) {
            echo '
            <script>
                jQuery(window).on("load", function() {
                    setTimeout(function() {
                        jQuery("' . $elem . '").prop("disabled", true);
                    }, 1);
                });
            </script>';
        } else {
            echo '<script>jQuery(document).ready(function() {jQuery("' . $elem . '").prop("disabled", true)});</script>';
        }
    }
}
