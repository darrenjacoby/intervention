<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\OptionsApi;
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
        add_action('init', [$this, 'options']);
        add_action('admin_head-options-writing.php', [$this->api, 'disableKeys']);

        if ($this->config->get('writing.emoji') === false) {
            Emoji::remove();
        }
    }

    /**
     * Options
     */
    public function options()
    {
        $this->api->saveKeys([
            'writing.default-category',
            'writing.post-via-email.server',
            'writing.post-via-email.login',
            'writing.post-via-email.pass',
            'writing.post-via-email.port',
            'writing.post-via-email.default-category',
            'writing.update-services',
        ]);

        // default post format
        if ($this->config->has('writing.default-post-format')) {
            $format = $this->config->get('writing.default-post-format');
            $format = $format === 'standard' ? 0 : $format;
            $this->api->save('writing.default-post-format', $format);
        }
    }
}
