<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: remove-page-components
 *
 * Hooks into admin_init to remove page component/s.
 *
 * @example intervention('remove-page-components', $components(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/functions/remove_post_type_support/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class RemovePageComponents extends Instance
{
    protected $type;
    protected $components;

    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->type = 'page';
        $this->components = ['editor', 'author', 'thumbnail', 'page-attributes', 'custom-fields', 'comments'];
        $this->setDefaultConfig(['author', 'thumbnail', 'page-attributes', 'custom-fields', 'comments']);
        return $this;
    }

    protected function hook()
    {
        add_action('admin_init', [$this, 'removePageComponents']);
    }

    public function removePageComponents()
    {
        if (in_array('all', $this->config)) {
            foreach ($this->components as $component) {
                remove_post_type_support($this->type, $component);
            }
        } else {
            foreach ($this->config as $component) {
                remove_post_type_support($this->type, $component);
            }
        }
    }
}
