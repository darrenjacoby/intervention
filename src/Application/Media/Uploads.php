<?php

namespace Sober\Intervention\Application\Media;

use Sober\Intervention\Application\Support\Element;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Media/Uploads
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/after_setup_theme/
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/functions/update_option/
 *
 * @param
 * [
 *     'media.uploads.organize' => (boolean) $enable_upload_organization,
 * ]
 */
class Uploads
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Composer::set(Arr::normalize($config));
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('after_setup_theme', [$this, 'options']);
        add_action('admin_head-options-media.php', [$this, 'admin']);
    }

    /**
     * Options
     */
    public function options()
    {
        if ($this->config->has('media.uploads.organize')) {
            update_option('uploads_use_yearmonth_folders', $this->config->get('media.uploads.organize'));
        }
    }

    /**
     * Admin
     */
    public function admin()
    {
        if ($this->config->has('media.uploads.organize')) {
            Element::disabled('#uploads_use_yearmonth_folders');
        }
    }
}
