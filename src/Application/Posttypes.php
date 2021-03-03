<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\Support\Posttypes\Labels;
use Sober\Intervention\Application\Support\Posttypes\Register;
use Sober\Intervention\Application\Support\Posttypes\Remove;
use Sober\Intervention\Application\Support\Posttypes\Update;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;
use Sober\Intervention\Support\Str;

/**
 * Posttypes
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'posts.{name}' => (boolean|string|array) $enable|$label|$config,
 * ]
 */
class Posttypes
{
    protected $posttypes;
    protected $configs;
    protected $posttype;
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = [])
    {
        // Set `$this->config` to group `posttypes`
        $this->configs = Arr::transformKeysToSnakecase($config);

        $this->configs = Composer::set(Arr::normalize($this->configs))
            ->group('posttypes')
            ->get();

        // Set `$this->posttypes` with unique posttypes
        $this->posttypes = Composer::set($this->configs)
            ->uniqueFirstKeys()
            ->get();

        $this->hook();
    }

    /**
     * Hook
     *
     * Loop through each post type, set paramaters and route.
     */
    public function hook()
    {
        add_action('init', function () {
            foreach ($this->posttypes as $posttype) {
                $this->posttype = $posttype;
                $this->config = Composer::set($this->configs)
                    ->group($this->posttype)
                    ->get();
                $this->config = Arr::collect(Arr::multidimensional($this->config));
                $this->setLabels();
                $this->route();
            }
        });
    }

    /**
     * Set Labels
     *
     * Required for `register()` and `update()`.
     *
     * @param string $this->config
     */
    public function setLabels()
    {
        // Test `posttype => (boolean|string)`
        $one = $this->config->get($this->posttype);
        $one = $one === true ? Str::studly($this->posttype) : $one;
        $one = $this->config->has('one') ? $this->config->get('one') : $one;

        if (!$one) {
            return;
        }

        // Update `$this->config` with returned array from class `Labels`
        $labels = Labels::set($one, $this->config->get('many'), $this->config->get('labels'))->get();
        $this->config->put('labels', $labels);
    }

    /**
     * Route
     *
     * Unregister, register or modify the posttype.
     *
     * @param string $this->posttype
     */
    public function route()
    {
        $value = $this->configs->get($this->posttype);
        $config = $this->config->toArray();

        if ($value === false) {
            Remove::set($this->posttype);
            return;
        }

        if (post_type_exists($this->posttype)) {
            Update::set($this->posttype, $this->config);
        } else {
            Register::set($this->posttype, $this->config);
        }
    }
}
