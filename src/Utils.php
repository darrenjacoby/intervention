<?php

namespace Sober\Intervention;

trait Utils
{
    /**
     * Determine if array value has been set
     *
     * @param int $pos
     * @param array $arr
     * @return bool
     */
    public function isArrayValueSet($pos, $arr)
    {
        if (is_array($arr) && array_key_exists($pos, $arr) && !empty($arr[$pos])) {
            return true;
        }
    }

    /**
     * If parameter is string, convert to array
     *
     * @param string|array $param
     * @return array
     */
    public function toArray($param)
    {
        if (!is_array($param)) {
            return [$param];
        } else {
            return $param;
        }
    }

    /**
     * If parameter is array, convert to string
     *
     * @param string|array $param
     * @return string
     */
    public function escArray($param)
    {
        if (is_array($param)) {
            return current($param);
        } else {
            return $param;
        }
    }
}
