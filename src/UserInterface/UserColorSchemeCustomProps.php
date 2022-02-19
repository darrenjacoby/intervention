<?php

namespace Jacoby\Intervention\UserInterface;

/**
 * UserInterface/UserColorSchemeCustomProps
 *
 * Export WordPress current users color scheme to CSS custom properties.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://wordpress.stackexchange.com/questions/130943/wordpress-3-8-get-current-admin-color-scheme
 */

class UserColorSchemeCustomProps
{
    /**
     * Scheme
     */
    protected $scheme = [];

    /**
     * Init
     */
    public function __construct()
    {
        add_action('admin_head', function () {
            global $_wp_admin_css_colors;

            if (!$_wp_admin_css_colors) {
                return;
            }

            $admin_color = get_user_meta(get_current_user_id(), 'admin_color', true);

            if (key_exists($admin_color, $_wp_admin_css_colors)) {
                $this->scheme = $_wp_admin_css_colors[$admin_color];
            }
        });

        add_action('admin_footer', function () {
            if (!$this->scheme) {
                return;
            }

            /**
             * Used as a fallback for custom color schemes
             */
            $colors = [
                "--wp-admin-theme-color: {$this->scheme->colors[0]}",
            ];

            /**
             * WordPress specific with variants
             */
            if ($this->scheme->name === 'Default') {
                $colors = [
                    '--wp-admin-theme-color: #007cba;',
                    '--wp-admin-theme-color-darker-10: #006ba1;',
                    '--wp-admin-theme-color-darker-20: #005a87;',
                ];
            }

            if ($this->scheme->name === 'Light') {
                $colors = [
                    '--wp-admin-theme-color: #0085ba;',
                    '--wp-admin-theme-color-darker-10: #0073a1;',
                    '--wp-admin-theme-color-darker-20: #006187;',
                ];
            }

            if ($this->scheme->name === 'Modern') {
                $colors = [
                    "--wp-admin-theme-color: {$this->scheme->colors[1]};",
                    '--wp-admin-theme-color-darker-10: #2145e6;',
                    '--wp-admin-theme-color-darker-20: #183ad6;',
                ];
            }

            if ($this->scheme->name === 'Blue') {
                $colors = [
                    "--wp-admin-theme-color: {$this->scheme->colors[0]};",
                    '--wp-admin-theme-color-darker-10: #07526c;',
                    '--wp-admin-theme-color-darker-20: #064054;',
                ];
            }

            if ($this->scheme->name === 'Coffee') {
                $colors = [
                    "--wp-admin-theme-color: {$this->scheme->colors[0]};",
                    '--wp-admin-theme-color-darker-10: #383330;',
                    '--wp-admin-theme-color-darker-20: #2b2724;',
                ];
            }

            if ($this->scheme->name === 'Ectoplasm') {
                $colors = [
                    "--wp-admin-theme-color: {$this->scheme->colors[1]};",
                    '--wp-admin-theme-color-darker-10: #46365d;',
                    '--wp-admin-theme-color-darker-20: #3a2c4d;',
                ];
            }

            if ($this->scheme->name === 'Midnight') {
                $colors = [
                    "--wp-admin-theme-color: {$this->scheme->colors[3]};",
                    '--wp-admin-theme-color-darker-10: #dd382d;',
                    '--wp-admin-theme-color-darker-20: #d02c21;',
                ];
            }

            if ($this->scheme->name === 'Ocean') {
                $colors = [
                    "--wp-admin-theme-color: {$this->scheme->colors[0]};",
                    '--wp-admin-theme-color-darker-10: #576e74;',
                    '--wp-admin-theme-color-darker-20: #4c6066;',
                ];
            }

            if ($this->scheme->name === 'Sunrise') {
                $colors = [
                    "--wp-admin-theme-color: {$this->scheme->colors[2]};",
                    '--wp-admin-theme-color-darker-10: #d97426;',
                    '--wp-admin-theme-color-darker-20: #d97426;',
                ];
            }

            echo "<style id=\"wp-admin-user-color-scheme\">:root {\n" . join(PHP_EOL, $colors) . "\n}</style>";
        });
    }
}
