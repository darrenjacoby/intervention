<?php

namespace Sober\Intervention\Application\Media;

use Sober\Intervention\Admin;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Media/Sizes
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/after_setup_theme/
 * @link https://developer.wordpress.org/reference/functions/update_option/
 * @link https://wordpress.stackexchange.com/questions/357955/wp-5-3-removing-default-wordpress-image-sizes
 *
 * @param
 * [
 *     'media.sizes.{name}' => (int) $width,
 *     'media.sizes.{name}.width' => (int) $width,
 *     'media.sizes.{name}.height' => (int) $height,
 *     'media.sizes.{name}.crop' => (bool) $crop,
 * ]
 */
class Sizes
{
    protected $config;
    protected $sizes;
    protected $defaults;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        // Set `$this->config` to group `media.sizes`
        $this->config = Composer::set(Arr::normalize($config))
            ->group('media.sizes')
            ->get();

        // Set `$this->sizes` with unique image sizes
        $this->sizes = Composer::set($this->config)
            ->uniqueFirstKeys()
            ->get();

        // Set `$this->defaults` with WordPress default image sizes
        $this->defaults = Arr::collect(['thumbnail', 'medium', 'large']);

        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('after_setup_theme', [$this, 'options']);

        $this->admin();
    }

    /**
     * Options
     */
    public function options()
    {
        foreach ($this->sizes as $size) {
            // Group for specific `$size`
            $value = Composer::set($this->config)
                ->group($size)
                ->get();

            // Shorthand `media.sizes.size => x`, remove key `$size` and replace with `width`
            $value = $value->get($size) ?
                $value->put('width', $value->get($size))->forget($size) :
                $value;
            
            // Shortcuts aliases for width and height
            if ($value->has('w')) {
                $value->put('width', $value->get('w'))->forget('w');
            }

            if ($value->has('h')) {
                $value->put('height', $value->get('h'))->forget('h');
            }

            if ($this->defaults->contains($size)) {
                // Default image sizes
                if ($value->get($size) === false) {
                    add_filter('intermediate_image_sizes', function ($sizes) use ($size) {
                        foreach ($sizes as $index => $v) {
                            if ($size === $v) {
                                unset($sizes[$index]);
                            }
                        }
    
                        return $sizes;
                    });
                }

                if ($value->has('width')) {
                    update_option($size . '_size_w', $value->get('width'));
                }

                if ($value->has('height')) {
                    update_option($size . '_size_h', $value->get('height'));
                }

                if ($value->has('crop')) {
                    update_option($size . '_crop', $value->get('crop'));
                }
            } else {
                // Custom image size
                if ($value->get($size) === false) {
                    remove_image_size($size);
                } else {
                    add_image_size($size, $value['width'], $value['height'] ?? 9999, $value['crop'] ?? false);
                }
            }
        }
    }

    /**
     * Admin
     */
    public function admin()
    {
        // Remove section
        if ($this->sizes->contains('thumbnail') &&
            $this->sizes->contains('medium') &&
            $this->sizes->contains('large')) {
            Admin::set('settings.media', ['sizes']);
        } else {
            // Else remove individual sections
            foreach ($this->sizes as $size) {
                if ($this->defaults->contains($size) &&
                    ($this->config->has($size . '.width') && $this->config->has($size . '.height')) ||
                    $this->config->get($size) === false) {
                    Admin::set('settings.media', ['sizes.' . $size]);
                }
            }
        }
    }
}
