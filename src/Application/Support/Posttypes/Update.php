<?php

namespace Sober\Intervention\Application\Support\Posttypes;

use Sober\Intervention\Support\Arr;

/**
 * Support/Posttypes/Update
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/get_post_type_object/
 */
class Update
{
    protected $posttype;
    protected $config;

    /**
     * Interface
     *
     * @param string $posttype
     * @param string|array $config
     * @return Sober\Intervention\Application\Support\Posttypes\Register
     */
    public static function set($posttype = 'post', $config = false)
    {
        return new self($posttype, $config);
    }

    /**
     * Initialize
     *
     * @param string $posttype
     * @param string|array $config
     */
    public function __construct($posttype = 'post', $config = false)
    {
        $this->posttype = $posttype;
        $this->config = Arr::collect($config);
        $this->update();
    }

    /**
     * Update
     *
     * Update the post type.
     *
     * @param string $this->posttype
     */
    public function update()
    {
        $object = get_post_type_object($this->posttype);

        // Set `$object->labels` to `$this->config[labels]`
        if ($this->config->has('labels')) {
            $object->labels = (object) $this->config->pull('labels');
        }

        // Merge `$object->cap` with `$this->config[capabilities]`
        if ($this->config->has('capabilities')) {
            $capabilities = $this->config->pull('capabilities');
            $capabilities = Arr::collect($object->cap)->merge($capabilities);
            $object->cap = (object) $capabilities->toArray();
        }

        // Set `$_wp_post_type_features` to `$this->config[supports]`
        if ($this->config->has('supports')) {
            $GLOBALS['_wp_post_type_features'][$this->posttype] = $this->config->pull('supports');
        }

        // Set remaining `$object->{$key}` overrides from `$this->config`
        $this->config->map(function ($value, $key) use ($object) {
            $object->{$key} = $value;
        });
    }
}
