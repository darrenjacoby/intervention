<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\Support\Element;
use Sober\Intervention\Application\Support\Emoji;
use Sober\Intervention\Support\Arr;

/**
 * Writing
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init
 * @link https://developer.wordpress.org/reference/functions/update_option/
 * @link https://wordpress.org/support/article/post-formats/
 *
 * @param
 * [
 *     'writing.emoji' => (boolean) $enable_emoji,
 *     'writing.default-category' => (int) $default_category_id,
 *     'writing.default-post-format' => (string) $default_post_format,
 *     'writing.post-via-email.server' => (string) $email_server,
 *     'writing.post-via-email.port' => (int) $email_port,
 *     'writing.post-via-email.login' => (string) $email_login,
 *     'writing.post-via-email.pass' => (string) $email_pass,
 *     'writing.post-via-email.default-category' => (int) $email_default_category_id,
 *     'writing.update-services' => (string) $update_services_url,
 * ]
 */
class Writing
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
        add_action('init', [$this, 'options']);
        add_action('admin_head-options-writing.php', [$this, 'admin']);

        if ($this->config->get('writing.emoji') === false) {
            Emoji::remove();
        }
    }

    /**
     * Options
     */
    public function options()
    {
        // Default Category
        if ($this->config->has('writing.default-category')) {
            update_option('default_category', $this->config->get('writing.default-category'));
        }

        // Default Post Format
        if ($this->config->has('writing.default-post-format')) {
            $format = $this->config->get('writing.default-post-format');
            $format = $format === 'standard' ? 0 : $format;
            update_option('default_post_format', $format);
        }

        // Post via Email
        if ($this->config->has('writing.post-via-email.server')) {
            update_option('mailserver_url', $this->config->get('writing.post-via-email.server'));
        }

        if ($this->config->has('writing.post-via-email.login')) {
            update_option('mailserver_login', $this->config->get('writing.post-via-email.login'));
        }

        if ($this->config->has('writing.post-via-email.pass')) {
            update_option('mailserver_pass', $this->config->get('writing.post-via-email.pass'));
        }

        if ($this->config->has('writing.post-via-email.port')) {
            update_option('mailserver_port', $this->config->get('writing.post-via-email.port'));
        }

        if ($this->config->has('writing.post-via-email.default-category')) {
            update_option('default_email_category', $this->config->get('writing.post-via-email.default-category'));
        }

        // Services
        if ($this->config->has('writing.update-services')) {
            update_option('ping_sites', $this->config->get('writing.update-services'));
        }
    }

    /**
     * Admin
     */
    public function admin()
    {
        if ($this->config->has('writing.default-category')) {
            Element::disabled('#default_category');
        }

        if ($this->config->has('writing.default-post-format')) {
            Element::disabled('#default_post_format');
        }

        if ($this->config->has('writing.post-via-email.server')) {
            Element::disabled('#mailserver_url');
        }

        if ($this->config->has('writing.post-via-email.login')) {
            Element::disabled('#mailserver_login');
        }

        if ($this->config->has('writing.post-via-email.pass')) {
            Element::disabled('#mailserver_pass');
        }

        if ($this->config->has('writing.post-via-email.default-category')) {
            Element::disabled('#default_email_category');
        }

        if ($this->config->has('writing.post-via-email.port')) {
            Element::disabled('#mailserver_port');
        }

        if ($this->config->has('writing.update-services')) {
            Element::disabled('#ping_sites');
        }
    }
}
