<?php

namespace Sober\Intervention;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;
use Sober\Intervention\Support\Config;
use Sober\Intervention\Support\Str;
use Sober\Intervention\UserInterface\Admin as UserInterfaceAdmin;

/**
 * Intervention
 *
 * Loader for the config file.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Intervention
{
    /**
     * Construct
     *
     * @param array $config
     */
    public function __construct($config = false, $is_config_file = false)
    {
        if (!$config) {
            return;
        }

        $admin = Composer::set(Arr::normalizeTrue($config))
            ->group('wp-admin')
            ->get();

        if ($is_config_file) {
            UserInterfaceAdmin::set($admin);
        }

        Config::get('admin/routing')->map(function ($class, $k) use ($admin) {
            $this->initRoleFromConfigFile($admin, $class, $k);
        });

        $application = Composer::set(Arr::normalize($config))
            ->group('application')
            ->get();

        Config::get('application/routing')->map(function ($class, $k) use ($application) {
            $this->init($application, $class, $k);
        });
    }

    /**
     * Init
     *
     * Filter group keys and init class
     *
     * @param array $group
     * @param string $class
     * @param string $str
     */
    public static function init($group, $class, $str)
    {
        $init = $group->filter(function ($v, $k) use ($str) {
            if (Str::startsWith($k, $str)) {
                return $k;
            }
        });

        if ($init->isNotEmpty()) {
            $class = __NAMESPACE__ . '\\' . $class;
            new $class($init->toArray());
        }
    }

    /**
     * Init Role From Config File
     *
     * Filter user roles and pass to $this->init()
     *
     * @param array $group
     * @param string $class
     * @param string $str
     */
    protected function initRoleFromConfigFile($group, $class, $str)
    {
        add_action('plugins_loaded', function () use ($group, $class, $str) {
            $wp_roles = new \WP_Roles();
            $current_user = wp_get_current_user();

            /**
             * Support multisite
             *
             * WordPress passes `$current_user->roles` as an empty array
             * when the user is a super-administrator on a multisite setup,
             * so we manually add 'administrator' to `$current_user->roles`
             */
            if (is_multisite() && empty($current_user->roles)) {
                $current_user->roles = ['administrator'];
            }

            $init = $group->filter(function ($v, $k) use ($str, $wp_roles, $current_user) {
                $key = Str::explode('.', $k);
                $roles = Str::explode('|', $key->shift());

                /**
                 * Alias for all-not-administrator
                 */
                if ($roles->contains('all-not-administrator')) {
                    foreach ($wp_roles->get_names() as $role => $v) {
                        if ($role === 'administrator') {
                            continue;
                        }
                        $roles->push($role);
                    }

                    // remove from collection
                    $roles->pull('all-not-administrator');
                }

                $role_allowed = $roles
                    ->values()
                    ->map(function ($role) use ($current_user) {
                        if (in_array($role, $current_user->roles) || $role === 'all' || $role === $current_user->user_login) {
                            return true;
                        }
                    });

                if ($role_allowed->contains(true)) {
                    return $k;
                }
            });

            $config = Composer::set($init)
                ->removeFirstKey()
                ->get();

            $this->init($config, $class, $str);
        });
    }
}
