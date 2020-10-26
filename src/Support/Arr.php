<?php

namespace Sober\Intervention\Support;

use Illuminate\Support\Collection;

/**
 * Array
 * 
 * Laravel based helper class for arrays.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 * 
 * @link https://github.com/laravel/framework/blob/7.x/src/Illuminate/Support/Arr.php
 */
class Arr
{
    /**
     * Normalize
     *
     * Return `static::transform`, `static::dot` and `static::collect`.
     *
     * @param array $array
     * @return \Illuminate\Support\Collection
     */
    public static function normalize($array)
    {
        $array = static::transformEntriesToTrue($array);
        $array = static::dot($array);
        $array = static::collect($array);

        return $array;
    }

    /**
     * Collect
     *
     * Return Illuminate\Support\Collection `collect()` function.
     *
     * @link https://laravel.com/docs/8.x/collections
     *
     * @param array $array
     * @return \Illuminate\Support\Collection
     */
    public static function collect($array)
    {
        return collect($array);
    }

    /**
     * Flatten a multi-dimensional associative array with dots.
     *
     * @link https://github.com/laravel/framework/blob/7.x/src/Illuminate/Support/Arr.php#L102
     *
     * @param array $array
     * @param string $prepend
     * @return array
     */
    public static function dot($array, $prepend = '')
    {
        $results = [];

        foreach ($array as $key => $value) {
            if (is_array($value) && !empty($value)) {
                $results = array_merge($results, static::dot($value, $prepend . $key . '.'));
            } else {
                $results[$prepend . $key] = $value;
            }
        }

        return $results;
    }

    /**
     * Expand a dot notation array to a multi-dimensional associative array.
     *
     * @link https://stackoverflow.com/questions/9635968/convert-dot-syntax-like-this-that-other-to-multi-dimensional-array-in-php/39118759
     *
     * @param array $array
     * @param string $separator
     * @return array
     */
    public static function multidimensional($array, $separator = '.')
    {
        $results = [];

        foreach ($array as $k => $v) {
            static::set($results, $k, $v);
        }

        return $results;
    }

    /**
     * Transform Keys To Snakecase
     *
     * Recursively transform multidimensional associative array keys to snakecase
     *
     * @link https://stackoverflow.com/questions/7490105/array-walk-recursive-modify-both-keys-and-values/57622225#57622225
     *
     * @param array $array
     * @return array
     */
    public static function transformKeysToSnakecase($array)
    {
        return static::transform($array, function ($k, $v) {
            return [str_replace('-', '_', $k), $v];
        });
    }

    /**
     * Transform Entries To True
     *
     * Recursively transform multidimensional associative array null entries to true
     *
     * @link https://stackoverflow.com/questions/7490105/array-walk-recursive-modify-both-keys-and-values/57622225#57622225
     *
     * @param array $array
     * @return array
     */
    public static function transformEntriesToTrue($array)
    {
        return static::transform($array, function ($k, $v) {
            return is_numeric($k) ? [$v, true] : [$k, $v];
        });
    }

    /**
     * Transform
     *
     * Recursively transform multidimensional associative array using a callback filter.
     *
     * @link https://stackoverflow.com/questions/7490105/array-walk-recursive-modify-both-keys-and-values/57622225#57622225
     *
     * @param array &$array
     * @param function $callback
     * @return array
     */
    public static function transform(&$array, $callback)
    {
        $keys = array_keys($array);

        foreach ($keys as $index => $k) {
            $v = &$array[$k];

            if (is_array($v)) {
                static::transform($v, $callback);
            }

            [$key, $value] = $callback($k, $v);
            $keys[$index] = $key;
            $array[$k] = $value;
        }

        $array = array_combine($keys, $array);

        return $array;
    }

    /**
     * Set an array item to a given value using "dot" notation.
     *
     * If no key is given to the method, the entire array will be replaced.
     *
     * @param array $array
     * @param string|null $key
     * @param mixed $value
     * @return array
     */
    public static function set(&$array, $key, $value)
    {
        if (is_null($key)) {
            return $array = $value;
        }

        $keys = explode('.', $key);

        foreach ($keys as $i => $key) {
            if (count($keys) === 1) {
                break;
            }

            unset($keys[$i]);

            /**
             * If the key doesn't exist at this depth, we will just create an empty array
             * to hold the next value, allowing us to create the arrays to hold final
             * values at the correct depth. Then we'll keep digging into the array.
             */
            if (!isset($array[$key]) || !is_array($array[$key])) {
                $array[$key] = [];
            }

            $array = &$array[$key];
        }

        $array[array_shift($keys)] = $value;

        return $array;
    }
}
