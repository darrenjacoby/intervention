<?php
/**
 * Return array of components.
 *
 * @see Intervention
 * @see UserInterface
 */
namespace Sober\Intervention;

/**
 * Tools
 *
 * Available
 * Import
 * Export
 * Site Health
 * Export Personal Data
 * Erase Personal Data
 *
 * @return array
 */
return [
    'tools:hierachical' => [
        ':route',
        'title:text[Tools]',
        'icon:icon[tools]',
        'available:hierachical' => [
            ':route',
            'title:text[Tools]',
            'tabs:group' => ['screen-options', 'help'],
        ],
        'import:hierachical' => [
            ':route',
            'title:text[Import]',
            'tabs:group' => ['screen-options', 'help'],
        ],
        'export:hierachical' => [
            ':route',
            'title:text[Export]',
            'tabs:group' => ['screen-options', 'help'],
        ],
        'site-health:hierachical' => [
            ':route',
            'title:text[Site Health]',
            'tabs:group' => ['screen-options', 'help'],
        ],
        'export-personal-data:hierachical' => [
            ':route',
            'title:text[Export Personal Data]',
            'tabs:group' => ['screen-options', 'help'],
        ],
        'erase-personal-data:hierachical' => [
            ':route',
            'title:text[Erase Personal Data]',
            'tabs:group' => ['screen-options', 'help'],
        ],
    ],
];
