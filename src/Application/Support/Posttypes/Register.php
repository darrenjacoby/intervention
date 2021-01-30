<?php

namespace Sober\Intervention\Application\Support\Posttypes;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Support/Posttypes/Register
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/register_post_type/
 * @link https://github.com/johnbillion/extended-cpts
 */
class Register
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
        $this->config = $config;
        $this->setDefaults();
        $this->setSupports();
        $this->setTaxonomies();
        $this->register();
    }

    /**
     * Set Defaults
     *
     * Default public => true
     *
     * @param string $this->config
     */
    public function setDefaults()
    {
        $this->config = Arr::collect(['public' => true])->merge($this->config);
    }

    /**
     * Set Supports
     *
     * Transform from [$x => true, $y = true] to [$x, $y]
     *
     * @param string $this->config
     */
    public function setSupports()
    {
        if ($this->config->has('supports')) {
            $keys = Arr::collect($this->config->get('supports'))->keys()->toArray();
            $keys = array_map(function ($value) {
                return str_replace('_', '-', $value);
            }, $keys);
            $this->config->put('supports', $keys);
        }
    }

    /**
     * Set Taxonomies
     *
     * Transform from [$x => true, $y = true] to [$x, $y]
     *
     * @param string $this->config
     */
    public function setTaxonomies()
    {
        $taxonomies = $this->config->has('taxonomies') ?
            $this->config->pull('taxonomies') :
            false;

        if ($taxonomies) {
            $taxonomies = is_string($taxonomies) ?
                [$taxonomies] :
                Arr::collect($taxonomies)->keys()->toArray();

            $this->config->put('taxonomies', $taxonomies);
        }
    }

    /**
     * Register
     *
     * Create the post type.
     *
     * @param string $this->posttype
     */
    public function register()
    {
        $this->config = $this->config->toArray();

        if (function_exists('register_extended_post_type')) {
            register_extended_post_type($this->posttype, $this->config);
        } else {
            register_post_type($this->posttype, $this->config);
        }
    }
}
