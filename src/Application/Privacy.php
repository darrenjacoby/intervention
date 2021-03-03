<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\Support\Element;
use Sober\Intervention\Support\Arr;

/**
 * Privacy
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
 *     'privacy.policy-page' => (int) $page_id,
 * ]
 */
class Privacy
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
     */
    protected function hook()
    {
        add_action('init', [$this, 'options']);
        add_action('admin_head-options-privacy.php', [$this, 'admin']);
    }

    /**
     * Options
     */
    public function options()
    {
        if ($this->config->has('privacy.policy-page')) {
            update_option('wp_page_for_privacy_policy', $this->config->get('privacy.policy-page'));
        }
    }

    /**
     * Admin
     */
    public function admin()
    {
        if ($this->config->has('privacy.policy-page')) {
            Element::disabled('#page_for_privacy_policy, #set-page, #create-page');
        }
    }
}
