<?php

namespace Sober\Intervention\Admin\Support;

use Sober\Intervention\Support\Arr;

/**
 * Support/Maps
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Maps
{
    public const SCREENS = [
        'dashboard' => 'index.php',
        'dashboard.home' => 'index.php',
        'dashboard.updates' => 'update-core.php',
        'posts' => 'edit.php',
        'posts.all' => 'edit.php',
        'posts.add' => 'post-new.php',
        'posts.edit' => 'post.php',
        'posts.categories' => 'edit-tags.php?taxonomy=category',
        'posts.categories.all' => 'edit-tags.php?taxonomy=category',
        'posts.categories.item' => 'term.php',
        'posts.tags' => 'edit-tags.php?taxonomy=post_tag',
        'posts.tags.all' => 'edit-tags.php?taxonomy=post_tag',
        'posts.tags.item' => 'term.php',
        'media' => 'upload.php',
        'media.all' => 'upload.php',
        'media.add' => 'media-new.php',
        'pages' => 'edit.php?post_type=page',
        'pages.all' => 'edit.php?post_type=page',
        'pages.add' => 'post-new.php',
        'pages.edit' => 'post.php',
        'comments' => 'edit-comments.php',
        'comments.all' => 'edit-comments.php',
        'appearance' => 'themes.php',
        'appearance.themes' => 'themes.php',
        'appearance.customize' => 'customize.php',
        // 'appearance.customize' => 'customize.php?return=' . urlencode($_SERVER['REQUEST_URI']),
        'appearance.widgets' => 'widgets.php',
        'appearance.menus' => 'nav-menus.php',
        'appearance.theme-editor' => 'theme-editor.php',
        'plugins' => 'plugins.php',
        'plugins.all' => 'plugins.php',
        'plugins.add' => 'plugin-install.php',
        'plugins.plugin-editor' => 'plugin-editor.php',
        'users' => 'users.php',
        'users.all' => 'users.php',
        'users.add' => 'user-new.php',
        'users.profile' => 'profile.php',
        'tools' => 'tools.php',
        'tools.available' => 'tools.php',
        'tools.import' => 'import.php',
        'tools.export' => 'export.php',
        'tools.site-health' => 'site-health.php',
        'tools.export-personal-data' => 'export-personal-data.php',
        'tools.erase-personal-data' => 'erase-personal-data.php',
        'settings' => 'options-general.php',
        'settings.general' => 'options-general.php',
        'settings.writing' => 'options-writing.php',
        'settings.reading' => 'options-reading.php',
        'settings.discussion' => 'options-discussion.php',
        'settings.media' => 'options-media.php',
        'settings.privacy' => 'options-privacy.php',
        'settings.permalinks' => 'options-permalink.php',
        'custom-fields' => '',
        'custom-fields.groups' => '',
        'custom-fields.add' => '',
        'custom-fields.tools' => '',
    ];

    public const MENU_POSITIONS = [
        'dashboard' => 2,
        'dashboard.home' => 0,
        'dashboard.updates' => 10,
        'posts' => 5,
        'posts.all' => 5,
        'posts.add' => 10,
        'posts.categories.all' => 15,
        'posts.categories.item' => 15,
        'posts.tags.all' => 16,
        'posts.tags.item' => 16,
        'media' => 10,
        'media.all' => 5,
        'media.add' => 10,
        'pages' => 20,
        'pages.all' => 5,
        'pages.add' => 10,
        'comments' => 25,
        'comments.all' => 0,
        'appearance' => 60,
        'appearance.themes' => 5,
        'appearance.customize' => 6,
        'appearance.widgets' => 7,
        'appearance.menus' => 10,
        // 'appearance.theme-editor' => 0
        'plugins' => 65,
        'plugins.all' => 5,
        'plugins.add' => 10,
        'plugins.plugin-editor' => 15,
        'users' => 70,
        'users.all' => 5,
        'users.add' => 10,
        'users.profile' => 15,
        'tools' => 75,
        'tools.available' => 5,
        'tools.import' => 10,
        'tools.export' => 15,
        'tools.site-health' => 20,
        'tools.export-personal-data' => 25,
        'tools.erase-personal-data' => 30,
        'settings' => 80,
        'settings.general' => 10,
        'settings.writing' => 15,
        'settings.reading' => 20,
        'settings.discussion' => 25,
        'settings.media' => 30,
        'settings.privacy' => 45,
        'settings.permalinks' => 40,
        'custom-fields' => '80.025',
        'custom-fields.groups' => 30,
        'custom-fields.add' => 45,
        'custom-fields.tools' => 40,
    ];

    /**
     * const POSTTYPES = [
     *     'posts' => 'post',
     *     'pages' => 'page',
     * ];
     */

    /**
     * Set
     *
     * @return Illuminate\Support\Collection;
     */
    public static function set($map)
    {
        $array = [];

        if ($map === 'screens') {
            $array = self::SCREENS;
        }

        if ($map === 'menu-positions') {
            $array = self::MENU_POSITIONS;
        }

        /*
         * if ($map === 'posttypes') {
         * $array = self::POSTTYPES;
         * }
         */

        return Arr::collect($array);
    }
}
