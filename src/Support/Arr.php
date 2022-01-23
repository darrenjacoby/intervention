<?php

namespace Sober\Intervention\Support;

use Sober\Intervention\Illuminate\Support\Collection;

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
     * Return `static::dot` and `static::collect`.
     *
     * @param array $array
     * @return \Illuminate\Support\Collection
     */
    public static function normalize($array)
    {
        // $array = static::transformEntriesToTrue($array);
        $array = static::dot($array);
        $array = static::collect($array);

        return $array;
    }

    /**
     * Normalize to True
     *
     * Return `static::transformEntriesToTrue`, `static::dot` and `static::collect`.
     *
     * @param array $array
     * @return \Illuminate\Support\Collection
     */
    public static function normalizeTrue($array)
    {
        $array = static::transformEntriesToTrue($array);
        $array = static::normalize($array);

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
        return new Collection($array);
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
     * Transform Keys To Dashcase
     *
     * Recursively transform multidimensional associative array keys to snakecase
     *
     * @link https://stackoverflow.com/questions/7490105/array-walk-recursive-modify-both-keys-and-values/57622225#57622225
     *
     * @param array $array
     * @return array
     */
    /*
    public static function transformKeysToDashcase($array)
    {
    return static::transform($array, function ($k, $v) {
    return [str_replace('_', '-', $k), $v];
    });
    }
     */

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
            // check for [0 => 'key'] and make sure the value is not an array
            return is_numeric($k) && !is_array($v) ? [$v, true] : [$k, $v];
        });
    }

    /**
     * Transform Entries From True
     *
     * Recursively transform multidimensional associative array true entries to null
     *
     * @link https://stackoverflow.com/questions/7490105/array-walk-recursive-modify-both-keys-and-values/57622225#57622225
     *
     * @param array $array
     * @return array
     */
    public static function transformEntriesFromTrue($array)
    {
        return static::transform($array, function ($k, $value) {
            // check for [0 => 'key'] and make sure the value is not an array
            $all_entries_are_true = false;

            // check if value is array
            if (is_array($value)) {
                $value_arr = static::collect($value);

                $all_entries_are_true = $value_arr->every(function ($v, $k) {
                    return $v === true;
                });

                if ($all_entries_are_true) {
                    $value = $value_arr->keys()->all();
                }
            }

            return [$k, $value];
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
        if (!$array) {
            return;
        }

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

    /**
     * Multidimension First Key
     *
     * Extract first keys into separate arrays.
     *
     * `['general.site-title' => $x]` to `['general' => ['site-title' => $x]]`
     *
     * @param array $array
     * @return array
     */
    public static function multidimensionalFirstKey($array)
    {
        return $array->reduce(function ($carry, $v, $k) {
            /**
             * Explode key into an array using `.` as the delimiter.
             */
            $key_arr = explode('.', $k);

            /**
             * Only proceed to split if the delimiter exists in the key.
             */
            if (count($key_arr) > 1) {
                $key_first = array_shift($key_arr);
                $key_next = join($key_arr, '.');
                $carry[$key_first][$key_next] = $v;
            } else {
                $carry[$k] = $v;
            }

            return $carry;
        }, []);
    }

    /**
     * Sort Array By Order Array
     *
     * Order an array based on an order array containing all the keys. Used for `Export.php` admin export.
     *
     * @link https://stackoverflow.com/questions/348410/sort-an-array-by-keys-based-on-another-array
     *
     * @param array $array
     * @param array $orderArray
     * @return array
     */
    public static function sortArrayByOrderArray($array, $orderArray)
    {
        $ordered = [];
        foreach ($orderArray as $key) {
            if (array_key_exists($key, $array)) {
                $ordered[$key] = $array[$key];
                unset($array[$key]);
            }
        }
        return $ordered + $array;
    }
}
