<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;
use Sober\Intervention\Utils;

/**
 * Module: remove-howdy
 *
 * Hooks into wp_before_admin_bar_render to remove/replace howdy.
 *
 * @example intervention('remove-howdy', $replace(string));
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_before_admin_bar_render/
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/get_node/
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/add_node/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class RemoveHowdy extends Instance
{
    use Utils;

    protected $replace;
    protected $account;
    protected $title;

    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->replace = $this->escArray($this->config);
        return $this;
    }

    protected function hook()
    {
        add_action('wp_before_admin_bar_render', [$this, 'removeHowdy']);
    }

    public function removeHowdy()
    {
        global $wp_admin_bar;
        $this->account = $wp_admin_bar->get_node('my-account');
        $howdy = str_replace(' %s', '', __('Howdy, %s'));
        $this->title = str_replace($howdy, $this->replace, $this->account->title);
        $wp_admin_bar->add_node([
            'id' => 'my-account',
            'title' => $this->title
        ]);
    }
}
