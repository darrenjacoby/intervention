<?php

namespace Jacoby\Intervention\Support\Middleware;

use Jacoby\Intervention\Support\Str;

/**
 * Middleware/InterventionToWordPress
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class InterventionToWordPress
{
    /**
     * Transform
     *
     * Run tasks on all value transforms with the help of the key.
     *
     * @param string $key
     * @param mixed $value
     * @return mixed
     */
    public static function transform($key, $value)
    {
        if (in_array($key, ['discussion.post.ping-status', 'discussion.post.comments'])) {
            $value = self::booleanToOpenClosed($value);
        }

        if ($key === 'general.week-starts') {
            $value = self::weekDayToNumber($value);
        }

        if ($key === 'writing.default-post-format') {
            $value = self::standardToZero($value);
        }

        if ($key === 'reading.rss-excerpt') {
            $value = self::rssExcerptToNumber($value);
        }

        $value = self::booleanToNumber($value);
        $value = self::integerToString($value);

        return $value;
    }

    /**
     * Boolean To Number
     *
     * Transform bools to `string '0'/'1'`
     *
     * @see general.membership
     * @see reading.rss-excerpt
     * @see reading.discourage-search
     * @see discussion.post.ping-flag
     * @see discussion.comments.name-email
     * @see discussion.comments.registration
     * @see discussion.comments.close
     * @see discussion.comments.cookies
     * @see discussion.comments.thread
     * @see discussion.comments.pages
     * @see discussion.emails.comment
     * @see discussion.emails.moderation
     * @see discussion.moderation.approve-manual
     * @see discussion.moderation.approve-previous
     * @see discussion.avatars
     * @see media.sizes.thumbnail.crop
     * @see media.uploads.organize
     *
     * @param boolean $value
     * @return string
     */
    public static function booleanToNumber($value)
    {
        if (is_bool($value)) {
            return $value === true ? '1' : '0';
        }

        return $value;
    }

    /**
     * Integer To String
     *
     * @param integer $value
     * @return string
     */
    public static function integerToString($value)
    {
        return is_int($value) ? strval($value) : $value;
    }

    /**
     * Boolean To Open Closed
     *
     * Transform bools to string `open/closed`.
     *
     * @see discussion.post.ping-status
     * @see discussion.post.comments
     *
     * @param boolean $value
     * @return string
     */
    public static function booleanToOpenClosed($value)
    {
        if (is_bool($value)) {
            return $value === true ? 'open' : 'closed';
        }

        return $value;
    }

    /**
     * Week Day To Number
     *
     * Transform `Sunday-Saturday`.to string `0-6`.
     *
     * @see general.week-starts
     *
     * @param integer $value
     * @return string
     */
    public static function weekDayToNumber($value)
    {
        $day = Str::lower($value);

        $days = [
            'sunday' => '0',
            'sun' => '0',
            'monday' => '1',
            'mon' => '1',
            'tuesday' => '2',
            'tue' => '2',
            'wednesday' => '3',
            'wed' => '3',
            'thursday' => '4',
            'thu' => '4',
            'friday' => '5',
            'fri' => '5',
            'saturday' => '6',
            'sat' => '6',
        ];

        // return value of array item
        if (is_string($day) && isset($days[$day])) {
            return $days[$day];
        }

        return $value;
    }

    /**
     * Standard To Zero
     *
     * Transform string `standard` to `0`.
     *
     * @see writing.default-post-format
     *
     * @param integer $value
     * @return string
     */
    public static function standardToZero($value)
    {
        return $value === 'standard' ? '0' : $value;
    }

    /**
     * RSS Excerpt To Number
     *
     * Transform string `standard` to 0.
     *
     * @see reading.rss-excerpt
     *
     * @param integer $value
     * @return string
     */
    public static function rssExcerptToNumber($value)
    {
        $map = [
            'full' => '0',
            'full-text' => '0',
            'summary' => '1',
        ];

        if (isset($map[$value])) {
            return $map[$value];
        }

        return $value;
    }
}
