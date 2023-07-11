<?php

namespace Jacoby\Intervention\Support;

/**
 * Composer
 *
 * Custom helper class for \Illuminate\Support\Collection.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Composer
{
    protected $config;
    protected $key = true;

    /**
     * Interface
     *
     * @param \Illuminate\Support\Collection $config
     */
    public static function set($config = false)
    {
        return new self($config);
    }

    /**
     * Initialize
     *
     * @param string $key
     */
    public function __construct($config = false)
    {
        $this->config = $config;
    }

    /**
     * Has
     *
     * @return object $this
     */
    public function has($key)
    {
        $this->key = $this->config->has($key) ? $key : false;

        return $this;
    }

    /**
     * Add
     *
     * Update `$this->config` with new entries
     *
     * @param string $prefix
     * @param array $arr
     * @return object $this
     */
    public function add($prefix, $array)
    {
        if (!$this->key) {
            return $this;
        }

        Arr::collect($array)
            ->values()
            ->map(function ($item) use ($prefix) {
                if (!$this->config->get($prefix . $item)) {
                    $value = !is_bool($this->config->get($this->key)) ?
                    $this->config->get($this->key) :
                    true;
                    $this->config->put($prefix . $item, $value);
                }
            });

        return $this;
    }

    /**
     * Group
     *
     * Update `$this->config` keys and values to the group
     *
     * @param string $group
     * @return object $this
     */
    public function group($group)
    {
        if (!$this->key) {
            return $this;
        }

        $selection = $this->config->filter(function ($v, $k) use ($group) {
            if (Str::startsWith($k, $group)) {
                return $k;
            }
        });

        $keys = $selection
            ->keys()
            ->map(function ($v) use ($group) {
                return Str::replaceFirst($group . '.', '', $v);
            });

        $values = $selection
            ->values()
            ->map(function ($v) use ($group) {
                return $v;
            });

        $this->config = $keys->combine($values);

        return $this;
    }

    /**
     * Forget Group
     *
     * Update `$this->config` keys to remove group
     *
     * @param array $groups
     * @return object $this
     */
    public function forgetGroup($group)
    {
        if (!$this->key) {
            return $this;
        }

        $this->config = $this->config->filter(function ($v, $k) use ($group) {
            if (!Str::startsWith($k, $group)) {
                return $k;
            }
        });

        return $this;
    }

    /**
     * Group Keys
     *
     * Return keys as collection
     *
     * @param string $group
     * @return object $this
     */
    public function groupKeys($group)
    {
        if (!$this->key) {
            return $this;
        }

        $this->config = $this->config->filter(function ($v, $k) use ($group) {
            if (Str::startsWith($k, $group)) {
                return $k;
            }
        })
            ->keys()
            ->map(function ($v) use ($group) {
                return Str::replaceFirst($group . '.', '', $v);
            });

        return $this;
    }

    /**
     * Unique First Keys
     *
     * Return keys as collection
     *
     * @return object $this
     */
    public function uniqueFirstKeys()
    {
        if (!$this->key) {
            return $this;
        }

        $this->config = $this->config
            ->keys()
            ->map(function ($item) {
                $first_key = Str::explode('.', $item)[0];
                return $first_key;
            })
            ->unique()
            ->values();

        return $this;
    }

    /**
     * Remove First Dot Notation Keys
     *
     * Return group excluding first key as collection
     *
     * @return object $this
     */
    public function removeFirstKey()
    {
        if (!$this->key) {
            return $this;
        }

        $this->config = $this->config
            ->keys()
            ->map(function ($k) {
                $remove = explode('.', $k)[0];
                return Str::replaceFirst($remove . '.', '', $k);
            })
            ->combine($this->config->values());

        return $this;
    }

    /**
     * Get
     *
     * Return `$this->config`
     *
     * @return \Illuminate\Support\Collection
     */
    public function get()
    {
        return $this->config;
    }
}
