<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Sober\Intervention;

/**
 * Common
 *
 * Adminbar
 * Editor
 * Footer
 * Menu
 * Tabs
 * Title Link
 * Updates
 *
 * @return array
 */
return [
    'common:hierachical' => [
        'adminbar:hierachical' => [
            'wp:group' => ['about', 'documentation', 'support', 'feedback'],
            'updates',
            'site:group' => ['menu', 'visit', 'dashboard', 'themes', 'widgets', 'menus'],
            'comments',
            'new:group' => ['post', 'page', 'media', 'user'],
            'edit',
            'view:group' => ['archive', 'single'],
            'user:group' => ['howdy', 'avatar', 'profile', 'edit'],
            'search',
            'theme',
        ],
        'editor:hierachical' => [
            'add:group' => ['search', 'preview', 'headers', 'tips', 'grid', 'icons'],
            'blocks.text:group' => ['paragraph', 'heading', 'list', 'quote', 'code', 'classic', 'preformatted', 'pullquote', 'table', 'verse'],
            'blocks.media:group' => ['image', 'gallery', 'audio', 'cover', 'file', 'media-text', 'video'],
            'blocks.design:group' => ['buttons', 'columns', 'group', 'more', 'page-break', 'separator', 'spacer', 'site-logo', 'site-tagline', 'site-title', 'archive-title', 'post-categories', 'post-tags'],
            'blocks.widgets:group' => ['shortcode', 'archives', 'calendar', 'categories', 'custom-html', 'latest-comments', 'latest-posts', 'page-list', 'rss', 'social-icons', 'tag-cloud', 'search'],
            'blocks.theme:group' => ['query', 'post-title', 'post-content', 'post-date', 'post-excerpt', 'post-featured-image', 'login-out', 'posts-list'],
            'blocks.embeds',
        ],
        'footer:group' => ['credit', 'version'],
        'menu:group' => ['collapse', 'icons', 'nags'],
        'tabs:group' => ['screen-options', 'help'],
        'title-link',
        'updates',
        'all.list',
        'all.pagination:text',
        'all.search',
        'all.subsets',
    ],
];
