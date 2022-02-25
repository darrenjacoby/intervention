<?php
/**
 * This helper is needed to "trick" composer autoloader to load the prefixed files
 * Otherwise if owncloud/core contains the same libraries ( i.e. guzzle ) it won't
 * load the files, as the file hash is the same and thus composer would think this was already loaded
 *
 * More information also found here: https://github.com/humbug/php-scoper/issues/298
 */
$scoper_path = './vendor/composer';
$static_loader_path = $scoper_path . '/autoload_static.php';
echo "Fixing $static_loader_path \n";
$static_loader = file_get_contents($static_loader_path);
$static_loader = \preg_replace('/\'([A-Za-z0-9]*?)\' => __DIR__ \. (.*?),/', '\'a$1\' => __DIR__ . $2,', $static_loader);
file_put_contents($static_loader_path, $static_loader);
$files_loader_path = $scoper_path . '/autoload_files.php';
echo "Fixing $files_loader_path \n";
$files_loader = file_get_contents($files_loader_path);
$files_loader = \preg_replace('/\'(.*?)\' => (.*?),/', '\'a$1\' => $2,', $files_loader);
file_put_contents($files_loader_path, $files_loader);
