<?php namespace Sober\Intervention;

class Util
{
    public static function isArrayValueSet($pos, $arr)
    {
        if (is_array($arr) && array_key_exists($pos, $arr) && !empty($arr[$pos])) {
            return true;
        }
    }

    public static function toArray($arg)
    {
        if (!is_array($arg)) {
            return [$arg];
        } else {
            return $arg;
        }
    }

    public static function escapeArray($arr)
    {
        if (is_array($arr)) {
            return current($arr);
        } else {
            return $arr;
        }
    }
}
