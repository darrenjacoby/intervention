<?php

namespace Jacoby\Intervention\Admin;

use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Login
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/login_head/
 *
 * @param
 * [
 *     'login',
 *     'login.logo',
 *     'login.remember',
 *     'login.nav',
 *     'login.back',
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
            'logo', 'remember', 'nav', 'back', 'policy',
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
                    background-image: url(' . esc_url($this->config->get('login.logo')) . ');
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
}
