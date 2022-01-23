<?php

namespace Sober\Intervention\Admin\Support;

use function Sober\Intervention\mix;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

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
    protected $config = [];

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
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('add')->add('add.', [
            'blocks',
        ]);

        $compose = $compose->has('add.blocks')->add('add.blocks.', [
            'text', 'media', 'design', 'widgets', 'theme', 'embeds',
        ]);

        $this->config = $compose->get();
        $this->editor = $this->config->keys()->toArray();

        if (!is_admin()) {
            return;
        }

        add_action('enqueue_block_editor_assets', [$this, 'enqueues']);
        add_action('admin_head', [$this, 'head']);
    }

    /**
     * Enqueues
     */
    public function enqueues()
    {
        if (wp_script_is('intervention/scripts/block-editor', 'registered')) {
            return;
        }

        $wp_edit = 'wp-edit-post';

        if ($GLOBALS['pagenow'] === 'widgets.php') {
            $wp_edit = 'wp-edit-widgets';
        }

        wp_enqueue_script('intervention/scripts/block-editor', mix('assets/scripts/block-editor.js'), ['wp-blocks', 'wp-dom-ready', $wp_edit]);
        wp_localize_script('intervention/scripts/block-editor', 'interventionBlockEditor', $this->editor);
    }

    /**
     * Head
     */
    public function head()
    {
        /**
         * Add
         */
        if ($this->config->has('add.patterns')) {
            echo '<style>.components-tab-panel__tabs-item:not(.is-active) { display: none !important; }</style>';
        }

        if ($this->config->has('add.search')) {
            echo '
            <style>
                .block-editor-inserter__search{ display: none !important; }
                .components-tab-panel__tabs { top: 0 !important; }
            </style>';
        }

        if ($this->config->has('add.preview')) {
            echo '<style>.block-editor-inserter__preview-container { display: none !important; }</style>';
        }

        if ($this->config->has('add.headers')) {
            echo '
            <style>
                .block-editor-inserter__panel-header { display: none !important; }
                .block-editor-inserter__panel-content { padding: 0 !important; }
            </style>';
        }

        if ($this->config->has('add.tips')) {
            echo '<style>.block-editor-inserter__tips { display: none !important; }</style>';
        }

        if ($this->config->has('add.grid')) {
            echo '
            <style>
                .block-editor-inserter__block-list {
                    padding: 8px 0 0 0 !important;
                }

                .block-editor-inserter__panel-content {
                    padding: 0 !important;
                }

                .block-editor-block-types-list > [role=presentation] {
                    margin: 0; padding: 0;
                }

                .block-editor-block-types-list__list-item {
                    width: 100%;
                }

                .components-button.block-editor-block-types-list__item {
                    flex-direction: row;
                    justify-content: flex-start;
                    align-content: items-center;
                    width: 100%;
                    border-radius: 0;
                    padding: 10px 16px;
                    border: 0 !important;
                    border-bottom: 1px solid #ddd !important;
                }

                .block-editor-block-types-list__item-icon {
                    padding: 0 10px 0 0;
                }

                .block-editor-block-icon svg {
                    max-width: 20px;
                    max-height: 20px;
                }

                .block-editor-block-types-list__item-title {
                    padding: 4px 0;
                    text-align: left;
                }

                .components-button.block-editor-block-types-list__item:active,
                .components-button.block-editor-block-types-list__item:hover,
                .components-button.block-editor-block-types-list__item:focus {
                    border-bottom: 1px solid var(--wp-admin-theme-color) !important;
                }
            </style>';
        }

        if ($this->config->has('add.icons')) {
            echo '<style>.block-editor-block-types-list__item-icon { display: none !important; }</style>';
        }
    }
}
