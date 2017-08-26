<?php

namespace Sober\Intervention;

/**
 * Setup $loader object from function intervention
 *
 * @param string $module
 * @param string|array $config
 * @param string|array $roles
 */
function intervention($module = false, $config = false, $roles = false)
{
    $class = __NAMESPACE__ . '\Module\\' . str_replace('-', '', ucwords($module, '-'));
    $instance = (new $class($config, $roles))->run();
}
