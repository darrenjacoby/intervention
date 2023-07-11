<?php

namespace Jacoby\Intervention\Admin\Settings;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Settings/Discussion
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'settings.discussion',
 *     'settings.discussion' => (string) $route,
 *     'settings.discussion.title' => (string) $title,
 *     'settings.discussion.title.[menu, page]' => (string) $title,
 *     'settings.discussion.tabs',
 *     'settings.discussion.tabs.[screen-options, help]',
 *     'settings.discussion.post',
 *     'settings.discussion.post.[ping-flag, ping-status, comments]',
 *     'settings.discussion.comments',
 *     'settings.discussion.comments.[
 *         name-email,
 *         registration,
 *         close,
 *         cookies,
 *         thread,
 *         pages,
 *         order
 *     ]',
 *     'settings.discussion.emails',
 *     'settings.discussion.emails.[comment, moderation]',
 *     'settings.discussion.moderation',
 *     'settings.discussion.moderation.approve',
 *     'settings.discussion.moderation.approve.[manual, previous]',
 *     'settings.discussion.moderation.queue',
 *     'settings.discussion.moderation.queue.[links, keys]',
 *     'settings.discussion.moderation.disallowed-keys',
 *     'settings.discussion.avatars',
 *     'settings.discussion.avatars.[show, rating, default]',
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
        $compose = Composer::set(Arr::normalizeTrue($config));

        $compose = $compose->has('settings.discussion.all')->add('settings.discussion.', [
            'tabs', 'post', 'comments', 'emails', 'moderation', 'avatars',
        ]);

        $compose = $compose->has('settings.discussion.title')->add('settings.discussion.title.', [
            'menu', 'page',
        ]);

        $compose = $compose->has('settings.discussion.tabs')->add('settings.discussion.tabs.', [
            'screen-options', 'help',
        ]);

        $compose = $compose->has('settings.discussion.moderation')->add('settings.discussion.moderation.', [
            'approve', 'queue', 'disallowed-keys',
        ]);

        $compose = $compose->has('settings.discussion.avatars')->add('settings.discussion.avatars.', [
            'display', 'max-rating', 'default',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('settings.discussion', $this->config);
        $shared->router();
        $shared->menu();
        $shared->title();
        $shared->tabs();

        add_action('admin_head-options-discussion.php', [$this, 'head']);
    }

    /**
     * Head
     */
    public function head()
    {
        // Post
        if ($this->config->has('settings.discussion.post')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#default_pingback_flag").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.discussion.post.ping-flag')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#default_pingback_flag").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.post.ping-status')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#default_ping_status").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.post.comments')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#default_comment_status").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        // Comments
        if ($this->config->has('settings.discussion.comments')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#require_name_email").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.discussion.comments.name-email')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#require_name_email").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.comments.registration')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#comment_registration").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.comments.close')) {
            echo '<script>
                jQuery(document).ready(function() {
                    jQuery("#close_comments_for_old_posts").parents("label").remove();
                    var $item = jQuery("#close_comments_days_old").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.comments.cookies')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#show_comments_cookies_opt_in").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.comments.thread')) {
            echo '<script>
                jQuery(document).ready(function() {
                    jQuery("#thread_comments").parents("label").remove();
                    var $item = jQuery("#thread_comments_depth").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.comments.pages')) {
            echo '<script>
                jQuery(document).ready(function() {
                    jQuery("#page_comments, #comments_per_page").parents("label").remove();
                    var $item = jQuery("#default_comments_page").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.comments.order')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#comment_order").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        // Emails
        if ($this->config->has('settings.discussion.emails')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#comments_notify").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.discussion.emails.comment')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#comments_notify").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.emails.moderation')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#moderation_notify").parents("label").remove()});</script>';
        }

        // Moderation/Approve
        if ($this->config->has('settings.discussion.moderation.approve')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#comment_moderation").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.discussion.moderation.approve.manual')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#comment_moderation").parents("label");
                    $item.next().remove(); // remove <br>
                    $item.remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.moderation.approve.previous')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#comment_previously_approved").parents("label").remove()});</script>';
        }

        // Moderation/Queue
        if ($this->config->has('settings.discussion.moderation.queue')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#moderation_keys").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.discussion.moderation.queue.links')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#comment_max_links").parents("label").remove()});</script>';
        }

        if ($this->config->has('settings.discussion.moderation.queue.keys')) {
            echo '<script>
                jQuery(document).ready(function() {
                    var $item = jQuery("#moderation_keys").parents("p");
                    $item.prev().remove(); // remove previous <p> description
                    $item.remove();
                });
            </script>';
        }

        // Moderation/Disallowed Keys
        if ($this->config->has('settings.discussion.moderation.disallowed-keys')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#disallowed_keys").parents("tr").remove()});</script>';
        }

        // Avatars
        if ($this->config->has('settings.discussion.avatars')) {
            echo '<script>
                jQuery(document).ready(function() {
                    jQuery("#show_avatars").parents("table").prev().prev().remove();
                    jQuery("#show_avatars").parents("table").prev().remove();
                    jQuery("#show_avatars").parents("table").remove();
                });
            </script>';
        }

        if ($this->config->has('settings.discussion.avatars.show')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#show_avatars").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.discussion.avatars.rating')) {
            echo '<script>jQuery(document).ready(function() {jQuery("input[name=avatar_rating]").parents("tr").remove()});</script>';
        }

        if ($this->config->has('settings.discussion.avatars.default')) {
            echo '<script>jQuery(document).ready(function() {jQuery("#avatar_mystery").parents("tr").remove()});</script>';
        }
    }
}
