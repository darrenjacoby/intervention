<?php

namespace Jacoby\Intervention\Admin\Common;

use Jacoby\Intervention\Admin\Appearance\Widgets;
use Jacoby\Intervention\Admin\Support\BlockEditor;
use Jacoby\Intervention\Admin\Support\PostComponents;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Common/Editor
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'common.editor',
 *      // add
 *      'common.editor.add',
 *      'common.editor.add.[
 *          search,
 *          preview,
 *          headers,
 *          tips,
 *          grid,
 *          icons,
 *      ]',
 *      // add.blocks
 *      'common.editor.add.blocks.text',
 *      'common.editor.add.blocks.text.[
 *          paragraph,
 *          heading,
 *          list,
 *          quote,
 *          code,
 *          classic,
 *          preformatted,
 *          pullquote,
 *          table,
 *          verse,
 *      ]',
 *      'common.editor.add.blocks.media',
 *      'common.editor.add.blocks.media.[
 *          image,
 *          gallery,
 *          audio,
 *          cover,
 *          file,
 *          media-text,
 *          video,
 *      ]',
 *      'common.editor.add.blocks.design',
 *      'common.editor.add.blocks.design.[
 *          buttons,
 *          columns,
 *          group,
 *          more,
 *          page-break,
 *          separator,
 *          spacer,
 *          site-logo,
 *          site-tagline,
 *          site-title,
 *          archive-title,
 *          post-categories,
 *          post-tags,
 *      ]',
 *      'common.editor.add.blocks.widgets',
 *      'common.editor.add.blocks.widgets.[
 *          shortcode,
 *          archives,
 *          calendar,
 *          categories,
 *          custom-html,
 *          latest-comments,
 *          latest-posts,
 *          page-list,
 *          rss,
 *          social-icons,
 *          tag-cloud,
 *          search,
 *      ]',
 *      'common.editor.add.blocks.theme',
 *      'common.editor.add.blocks.theme.[
 *          query,
 *          post-title,
 *          post-content,
 *          post-date,
 *          post-excerpt,
 *          post-featured-image,
 *          login-out,
 *          posts-list,
 *      ]',
 *      'common.editor.add.blocks.embeds',
 * ]
 */
class Editor
{
    protected $config;
    protected $editor;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalizeTrue($config);

        $this->editor = Composer::set($this->config)
            ->group('common.editor')
            ->get()
            ->keys()
            ->toArray();

        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        // remove blockeditor
        if ($this->config->has('common.editor')) {
            PostComponents::set(['post', 'page'])->remove(['editor' => true]);
            Widgets::set(['appearance.widgets.block-editor']);
            return;
        }

        // pass to blockeditor
        BlockEditor::set($this->editor);
    }
}
