<?php
/**
 * Return array of key to Intervention class for routing.
 *
 * @see Intervention
 * @see Application
 */
namespace Sober\Intervention;

return [
    'posttypes' => 'Application\Posttypes',
    'posts' => 'Application\Posts',
    'taxonomies' => 'Application\Taxonomies',
    // 'blocks' => 'Application\Blocks',
    'theme' => 'Application\Theme',
    'menus' => 'Application\Menus',
    'plugins' => 'Application\Plugins',
    'general' => 'Application\General',
    'writing' => 'Application\Writing',
    'reading' => 'Application\Reading',
    'discussion' => 'Application\Discussion',
    'media.sizes' => 'Application\Media\Sizes',
    'media.uploads' => 'Application\Media\Uploads',
    'media.mimes' => 'Application\Media\Mimes',
    'permalinks' => 'Application\Permalinks',
    'privacy' => 'Application\Privacy',
];
