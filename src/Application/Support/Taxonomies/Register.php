<?php

namespace Sober\Intervention\Application\Support\Taxonomies;

use Sober\Intervention\Application\Support\Taxonomies\Labels;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Str;

/**
 * Support/Taxonomies/Register
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/register_taxonomy/
 * @link https://github.com/johnbillion/extended-cpts
 */
class Register
{
    protected $taxonomy;
    protected $config;
    protected $links;

    /**
     * Interface
     *
     * @param string $taxonomy
     * @param string|array $config
     * @return Sober\Intervention\Application\Support\Posttypes\Register
     */
    public static function set($taxonomy = 'category', $config = false)
    {
        return new self($taxonomy, $config);
    }

    /**
     * Initialize
     *
     * @param string $taxonomy
     * @param string|array $config
     */
    public function __construct($taxonomy = 'category', $config = false)
    {
        $this->taxonomy = $taxonomy;
        $this->config = Arr::collect($config);
        $this->setLabels();
        $this->setLinks();
        $this->register();
    }

    /**
     * Set Labels
     *
     * Determine labels from `taxonomy.labels => (string|array)`, or taxonomy name.
     *
     * @param string|array $this->config
     */
    public function setLabels()
    {
        // Test `taxonomy => (boolean|string)`
        $one = $this->config->get($this->taxonomy);
        $one = $one === true ? Str::studly($this->taxonomy) : $one;
        $one = $this->config->has('one') ? $this->config->get('one') : $one;

        // Update `$this->config` with returned array from class `Labels`
        $labels = Labels::set($one, $this->config->get('many'), $this->config->get('labels'))->get();
        $this->config->put('labels', $labels);
    }

    /**
     * Set Links
     *
     * Required links for registering taxonomy.
     */
    public function setLinks()
    {
        $links = $this->config->has('links') ? 
            $this->config->pull('links') : 
            'post';

        $this->links = is_string($links) ? 
            [$links] : 
            Arr::collect($links)->keys()->toArray();
    }

    /**
     * Register
     *
     * Create the taxonomy.
     *
     * @param string $this->taxonomy
     */
    public function register()
    {
        $this->config = $this->config->toArray();

        if (function_exists('register_extended_taxonomy')) {
            register_extended_taxonomy($this->taxonomy, $this->links, $this->config);
        } else {
            register_taxonomy($this->taxonomy, $this->links, $this->config);
        }
    }
}
