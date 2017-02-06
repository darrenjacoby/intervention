<?php

namespace Sober\Intervention\Module;

use Sober\Intervention\Instance;

/**
 * Module: remove-taxonomies
 *
 * Hooks into init to remove default taxonomies.
 *
 * @example intervention('remove-taxonomies', $taxonomies(string|array));
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/functions/taxonomy_exists/
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 1.0.0
 */
class RemoveTaxonomies extends Instance
{
    protected $taxonomies;

    public function run()
    {
        $this->setup()->hook();
    }

    protected function setup()
    {
        $this->taxonomies = ['category', 'post_tag'];
        $this->setDefaultConfig('all');
        $this->config = $this->aliasTaxTag($this->config);
        return $this;
    }

    protected function hook()
    {
        add_action('init', [$this, 'removeTaxonomies']);
    }

    public function removeTaxonomies()
    {
        global $wp_taxonomies;
        if (in_array('all', $this->config)) {
            foreach ($this->taxonomies as $taxonomy) {
                if (taxonomy_exists($taxonomy)) {
                    unset($wp_taxonomies[$taxonomy]);
                }
            }
        } else {
            foreach ($this->config as $taxonomy) {
                if (taxonomy_exists($taxonomy)) {
                    unset($wp_taxonomies[$taxonomy]);
                }
            }
        }
    }
}
