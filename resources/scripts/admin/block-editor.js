wp.domReady(() => {
  /**
   * Shorthand for localised interventionBlockEditor
   */
  const config = interventionBlockEditor;

  /**
   * Remove Block Editor
   *
   * Remove components for WordPress block editor
   */
  /**
   * Remove Block Type Category
   *
   * @param {string} category
   */
  const removeBlockTypeCategory = (category) => {
    const blockTypes = wp.blocks.getBlockTypes();

    blockTypes.forEach((blockType) => {
      if (blockType.category === category) {
        wp.blocks.unregisterBlockType(blockType.name);
      }
    });
  };

  /**
   * Type/Text
   */
  if (config.includes('add.blocks.text')) {
    removeBlockTypeCategory('text');
  }

  if (config.includes('add.blocks.text.paragraph')) {
    wp.blocks.unregisterBlockType('core/paragraph');
  }

  if (config.includes('add.blocks.text.heading')) {
    wp.blocks.unregisterBlockType('core/heading');
  }

  if (config.includes('add.blocks.text.list')) {
    wp.blocks.unregisterBlockType('core/list');
  }

  if (config.includes('add.blocks.text.quote')) {
    wp.blocks.unregisterBlockType('core/quote');
  }

  if (config.includes('add.blocks.text.code')) {
    wp.blocks.unregisterBlockType('core/code');
  }

  if (config.includes('add.blocks.text.classic')) {
    wp.blocks.unregisterBlockType('core/freeform');
  }

  if (config.includes('add.blocks.text.preformatted')) {
    wp.blocks.unregisterBlockType('core/preformatted');
  }

  if (config.includes('add.blocks.text.pullquote')) {
    wp.blocks.unregisterBlockType('core/pullquote');
  }

  if (config.includes('add.blocks.text.table')) {
    wp.blocks.unregisterBlockType('core/table');
  }

  if (config.includes('add.blocks.text.verse')) {
    wp.blocks.unregisterBlockType('core/verse');
  }

  /**
   * Type/Media
   */
  if (config.includes('add.blocks.media')) {
    removeBlockTypeCategory('media');
  }

  if (config.includes('add.blocks.media.image')) {
    wp.blocks.unregisterBlockType('core/image');
  }

  if (config.includes('add.blocks.media.gallery')) {
    wp.blocks.unregisterBlockType('core/gallery'); // ??
  }

  if (config.includes('add.blocks.media.audio')) {
    wp.blocks.unregisterBlockType('core/audio');
  }

  if (config.includes('add.blocks.media.cover')) {
    wp.blocks.unregisterBlockType('core/cover');
  }

  if (config.includes('add.blocks.media.file')) {
    wp.blocks.unregisterBlockType('core/file');
  }

  if (config.includes('add.blocks.media.media-text')) {
    wp.blocks.unregisterBlockType('core/media-text');
  }

  if (config.includes('add.blocks.media.video')) {
    wp.blocks.unregisterBlockType('core/video');
  }

  /**
   * Type/Design
   */
  if (config.includes('add.blocks.design')) {
    removeBlockTypeCategory('design');
  }

  if (config.includes('add.blocks.design.buttons')) {
    wp.blocks.unregisterBlockType('core/buttons');
  }

  if (config.includes('add.blocks.design.columns')) {
    wp.blocks.unregisterBlockType('core/columns');
  }

  if (config.includes('add.blocks.design.group')) {
    wp.blocks.unregisterBlockType('core/group');
  }

  if (config.includes('add.blocks.design.more')) {
    wp.blocks.unregisterBlockType('core/more');
  }

  if (config.includes('add.blocks.design.page-break')) {
    wp.blocks.unregisterBlockType('core/nextpage');
  }

  if (config.includes('add.blocks.design.separator')) {
    wp.blocks.unregisterBlockType('core/separator');
  }

  if (config.includes('add.blocks.design.spacer')) {
    wp.blocks.unregisterBlockType('core/spacer');
  }

  if (config.includes('add.blocks.design.site-logo')) {
    wp.blocks.unregisterBlockType('core/site-logo');
  }

  if (config.includes('add.blocks.design.site-tagline')) {
    wp.blocks.unregisterBlockType('core/site-tagline');
  }

  if (config.includes('add.blocks.design.site-title')) {
    wp.blocks.unregisterBlockType('core/site-title');
  }

  if (config.includes('add.blocks.design.archive-title')) {
    wp.blocks.unregisterBlockType('core/query-title');
  }

  // variations?
  if (config.includes('add.blocks.design.post-categories')) {
    wp.blocks.unregisterBlockType('core/post-terms');
  }

  if (config.includes('add.blocks.design.post-tags')) {
    wp.blocks.unregisterBlockType('core/post-terms');
  }

  /**
   * Type/Widgets
   */
  if (config.includes('add.blocks.widgets')) {
    removeBlockTypeCategory('widgets');
  }

  if (config.includes('add.blocks.widgets.shortcode')) {
    wp.blocks.unregisterBlockType('core/shortcode');
  }

  if (config.includes('add.blocks.widgets.archives')) {
    wp.blocks.unregisterBlockType('core/archives');
  }

  if (config.includes('add.blocks.widgets.calendar')) {
    wp.blocks.unregisterBlockType('core/calendar');
  }

  if (config.includes('add.blocks.widgets.categories')) {
    wp.blocks.unregisterBlockType('core/categories');
  }

  if (config.includes('add.blocks.widgets.custom-html')) {
    wp.blocks.unregisterBlockType('core/html');
  }

  if (config.includes('add.blocks.widgets.latest-comments')) {
    wp.blocks.unregisterBlockType('core/latest-comments');
  }

  if (config.includes('add.blocks.widgets.latest-posts')) {
    wp.blocks.unregisterBlockType('core/latest-posts');
  }

  if (config.includes('add.blocks.widgets.page-list')) {
    wp.blocks.unregisterBlockType('core/page-list');
  }

  if (config.includes('add.blocks.widgets.rss')) {
    wp.blocks.unregisterBlockType('core/rss');
  }

  if (config.includes('add.blocks.widgets.social-icons')) {
    wp.blocks.unregisterBlockType('core/social-links');
  }

  if (config.includes('add.blocks.widgets.tag-cloud')) {
    wp.blocks.unregisterBlockType('core/tag-cloud');
  }

  if (config.includes('add.blocks.widgets.search')) {
    wp.blocks.unregisterBlockType('core/search');
  }

  /**
   * Type/Theme
   */
  if (config.includes('add.blocks.theme')) {
    removeBlockTypeCategory('theme');
  }

  if (config.includes('add.blocks.theme.query')) {
    wp.blocks.unregisterBlockType('core/query');
  }

  if (config.includes('add.blocks.theme.post-title')) {
    wp.blocks.unregisterBlockType('core/post-title');
  }

  if (config.includes('add.blocks.theme.post-content')) {
    wp.blocks.unregisterBlockType('core/post-content');
  }

  if (config.includes('add.blocks.theme.post-date')) {
    wp.blocks.unregisterBlockType('core/post-date');
  }

  if (config.includes('add.blocks.theme.post-excerpt')) {
    wp.blocks.unregisterBlockType('core/post-excerpt');
  }

  if (config.includes('add.blocks.theme.post-featured-image')) {
    wp.blocks.unregisterBlockType('core/post-featured-image');
  }

  if (config.includes('add.blocks.theme.login-out')) {
    wp.blocks.unregisterBlockType('core/loginout');
  }

  if (config.includes('add.blocks.theme.posts-list')) {
    wp.blocks.unregisterBlockType('core/posts-list');
  }

  /**
   * Type/Embeds
   */
  /*
    if (config.includes('add.embeds')) {
        removeBlockTypeCategory('theme');
    }
    */

  if (config.includes('add.blocks.embeds')) {
    wp.blocks.unregisterBlockType('core/embed');
  }

  /**
   * Panels
   */
  if (config.includes('all')) {
    wp.data
      .dispatch('core/edit-post')
      .removeEditorPanel('taxonomy-panel-category');
    wp.data
      .dispatch('core/edit-post')
      .removeEditorPanel('taxonomy-panel-post_tag');
    wp.data.dispatch('core/edit-post').removeEditorPanel('featured-image');
    wp.data.dispatch('core/edit-post').removeEditorPanel('post-link');
    wp.data.dispatch('core/edit-post').removeEditorPanel('page-attributes');
    wp.data.dispatch('core/edit-post').removeEditorPanel('post-excerpt');
    wp.data.dispatch('core/edit-post').removeEditorPanel('discussion-panel');
  }

  if (config.includes('excerpt')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('post-excerpt');
  }

  if (config.includes('discussion')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('discussion-panel');
    wp.blocks.unregisterBlockType('core/latest-comments');
  }

  if (config.includes('categories')) {
    wp.data
      .dispatch('core/edit-post')
      .removeEditorPanel('taxonomy-panel-category');
  }

  if (config.includes('tags')) {
    wp.data
      .dispatch('core/edit-post')
      .removeEditorPanel('taxonomy-panel-post_tag');
  }

  if (config.includes('attributes')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('attributes');
  }

  if (config.includes('link')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('post-link');
  }

  if (config.includes('featured-image')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('featured-image');
  }
});
