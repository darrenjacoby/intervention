<?php

namespace Sober\Intervention\Application\Support;

use Sober\Intervention\Support\Arr;

/**
 * Support/Maps
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Maps
{
    public const DB = [
        'general.site-title' => 'blogname',
        'general.tagline' => 'blogdescription',
        'general.wp-address' => 'siteurl',
        'general.site-address' => 'home',
        'general.admin-email' => 'admin_email',
        'general.membership' => 'users_can_register',
        'general.default-role' => 'default_role',
        'general.language' => 'language',
        'general.timezone' => 'timezone_string',
        'general.date-format' => 'date_format',
        'general.time-format' => 'time_format',
        'general.week-starts' => 'start_of_week',
        'writing.default-category' => 'default_category',
        'writing.default-post-format' => 'default_post_format',
        'writing.post-via-email.server' => 'mailserver_url',
        'writing.post-via-email.login' => 'mailserver_login',
        'writing.post-via-email.pass' => 'mailserver_pass',
        'writing.post-via-email.port' => 'mailserver_port',
        'writing.post-via-email.default-category' => 'default_email_category',
        'writing.update-services' => 'ping_sites',
        'reading.front-page' => 'show_on_front',
        'reading.front-page.page' => 'page_on_front',
        'reading.front-page.posts' => 'page_for_posts',
        'reading.posts-per-page' => 'posts_per_page',
        'reading.posts-per-rss' => 'posts_per_rss',
        'reading.rss-excerpt' => 'rss_use_excerpt',
        'reading.discourage-search' => 'blog_public',
        'discussion.post.ping-flag' => 'default_pingback_flag',
        'discussion.post.ping-status' => 'default_ping_status',
        'discussion.post.comments' => 'default_comment_status',
        'discussion.comments.name-email' => 'require_name_email',
        'discussion.comments.registration' => 'comment_registration',
        'discussion.comments.close' => 'close_comments_for_old_posts',
        'discussion.comments.close.days' => 'close_comments_days_old',
        'discussion.comments.cookies' => 'show_comments_cookies_opt_in',
        'discussion.comments.thread' => 'thread_comments',
        'discussion.comments.thread.depth' => 'thread_comments_depth',
        'discussion.comments.pages' => 'page_comments',
        'discussion.comments.pages.per-page' => 'comments_per_page',
        'discussion.comments.pages.default' => 'default_comments_page',
        'discussion.comments.order' => 'comment_order',
        'discussion.emails.comment' => 'comments_notify',
        'discussion.emails.moderation' => 'moderation_notify',
        'discussion.moderation.approve-manual' => 'comment_moderation',
        'discussion.moderation.approve-previous' => 'comment_previously_approved',
        'discussion.moderation.queue-links' => 'comment_max_links',
        'discussion.moderation.queue-keys' => 'moderation_keys',
        'discussion.moderation.disallowed-keys' => 'disallowed_keys',
        'discussion.avatars' => 'show_avatars',
        'discussion.avatars.rating' => 'avatar_rating',
        'discussion.avatars.default' => 'avatar_default',
        'media.sizes.thumbnail.width' => 'thumbnail_size_w',
        'media.sizes.thumbnail.height' => 'thumbnail_size_h',
        'media.sizes.thumbnail.crop' => 'thumbnail_crop',
        'media.sizes.medium.width' => 'medium_size_w',
        'media.sizes.medium.height' => 'medium_size_h',
        'media.sizes.large.width' => 'large_size_w',
        'media.sizes.large.height' => 'large_size_h',
        'media.uploads.organize' => 'uploads_use_yearmonth_folders',
        'permalinks.structure' => 'permalink_structure',
        'permalinks.category-base' => 'category_base',
        'permalinks.tag-base' => 'tag_base',
        'privacy.policy-page' => 'wp_page_for_privacy_policy',
    ];

    public const ELEMENT = [
        'general.site-title' => '#blogname',
        'general.tagline' => '#blogdescription',
        'general.wp-address' => '#siteurl',
        'general.site-address' => '#home',
        'general.admin-email' => '#new_admin_email',
        'general.membership' => '#users_can_register',
        'general.default-role' => '#default_role',
        'general.language' => '#WPLANG',
        'general.timezone' => '#timezone_string',
        'general.date-format' => 'input[name=date_format], #date_format_custom',
        'general.time-format' => 'input[name=time_format], #time_format_custom',
        'general.week-starts' => '#start_of_week',
        'writing.default-category' => '#default_category',
        'writing.default-post-format' => '#default_post_format',
        'writing.post-via-email.server' => '#mailserver_url',
        'writing.post-via-email.login' => '#mailserver_login',
        'writing.post-via-email.pass' => '#mailserver_pass',
        'writing.post-via-email.default-category' => '#default_email_category',
        'writing.post-via-email.port' => '#mailserver_port',
        'writing.update-services' => '#ping_sites',
        'reading.front-page' => 'input[name=show_on_front], #page_on_front',
        'reading.front-page.page' => 'input[name=show_on_front]',
        'reading.front-page.posts' => '#page_for_posts',
        'reading.posts-per-page' => '#posts_per_page',
        'reading.posts-per-rss' => '#posts_per_rss',
        'reading.rss-excerpt' => 'input[name=rss_use_excerpt]',
        'reading.discourage-search' => '#blog_public',
        'discussion.post.ping-flag' => '#default_pingback_flag',
        'discussion.post.ping-status' => '#default_ping_status',
        'discussion.post.comments' => '#default_comment_status',
        'discussion.comments.name-email' => '#require_name_email',
        'discussion.comments.registration' => '#comment_registration',
        'discussion.comments.close' => '#close_comments_for_old_posts',
        'discussion.comments.close.days' => '#close_comments_days_old',
        'discussion.comments.cookies' => '#show_comments_cookies_opt_in',
        'discussion.comments.thread' => '#thread_comments',
        'discussion.comments.thread.depth' => '#thread_comments_depth',
        'discussion.comments.pages' => '#page_comments',
        'discussion.comments.pages.per-page' => '#comments_per_page',
        'discussion.comments.pages.default' => '#default_comments_page',
        'discussion.comments.order' => '#comment_order',
        'discussion.emails.comment' => '#comments_notify',
        'discussion.emails.moderation' => '#moderation_notify',
        'discussion.moderation.approve-manual' => '#comment_moderation',
        'discussion.moderation.approve-previous' => '#comment_previously_approved',
        'discussion.moderation.queue-links' => '#comment_max_links',
        'discussion.moderation.queue-keys' => '#moderation_keys',
        'discussion.moderation.disallowed-keys' => '#disallowed_keys',
        'discussion.avatars' => '#show_avatars',
        'discussion.avatars.rating' => '.avatar-settings:nth-child(2) fieldset',
        'discussion.avatars.default' => '.avatar-settings:nth-child(3) fieldset',
        // @todo remove w/h shorthand duplicates
        'media.sizes.thumbnail' => '#thumbnail_size_w, #thumbnail_size_h',
        'media.sizes.thumbnail.width' => '#thumbnail_size_w',
        'media.sizes.thumbnail.w' => '#thumbnail_size_w',
        'media.sizes.thumbnail.height' => '#thumbnail_size_h',
        'media.sizes.thumbnail.h' => '#thumbnail_size_h',
        'media.sizes.thumbnail.crop' => '#thumbnail_crop',
        'media.sizes.medium' => '#medium_size_w, #medium_size_h',
        'media.sizes.medium.width' => '#medium_size_w',
        'media.sizes.medium.w' => '#medium_size_w',
        'media.sizes.medium.height' => '#medium_size_h',
        'media.sizes.medium.h' => '#medium_size_h',
        'media.sizes.large' => '#large_size_w, #large_size_h',
        'media.sizes.large.width' => '#large_size_w',
        'media.sizes.large.w' => '#large_size_w',
        'media.sizes.large.height' => '#large_size_h',
        'media.sizes.large.h' => '#large_size_h',
        'media.uploads.organize' => '#uploads_use_yearmonth_folders',
        'permalinks.structure' => '.permalink-structure input[type=radio], #permalink_structure, .available-structure-tags button',
        'permalinks.category-base' => '#category_base',
        'permalinks.tag-base' => '#tag_base',
        'privacy.policy-page' => '#page_for_privacy_policy, #set-page, #create-page',
    ];

    /**
     * Set
     *
     * @return Illuminate\Support\Collection;
     */
    public static function set($map)
    {
        $array = [];

        if ($map === 'db') {
            $array = self::DB;
        }

        if ($map === 'element') {
            $array = self::ELEMENT;
        }

        return Arr::collect($array);
    }
}
