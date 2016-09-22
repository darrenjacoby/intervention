<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: add-svg-support
 *
 * Filters upload_mimes to add svg file support for user role/s.
 *
 * @example intervention('add-svg-support', $roles(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/upload_mimes/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class AddSvgSupport extends Instance
{
    public function run()
    {
        $this->setup();
        $this->addSvgSupport();
    }

    protected function setup()
    {
        $this->setDefaultConfig(['admin', 'editor', 'author']);
        $this->config = $this->aliasUserRoles($this->config);
    }

    public function addSvgSupport()
    {
        foreach ($this->config as $role) {
            if (current_user_can($role)) {
                add_filter('upload_mimes', function ($mimes) {
                    $mimes['svg'] = 'image/svg+xml';
                    return $mimes;
                });
            }
        }
    }
}
