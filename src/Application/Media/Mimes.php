<?php

namespace Sober\Intervention\Application\Media;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Media/Mimes
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/upload_mimes/
 * @link https://www.iana.org/assignments/media-types/media-types.xhtml
 *
 * @param
 * [
 *     'media.mimes.{name}' => (boolean|string) $enable_mime_type,
 * ]
 */
class Mimes
{
    protected $config;
    protected $supported;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Composer::set(Arr::normalize($config))
            ->group('media.mimes')
            ->get();

        $this->supported = Arr::collect([
            'svg' => 'image/svg+xml',
            'svgz' => 'image/svg+xml',
        ]);

        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('upload_mimes', [$this, 'mimes']);
    }

    /**
     * Mimes
     *
     * @param array $mimes
     * @return array
     */
    public function mimes($mimes)
    {

        $mimes = Arr::collect($mimes);

        foreach ($this->config as $mime => $value) {
            // Remove
            if ($value === false) {
                $mimes->forget($mime);
            }

            // Shorthand `$this->support`
            if ($this->supported->get($mime) && $value === true) {
                $mimes->put($mime, $this->supported->get($mime));
            }

            // User applied custom mime type
            if (is_string($value)) {
                $mimes->put($mime, $value);
            }
        }

        return $mimes->toArray();
    }
}
