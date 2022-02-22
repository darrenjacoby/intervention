<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Jacoby\Intervention;

/**
 * Apperance
 *
 * Themes
 * Customize
 * Widgets
 * Menus
 * Theme Editor
 *
 * @return array
 */
return [
    'appearance:hierachical' => [
        ':route',
        'title:text[Themes]',
        'icon:icon[appearance]',
        'themes:hierachical' => [
            ':route',
            'title:text[Themes]',
            'title-count',
            'title-link',
            'search',
            'tabs',
            'inactive',
            'theme.nag',
            'theme.actions' => ['activate', 'customize'],
        ],
        'customize:hierachical' => [
            ':route',
            'theme',
            'site:group' => ['title', 'tagline', 'icon'],
            'custom-css',
            'colors',
            'header-image',
            'background-image',
            'homepage',
            'menus:group' => ['locations', 'add'],
            'widgets',
            'footer',
        ],
        'widgets:hierachical' => [
            ':route',
            'title:text[Widgets]',
            // block-editor
            'add:group' => ['search', 'preview', 'headers', 'tips', 'grid', 'icons'],
            'add.blocks:group' => ['text', 'media', 'design', 'widgets', 'theme', 'embeds'],
            'block-editor',
            // classic
            /*
        'appearance.widgets.title-link',
        'appearance.widgets.tabs',
        'appearance.widgets.tabs.[screen-options, help]',
        'appearance.widgets.inactive',
        'appearance.widgets.available',
        'appearance.widgets.available.[ archives,  audio,  calendar,  categories,  custom-html,  gallery,  image,  meta,  navigation-menu,  pages,  recent-comments,  recent-posts,  rss,  search,  tag-cloud,  text,  video,  akisment,  links]',
         */
        ],
        'menus:hierachical' => [
            ':route',
            'title:text[Menus]',
            'title-link',
            'tabs:group' => ['screen-options', 'help'],
            'nag',
            'add' => ['custom', 'post', 'page', 'category', 'tag'],
            'item' => ['target', 'title', 'classes', 'xfn', 'description', 'remove'],
            'settings',
            'settings' => ['auto-add', 'location'],
            'delete',
            'max-depth:number',
            /*
        fetch menu names?
        'max-depth.$name' => (int) $depth,
         */
        ],
        'theme-editor:hierachical' => [
            ':route',
            'title:text[Edit Themes]',
            'tabs:group' => ['screen-options', 'help'],
        ],
    ],
];
