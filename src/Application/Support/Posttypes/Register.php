<?php

namespace Jacoby\Intervention\Application\Support\Posttypes;

use Jacoby\Intervention\Support\Arr;

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
     * @return Jacoby\Intervention\Application\Support\Posttypes\Register
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
        // $this->setSupports();
        // $this->setTemplate();
        // $this->setTaxonomies();
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
     * Transform from [$x => true, $y = true] to [$x, $y] and convert to dashcase
     *
     * @param string $this->config
     */
    /*
    public function setSupports()
    {
    if ($this->config->has('supports')) {
    $supports = Arr::transformKeysToDashcase($this->config->get('supports'));
    $keys = Arr::collect($supports)->keys()->toArray();
    $this->config->put('supports', $keys);
    }
    }
     */

    /**
     * Set Template
     *
     * Transform from ['core/x' => true] to [0 => 'core/x']
     *
     * @param string $this->config
     */
    /*
    public function setTemplate()
    {
    if ($this->config->has('template')) {
    $template = $this->config->pull('template');
    $template = Arr::transform($template, function ($k, $v) {
    return $v === true ? [0, $k] : [$k, $v];
    });
    $this->config->put('template', $template);
    }
    }
     */

    /**
     * Set Taxonomies
     *
     * Transform from [$x => true, $y = true] to [$x, $y]
     *
     * @param string $this->config
     */
    /*
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
     */

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
