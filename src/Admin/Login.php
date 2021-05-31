<?php

namespace Sober\Intervention\Admin;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Login
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/login_head/
 * @link https://developer.wordpress.org/reference/hooks/admin_email_check_interval/
 *
 * @param
 * [
 *     'login',
 *     'login.logo',
 *     'login.remember',
 *     'login.nav',
 *     'login.back',
 *     'login.admin-email-check-interval',
 * ]
 */
class Login
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

        $compose = $compose->has('login')->add('login.', [
            'logo', 'remember', 'nav', 'back', 'policy', 'admin-email-check-interval',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('login_head', [$this, 'head']);

        if ($this->config->has('login.admin-email-check-interval')) {
            apply_filters('admin_email_check_interval', [$this, 'adminEmailCheckInterval']);
        }
    }

    /**
     * Head
     */
    public function head()
    {
        if ($this->config->has('login.logo')) {
            if ($this->config->get('login.logo') === true) {
                echo '<style>#login h1 {display: none;}</style>';
            }

            if (is_string($this->config->get('login.logo'))) {
                echo '
                <style>#login h1 a {
                    width: 100px;
                    height: 100px;
                    background-image: url(' . $this->config->get('login.logo') . ');
                    background-position: center center;
                    background-size: 100px auto;
                }</style>';
            }
        }

        if ($this->config->has('login.remember')) {
            echo '<style>#login .forgetmenot {display: none;}</style>';
        }

        if ($this->config->has('login.nav')) {
            echo '<style>#login #nav {display: none;}</style>';
        }

        if ($this->config->has('login.back')) {
            echo '<style>#login #backtoblog {display: none;}</style>';
        }

        if ($this->config->has('login.policy')) {
            echo '<style>#login .privacy-policy-page-link {display: none;}</style>';
        }
    }

    /**
     * Filters the interval for redirecting the user to the admin email confirmation screen.
     *
     * @internal The returned value should be in seconds to change the interval. Returning a “falsey” value, such as 0, false, __return_zero or __return_false, will disable the feature.
     * @param $interval
     * @return mixed
     */
    public function adminEmailCheckInterval($interval)
    {
        if ($this->config->get('login.admin-email-check-interval')) {
            $interval = $this->config->get('login.admin-email-check-interval');
        }

        return $interval;
    }
}
