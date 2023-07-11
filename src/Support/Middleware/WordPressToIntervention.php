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
class WordPressToIntervention
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
        $bools = [
            'general.membership',
            'reading.rss-excerpt',
            'reading.discourage-search',
            'discussion.post.ping-flag',
            'discussion.comments.name-email',
            'discussion.comments.registration',
            'discussion.comments.close',
            'discussion.comments.cookies',
            'discussion.comments.thread',
            'discussion.comments.pages',
            'discussion.emails.comment',
            'discussion.emails.moderation',
            'discussion.moderation.approve-manual',
            'discussion.moderation.approve-previous',
            'discussion.avatars',
            'media.sizes.thumbnail.crop',
            'media.uploads.organize',
        ];

        $open_closed = [
            'discussion.post.ping-status',
            'discussion.post.comments',
        ];

        $empty_strings = [
            'discussion.avatars',
            'media.sizes.thumbnail.crop',
            'media.uploads.organize',
        ];

        if (in_array($key, $empty_strings)) {
            $value = self::emptyStringToBoolean($value);
        }

        if ($key === 'reading.rss-excerpt') {
            $value = self::numberToRssExcerpt($value);
        }

        if ($key === 'writing.default-post-format') {
            $value = self::zeroToStandard($value);
        }

        if ($key === 'general.week-starts') {
            $value = self::numberToWeekDay($value);
        }

        if (in_array($key, $open_closed)) {
            $value = self::openClosedToBoolean($value);
        }

        if (in_array($key, $bools)) {
            $value = self::numberToBoolean($value);
        }

        $value = self::stringToInteger($value);

        return $value;
    }

    /**
     * Number To Boolean
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
    public static function numberToBoolean($value)
    {
        if (is_numeric($value)) {
            return $value === '1' ? true : false;
        }

        return $value;
    }

    /**
     * String To Integer
     *
     * @param integer $value
     * @return string
     */
    public static function stringToInteger($value)
    {
        return is_numeric($value) ? intval($value) : $value;
    }

    /**
     * Open Closed To Boolean
     *
     * Transform string `open/closed` to boolean.
     *
     * @see discussion.post.ping-status
     * @see discussion.post.comments
     *
     * @param boolean $value
     * @return string
     */
    public static function openClosedToBoolean($value)
    {
        if (is_string($value)) {
            return $value === 'closed' || $value === '' ? false : true;
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
    public static function numberToWeekDay($value)
    {
        $value = intval($value);

        $days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];

        if ($value < 7) {
            return $days[$value];
        }

        return $value;
    }

    /**
     * Zero To Standard
     *
     * Transform string `standard` to `0`.
     *
     * @see writing.default-post-format
     *
     * @param integer $value
     * @return string
     */
    public static function zeroToStandard($value)
    {
        return $value === '0' ? 'standard' : $value;
    }

    /**
     * Number To RSS Excerpt
     *
     * Transform string `standard` to 0.
     *
     * @see reading.rss-excerpt
     *
     * @param integer $value
     * @return string
     */
    public static function numberToRssExcerpt($value)
    {
        $map = [
            '0' => 'full',
            '1' => 'summary',
        ];

        if (isset($map[$value])) {
            return $map[$value];
        }

        return $value;
    }

    /**
     * Empty String To Boolean
     *
     * Transform string `standard` to 0.
     *
     * @see reading.rss-excerpt
     *
     * @param integer $value
     * @return string
     */
    public static function emptyStringToBoolean($value)
    {
        return $value === '' ? false : $value;
    }
}
