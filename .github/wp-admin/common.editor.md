## `wp-admin.$role.common.editor`

Remove wp-admin editor components.

### Options;

- Parent items remove child items.
- For concise documentation, `option.[x, y]` has been abbreviated from `option.x, option.y`.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'common.editor',
        // add
        'common.editor.add',
        'common.editor.add.[
            search,
            preview,
            headers,
            tips,
            grid,
            icons,
        ]',
        // add.blocks
        'common.editor.add.blocks.text',
        'common.editor.add.blocks.text.[
            paragraph,
            heading,
            list,
            quote,
            code,
            classic,
            preformatted,
            pullquote,
            table,
            verse,
        ]',
        'common.editor.add.blocks.media',
        'common.editor.add.blocks.media.[
            image,
            gallery,
            audio,
            cover,
            file,
            media-text,
            video,
        ]',
        'common.editor.add.blocks.design',
        'common.editor.add.blocks.design.[
            buttons,
            columns,
            group,
            more,
            page-break,
            separator,
            spacer,
            site-logo,
            site-tagline,
            site-title,
            archive-title,
            post-categories,
            post-tags,
        ]',
        'common.editor.add.blocks.widgets',
        'common.editor.add.blocks.widgets.[
            shortcode,
            archives,
            calendar,
            categories,
            custom-html,
            latest-comments,
            latest-posts,
            page-list,
            rss,
            social-icons,
            tag-cloud,
            search,
        ]',
        'common.editor.add.blocks.theme',
        'common.editor.add.blocks.theme.[
            query,
            post-title,
            post-content,
            post-date,
            post-excerpt,
            post-featured-image,
            login-out,
            posts-list,
        ]',
        'common.editor.add.blocks.embeds',
    ],
];
```

### Examples;

Remove the editor site wide;

- Disabling removes both the block editor and the classic tinymce editor.

```php
<?php

return [
    'wp-admin.$role|$username' => [
        'common.editor',
    ],
];
```

### Bug?

- **[Please open an issue](https://github.com/darrenjacoby/intervention/issues/new?title=[wp-admin.common.editor]&labels=bug&assignees=darrenjacoby)**
