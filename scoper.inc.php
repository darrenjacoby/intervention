<?php

declare (strict_types = 1);

use Isolated\Symfony\Component\Finder\Finder;

return [
    'prefix' => 'Sober\Intervention',

    // https://github.com/humbug/php-scoper#finders-and-paths
    'finders' => [
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
    'patchers' => [
        function ($file_path, $prefix, $contents) {
            /**
             * Illuminate includes some helper functions which are declared as
             * globals. In order to namespace Intervention for WordPress, the
             * helper functions are being namespaced. To avoid errors, we need
             * to change the namespace of `helpers.php` to match the namespaces
             * of `Arr.php` and `Str.php`. The function `data_get` is also being
             * used under `Traits/` and should be namespaced correctly. This is
             * not ideal but currently the best option for dealing with Illuminate
             * collections and php-scoper.
             */
            if (strpos($file_path, 'vendor/illuminate/collections/helpers.php')) {
                $contents = str_replace('namespace Sober\\Intervention', 'namespace Sober\\Intervention\\Illuminate\\Support', $contents);
            }

            if (strpos($file_path, 'vendor/illuminate/collections/Traits/EnumeratesValues.php')) {
                $contents = str_replace('data_get(', '\\Sober\\Intervention\\Illuminate\\Support\data_get(', $contents);
            }
            return $contents;
        },

    ],
];
