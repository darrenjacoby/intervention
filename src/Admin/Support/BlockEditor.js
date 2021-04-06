wp.domReady(() => {
    /**
     * Remove Block Editor
     *
     * Remove components for WordPress block editor
     */
    if (config.includes('all')) {
        wp.data.dispatch('core/edit-post').removeEditorPanel('taxonomy-panel-category');
        wp.data.dispatch('core/edit-post').removeEditorPanel('taxonomy-panel-post_tag');
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
        wp.data.dispatch('core/edit-post').removeEditorPanel('taxonomy-panel-category');
    }

    if (config.includes('tags')) {
        wp.data.dispatch('core/edit-post').removeEditorPanel('taxonomy-panel-post_tag');
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
