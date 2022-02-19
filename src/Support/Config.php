<?php

namespace Jacoby\Intervention\Support;

use Jacoby\Intervention\Support\Arr;

/**
 * Config
 *
 * Helper for getting config files with empty array fallback.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Config
{
    /**
     * Interface
     *
     * @param string $file
     */
    public static function get($file)
    {
        $file = INTERVENTION_DIR . '/config/' . $file . '.php';

        $arr = file_exists($file) ? require $file : [];

        return Arr::collect($arr);
    }
}
