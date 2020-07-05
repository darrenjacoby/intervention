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
        $this->setup()->addSvgSupport();
    }

    protected function setup()
    {
        $this->setDefaultConfig(['admin', 'editor', 'author']);
        $this->config = $this->aliasUserRoles($this->config);
        return $this;
    }

    public function addSvgSupport()
    {
        foreach ($this->config as $role) {
            if (current_user_can($role)) {
                add_filter('upload_mimes', function ($mimes) {
                    $mimes['svg'] = 'image/svg+xml';
                    return $mimes;
                });
                $this->addSvgBugFix();
            }
        }
    }

    protected function addSvgBugFix()
    {
        // WordPress v4.7.1+
        // http://codepen.io/chriscoyier/post/wordpress-4-7-1-svg-upload
        add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {
            global $wp_version;
            if ($wp_version === '4.7' || ((float) $wp_version < 4.7 )) {
                return $data;
            }

            $filetype = wp_check_filetype($filename, $mimes);

            return [
                'ext' => $filetype['ext'],
                'type' => $filetype['type'],
                'proper_filename' => $data['proper_filename']
            ];
        }, 10, 4);
    }
}
