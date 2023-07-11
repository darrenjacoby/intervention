<?php
/**
 * Return array of key to WordPress pagenow.
 *
 * @see Admin/Common/Menu
 * @see Admin/SharedApi/SharedApi
 * @see Admin/Support/Menu
 * @see Admin/Support/Router
 * @see Admin/Support/Tabs
 * @see Admin/Support/Title
 * @see Admin/Support/All/Search
 * @see Admin/Support/All/Count
 */
namespace Jacoby\Intervention;

return [
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
