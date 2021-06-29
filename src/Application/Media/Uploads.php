<?php

namespace Sober\Intervention\Application\Media;

use Sober\Intervention\Application\OptionsApi;
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
        $this->config = Arr::normalize($config);
        $this->api = OptionsApi::set($this->config);
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('after_setup_theme', [$this, 'options']);
        add_action('admin_head-options-media.php', [$this->api, 'disableKeys']);
    }

    /**
     * Options
     */
    public function options()
    {
        if ($this->config->has('media.uploads.organize')) {
            $value = (int) $this->config->get('media.uploads.organize');
            $this->api->save('media.uploads.organize', $value);
        }
    }
}
