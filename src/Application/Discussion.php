<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\OptionsApi;
use Sober\Intervention\Application\Support\Comments;
use Sober\Intervention\Support\Arr;

/**
 * Discussion
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 *
 * @param
 * [
 *     'discussion' => false,
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
    protected $api;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalize($config);
        $this->api = OptionsApi::set($this->config);
        $this->hook();
    }

    /**
     * Hook
     *
     * @link https://developer.wordpress.org/reference/hooks/init
     */
    protected function hook()
    {
        if ($this->config->get('discussion') === false) {
            $settings = [
                'discussion.post.ping-flag' => false,
                'discussion.post.ping-status' => false,
                'discussion.post.comments' => false,
                'discussion.comments.name-email' => false,
                'discussion.comments.registration' => false,
                'discussion.comments.close' => false,
                'discussion.comments.close.days' => 0,
                'discussion.comments.cookies' => false,
                'discussion.comments.thread' => false,
                'discussion.comments.pages' => false,
                'discussion.emails.comment' => false,
                'discussion.emails.moderation' => false,
                'discussion.moderation.approve-manual' => false,
                'discussion.moderation.approve-previous' => false,
                'discussion.moderation.queue-keys' => '',
                'discussion.moderation.disallowed-keys' => '',
                'discussion.avatars' => false,
            ];

            $this->config = $this->config->merge($settings);

            Comments::remove();
        }

        add_action('init', [$this, 'options']);
        add_action('admin_head-options-discussion.php', [$this->api, 'disableKeys']);
    }

    /**
     * Options
     */
    public function options()
    {
        $this->api->saveKeys([
            'discussion.post.ping-flag',
            'discussion.comments.name-email',
            'discussion.comments.registration',
            'discussion.comments.close',
            'discussion.comments.close.days',
            'discussion.comments.cookies',
            'discussion.comments.thread',
            'discussion.comments.thread.depth',
            'discussion.comments.pages',
            'discussion.comments.pages.per-page',
            'discussion.comments.pages.default',
            'discussion.comments.order',
            'discussion.emails.comment',
            'discussion.emails.moderation',
            'discussion.moderation.approve-manual',
            'discussion.moderation.approve-previous',
            'discussion.moderation.queue-links',
            'discussion.moderation.queue-keys',
            'discussion.moderation.disallowed-keys',
            'discussion.avatars',
            'discussion.avatars.rating',
            'discussion.avatars.default',
        ]);

        /*
        if ($this->config->has('discussion.post.ping-flag')) {
            $this->api->save('discussion.post.ping-flag', $this->config->get('discussion.post.ping-flag'));
        }
        */

        if ($this->config->has('discussion.post.ping-status')) {
            $value = $this->config->get('discussion.post.ping-status');
            $value = $value === true ? 'open' : 'closed';
            $this->api->save('discussion.post.ping-status', $value);
        }

        if ($this->config->has('discussion.post.comments')) {
            $value = $this->config->get('discussion.post.comments');
            $value = $value === true ? 'open' : 'closed';
            $this->api->save('discussion.post.comments', $value);
        }
    }
}
