<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: remove-post-components
 *
 * Hooks into admin_init to remove post component/s.
 *
 * @example intervention('remove-post-components', $components(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_init/
 * @link https://developer.wordpress.org/reference/functions/remove_post_type_support/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class RemovePostComponents extends Instance
{
    protected $type;
    protected $components;

    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->type = 'post';
        $this->components = ['editor', 'author', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'slug', 'revisions', 'thumbnail'];
        $this->setDefaultConfig(['author', 'excerpt', 'trackbacks', 'custom-fields', 'comments']);
        return $this;
    }

    protected function hook()
    {
        add_action('admin_init', [$this, 'removePostComponents']);
    }

    public function removePostComponents()
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
