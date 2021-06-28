<?php

namespace Sober\Intervention\Application\Media;

use Sober\Intervention\Application\OptionsApi;
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
    protected $sourceMap;

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

        // Format a source map with `media.sizes` to correlate with `Maps.php` data for `OptionsApi`
        $this->sourceMap = $this->config->keyBy(function ($value, $key) {
            return 'media.sizes.' . $key;
        });
        $this->api = OptionsApi::set($this->sourceMap);

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
        foreach ($this->sizes as $size) {
            // Group for specific `$size`
            $value = Composer::set($this->config)->group($size)->get();

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
                    $this->api->save('media.sizes.' . $size . '.width', $value->get('width'));
                }

                if ($value->has('height')) {
                    $this->api->save('media.sizes.' . $size . '.height', $value->get('height'));
                }

                if ($value->has('crop')) {
                    $this->api->save('media.sizes.' . $size . '.crop', $value->get('crop'));
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
}
