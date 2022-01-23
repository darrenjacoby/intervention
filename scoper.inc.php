<?php

declare (strict_types = 1);

use Isolated\Symfony\Component\Finder\Finder;

return [
    // The prefix configuration. If a non null value will be used, a random prefix will be generated.
    'prefix' => 'Sober\Intervention',

    // https://github.com/humbug/php-scoper#finders-and-paths
    'finders' => [
        /*
        Finder::create()
        ->files()
        ->in('src/Support')
        ->name([
        'Arr.php',
        'Str.php',
        'CodeExporter.php',
        ]),
         */
        Finder::create()
            ->files()
            ->ignoreVCS(true)
            ->notName('/LICENSE|.*\\.md|.*\\.dist|Makefile|composer\\.json|composer\\.lock/')
            ->exclude([
                'doc',
                'test',
                'test_old',
                'tests',
                'Tests',
                'vendor-bin',
            ])
            ->in('vendor'),
        Finder::create()->append([
            'composer.json',
        ]),
    ],

    'whitelist' => [
        'Sober\Intervention\*',
    ],
];
