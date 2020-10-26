<?php
/**
 * Based on Laravel Helper Str
 *
 * @link https://github.com/laravel/framework/blob/7.x/src/Illuminate/Support/Str.php
 */
namespace Sober\Intervention\Support;

use Illuminate\Support\Collection;

/**
 * String
 * 
 * Helper class for strings.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Str
{
    /**
     * Convert the given string to lower-case.
     *
     * @param string $value
     * @return string
     */
    public static function lower($value)
    {
        return mb_strtolower($value, 'UTF-8');
    }

    /**
     * Explode the string into an array.
     *
     * @link https://laravel.com/docs/8.x/collections
     *
     * @param string $delimiter
     * @param int $limit
     * @return \Illuminate\Support\Collection
     */
    public static function explode($delimiter, $value, $limit = PHP_INT_MAX)
    {
        return collect(explode($delimiter, $value, $limit));
    }

    /**
     * Determine if a given string contains a given substring.
     *
     * @param string $haystack
     * @param string|string[] $needles
     * @return bool
     */
    public static function contains($haystack, $needles)
    {
        foreach ((array) $needles as $needle) {
            if ($needle !== '' && mb_strpos($haystack, $needle) !== false) {
                return true;
            }
        }

        return false;
    }

    /**
     * Determine if a given string contains all array values.
     *
     * @param string $haystack
     * @param string[] $needles
     * @return bool
     */
    public static function containsAll($haystack, array $needles)
    {
        foreach ($needles as $needle) {
            if (!static::contains($haystack, $needle)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Determine if a given string starts with a given substring.
     *
     * @param string $haystack
     * @param string|string[] $needles
     * @return bool
     */
    public static function startsWith($haystack, $needles)
    {
        foreach ((array) $needles as $needle) {
            if ((string) $needle !== '' && strncmp($haystack, $needle, strlen($needle)) === 0) {
                return true;
            }
        }

        return false;
    }

    /**
     * Replace the first occurrence of a given value in the string.
     *
     * @param string $search
     * @param string $replace
     * @param string $subject
     * @return string
     */
    public static function replaceFirst($search, $replace, $subject)
    {
        if ($search == '') {
            return $subject;
        }

        $position = strpos($subject, $search);

        if ($position !== false) {
            return substr_replace($subject, $replace, $position, strlen($search));
        }

        return $subject;
    }

    /**
     * Convert a value to studly caps case.
     *
     * @param string $value
     * @return string
     */
    public static function studly($value)
    {
        return ucwords(str_replace(['-', '_'], ' ', $value));
    }

    /**
     * Replace all values.
     *
     * @param string|array $search
     * @param string $replace
     * @param string $value
     * @return string
     */
    public static function replace($search, $replace, $value)
    {
        return str_replace($search, $replace, $value);
    }
}
