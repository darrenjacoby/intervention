<?php

namespace Sober\Intervention\Admin\Support;

/**
 * Support/BlockEditor
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/wp_register_script/
 * @link https://developer.wordpress.org/reference/functions/wp_localize_script/
 * @link https://developer.wordpress.org/reference/functions/register_block_type/
 */
class BlockEditor
{
    /**
     * Interface
     *
     * @param array $config
     * @return Sober\Intervention\Admin\Support\BlockEditor
     */
    public static function set($config = false)
    {
        return new self($config);
    }

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        add_action('enqueue_block_assets', function () use ($config) {
            if (!is_admin()) {
                return;
            }

            if (wp_script_is('intervention-block-editor', 'registered')) {
                return;
            }

            wp_enqueue_script('intervention-block-editor', plugin_dir_url(__DIR__) . 'Support/BlockEditor.js', ['wp-blocks', 'wp-edit-post']);
            wp_localize_script('intervention-block-editor', 'config', $config);
        });
    }
}
