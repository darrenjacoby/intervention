<?php
/**
 * Lavarel mix WordPress function
 *
 * @link https://github.com/mindkomm/theme-lib-mix/blob/master/mix.php
 */
namespace Sober\Intervention;

/**
 * Mix
 *
 * @return string
 */
function mix($path, $manifest_directory = 'assets')
{
    // path to `mix-manifest.json`
    $manifest_path = INTERVENTION_DIR . '/' . $manifest_directory . '/mix-manifest.json';

    // escape if `mix-manifest.json` is not found
    if (!file_exists($manifest_path)) {
        return;
    }

    // get manifest json file
    $manifest = json_decode(file_get_contents($manifest_path), true);

    // remove manifest directory from path
    $path = str_replace($manifest_directory, '', $path);

    // ensure there is a leading slash
    $path = '/' . ltrim($path, '/');

    // get file url from `mix-manifest.json`
    $path = $manifest[$path];

    // sanitise any leading slash
    $path = ltrim($path, '/');

    // return
    return plugin_dir_url(__FILE__) . trailingslashit($manifest_directory) . $path;
}
