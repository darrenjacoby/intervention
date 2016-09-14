<?php namespace Sober\Intervention;

/**
 * Array Reference
 *
 * [module] instance module name
 * [args] instance config args
 * [roles] instance role args
 */
class Module
{
    public static function getInitialized()
    {
        global $_sober_intervention;
        return $_sober_intervention;
    }

    public static function getInitializedList()
    {
        $modules = self::getInitialized();
        $modules_list = [];
        if ($modules) {
            foreach ($modules as $module) {
                $modules_list[] = $module['module'];
            }
        }
        return $modules_list;
    }

    public static function getFromFile($file)
    {
        return basename($file, '.php');
    }

    public static function setInstance($module, $config, $roles)
    {
        if ($module) {
            global $_sober_intervention;
            $config = Util::toArray($config);
            $roles = Util::toArray($roles);
            $_sober_intervention[] = ['module' => $module, 'config' => $config, 'roles' => $roles];
        }
    }

    public static function getInstances($file, $all = true)
    {
        $modules = self::getInitialized();
        $module = self::getFromFile($file);
        $args = [];
        // Run through all modules
        foreach ($modules as $instance) {
            // If module file/func matches instance
            if (in_array($module, $instance)) {
                $args[] = ['config' => $instance['config'], 'roles' => $instance['roles']];
            }
        }
        if ($all) {
            return $args;
        } else {
            return end($args);
        }
    }
}
