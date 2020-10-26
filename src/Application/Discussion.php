<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Admin;
use Sober\Intervention\Support\Arr;

/**
 * Discussion
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/functions/update_option/
 *
 * @param
 * [
 *     'discussion.post.ping-flag' => (boolean) $enable_ping_flag,
 *     'discussion.post.ping-status' => (boolean) $enable_ping_status,
 *     'discussion.post.comments' => (boolean) $enable_comments,
 *     'discussion.comments.name-email' => (boolean) $require_name_email,
 *     'discussion.comments.registration' => (boolean) $require_registration,
 *     'discussion.comments.close' => (boolean) $enable_auto_close,
 *     'discussion.comments.close.days' => (int) $days_auto_close,
 *     'discussion.comments.cookies' => (boolean) $show_cookies_opt_in,
 *     'discussion.comments.thread' => (boolean) $enable_threaded_comments,
 *     'discussion.comments.thread.depth' => (int) $threaded_comments_depth,
 *     'discussion.comments.pages' => (boolean) $enable_comment_pages,
 *     'discussion.comments.pages.per-page' => (int) $comments_per_page,
 *     'discussion.comments.pages.default' => (string) 'newest|oldest',
 *     'discussion.comments.order' => (string) 'asc|desc',
 *     'discussion.emails.comment' => (boolean) $enable_emails,
 *     'discussion.emails.moderation' => (boolean) $enable_moderation_emails,
 *     'discussion.moderation.approve-manual' => (boolean) $enable_manual_moderation,
 *     'discussion.moderation.approve-previous' => (boolean) $enable_allow_previous,
 *     'discussion.moderation.queue-links' => (int) $max_links,
 *     'discussion.moderation.queue-keys' => (string) $allowed_keys,
 *     'discussion.moderation.disallowed-keys' => (string) $disallowed_keys,
 *     'discussion.avatars' => (boolean) $enable_avatars,
 *     'discussion.avatars.rating' => (string) $avatar_rating,
 *     'discussion.avatars.default' => (string) $avatar_default,
 * ]
 */
class Discussion
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalize($config);
        $this->hook();
    }

    /**
     * Hook
     *
     * @link https://developer.wordpress.org/reference/hooks/init
     */
    protected function hook()
    {
        add_action('init', [$this, 'discussion']);
        
        $this->admin();
    }

    /**
     * Discussion
     */
    public function discussion()
    {
        // Post
        if ($this->config->has('discussion.post.ping-flag')) {
            update_option('default_pingback_flag', $this->config->get('discussion.post.ping-flag'));
        }

        if ($this->config->has('discussion.post.ping-status')) {
            $value = $this->config->get('discussion.post.ping-status');
            $value = $value === true ? 'open' : 'closed';
            update_option('default_ping_status', $value);
        }

        if ($this->config->has('discussion.post.comments')) {
            $value = $this->config->get('discussion.post.comments');
            $value = $value === true ? 'open' : 'closed';
            update_option('default_comment_status', $value);
        }

        // Comments
        if ($this->config->has('discussion.comments.name-email')) {
            update_option('require_name_email', $this->config->get('discussion.comments.name-email'));
        }

        if ($this->config->has('discussion.comments.registration')) {
            update_option('comment_registration', $this->config->get('discussion.comments.registration'));
        }

        if ($this->config->has('discussion.comments.close')) {
            update_option('close_comments_for_old_posts', $this->config->get('discussion.comments.close'));
        }

        if ($this->config->has('discussion.comments.close.days')) {
            update_option('close_comments_days_old', $this->config->get('discussion.comments.close.days'));
        }

        if ($this->config->has('discussion.comments.cookies')) {
            update_option('show_comments_cookies_opt_in', $this->config->get('discussion.comments.cookies'));
        }

        if ($this->config->has('discussion.comments.thread')) {
            update_option('thread_comments', $this->config->get('discussion.comments.thread'));
        }

        if ($this->config->has('discussion.comments.thread.depth')) {
            update_option('thread_comments_depth', $this->config->get('discussion.comments.thread.depth'));
        }

        if ($this->config->has('discussion.comments.pages')) {
            update_option('page_comments', $this->config->get('discussion.comments.pages'));
        }

        if ($this->config->has('discussion.comments.pages.per-page')) {
            update_option('comments_per_page', $this->config->get('discussion.comments.pages.per-page'));
        }

        if ($this->config->has('discussion.comments.pages.default')) {
            update_option('default_comments_page', $this->config->get('discussion.comments.pages.default'));
        }

        if ($this->config->has('discussion.comments.order')) {
            update_option('comment_order', $this->config->get('discussion.comments.order'));
        }

        // Emails
        if ($this->config->has('discussion.emails.comment')) {
            update_option('comments_notify', $this->config->get('discussion.emails.comment'));
        }

        if ($this->config->has('discussion.emails.moderation')) {
            update_option('moderation_notify', $this->config->get('discussion.emails.moderation'));
        }

        // Moderation/Approve
        if ($this->config->has('discussion.moderation.approve-manual')) {
            update_option('comment_moderation', $this->config->get('discussion.moderation.approve-manual'));
        }

        if ($this->config->has('discussion.moderation.approve-previous')) {
            update_option('comment_previously_approved', $this->config->get('discussion.moderation.approve-previous'));
        }

        // Moderation/Queue
        if ($this->config->has('discussion.moderation.queue-links')) {
            update_option('comment_max_links', $this->config->get('discussion.moderation.queue-links'));
        }

        if ($this->config->has('discussion.moderation.queue-keys')) {
            update_option('moderation_keys', $this->config->get('discussion.moderation.queue-keys'));
        }

        // Moderation/Disallowed Keys
        if ($this->config->has('discussion.moderation.disallowed-keys')) {
            update_option('disallowed_keys', $this->config->get('discussion.moderation.disallowed-keys'));
        }

        /**
         * Avatars
         */
        if ($this->config->has('discussion.avatars')) {
            update_option('show_avatars', $this->config->get('discussion.avatars'));
        }

        if ($this->config->has('discussion.avatars.rating')) {
            update_option('avatar_rating', $this->config->get('discussion.avatars.rating'));
        }

        if ($this->config->has('discussion.avatars.default')) {
            update_option('avatar_default', $this->config->get('discussion.avatars.default'));
        }
    }

    public function admin()
    {
        // Post
        if ($this->config->has('discussion.post.ping-flag') &&
            $this->config->has('discussion.post.ping-status') &&
            $this->config->has('discussion.post.comments')) {
            Admin::set('settings.discussion', ['post']);
        }

        if ($this->config->has('discussion.post.ping-flag')) {
            Admin::set('settings.discussion', ['post.ping-flag']);
        }

        if ($this->config->has('discussion.post.ping-status')) {
            Admin::set('settings.discussion', ['post.ping-status']);
        }

        if ($this->config->has('discussion.post.comments')) {
            Admin::set('settings.discussion', ['post.comments']);
        }

        // Comments
        if ($this->config->has('discussion.comments.name-email') &&
            $this->config->has('discussion.comments.registration') &&
            $this->config->has('discussion.comments.close') &&
            $this->config->has('discussion.comments.cookies') &&
            $this->config->has('discussion.comments.thread') &&
            $this->config->has('discussion.comments.pages') &&
            $this->config->has('discussion.comments.order')) {
            Admin::set('settings.discussion', ['comments']);
        }

        if ($this->config->has('discussion.comments.name-email')) {
            Admin::set('settings.discussion', ['comments.name-email']);
        }

        if ($this->config->has('discussion.comments.registration')) {
            Admin::set('settings.discussion', ['comments.registration']);
        }

        if ($this->config->has('discussion.comments.close') &&
            $this->config->has('discussion.comments.close.days')) {
            Admin::set('settings.discussion', ['comments.close']);
        }

        if ($this->config->has('discussion.comments.cookies')) {
            Admin::set('settings.discussion', ['comments.cookies']);
        }

        if ($this->config->has('discussion.comments.thread') &&
            $this->config->has('discussion.comments.thread.depth')) {
            Admin::set('settings.discussion', ['comments.thread']);
        }

        if ($this->config->has('discussion.comments.pages') &&
            $this->config->has('discussion.comments.pages.per-page') &&
            $this->config->has('discussion.comments.pages.default')) {
            Admin::set('settings.discussion', ['comments.pages']);
        }

        if ($this->config->has('discussion.comments.order')) {
            Admin::set('settings.discussion', ['comments.order']);
        }

        // Emails
        if ($this->config->has('discussion.emails.comment') &&
            $this->config->has('discussion.emails.moderation')) {
            Admin::set('settings.discussion', ['emails']);
        }

        if ($this->config->has('discussion.emails.comment')) {
            Admin::set('settings.discussion', ['emails.comment']);
        }

        if ($this->config->has('discussion.emails.moderation')) {
            Admin::set('settings.discussion', ['emails.moderation']);
        }

        // Moderation/Approve
        if ($this->config->has('discussion.moderation.approve-manual') &&
            $this->config->has('discussion.moderation.approve-previous')) {
            Admin::set('settings.discussion', ['moderation.approve']);
        }

        if ($this->config->has('discussion.moderation.approve-manual')) {
            Admin::set('settings.discussion', ['moderation.approve.manual']);
        }

        if ($this->config->has('discussion.moderation.approve-previous')) {
            Admin::set('settings.discussion', ['moderation.approve.previous']);
        }

        // Moderation/Queue
        if ($this->config->has('discussion.moderation.queue-links') &&
            $this->config->has('discussion.moderation.queue-keys')) {
            Admin::set('settings.discussion', ['moderation.queue']);
        }

        if ($this->config->has('discussion.moderation.queue-links')) {
            Admin::set('settings.discussion', ['moderation.queue.links']);
        }

        if ($this->config->has('discussion.moderation.queue-keys')) {
            Admin::set('settings.discussion', ['moderation.queue.keys']);
        }

        // Moderation/Disallowed Keys
        if ($this->config->has('discussion.moderation.disallowed-keys')) {
            Admin::set('settings.discussion', ['moderation.disallowed-keys']);
        }

        // Avatars
        if ($this->config->has('discussion.avatars') &&
            $this->config->has('discussion.avatars.rating') &&
            $this->config->has('discussion.avatars.default') ||
            $this->config->get('discussion.avatars') === false) {
            Admin::set('settings.discussion', ['avatars']);
        }

        if ($this->config->has('discussion.avatars')) {
            Admin::set('settings.discussion', ['avatars.show']);
        }

        if ($this->config->has('discussion.avatars.rating')) {
            Admin::set('settings.discussion', ['avatars.rating']);
        }

        if ($this->config->has('discussion.avatars.default')) {
            Admin::set('settings.discussion', ['avatars.default']);
        }
    }
}
