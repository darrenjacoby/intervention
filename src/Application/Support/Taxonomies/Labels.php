<?php

namespace Jacoby\Intervention\Application\Support\Taxonomies;

use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Str;

/**
 * Support/Taxonomies/Labels
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class Labels
{
    protected $one;
    protected $many;
    protected $config;
    protected $labels;

    /**
     * Interface
     *
     * @param string $one
     * @param string $many
     * @param string|array $config
     * @return Jacoby\Intervention\Application\Support\Taxonomies\Labels
     */
    public static function set($one, $many = false, $config = false)
    {
        return new self($one, $many, $config);
    }

    /**
     * Initialize
     *
     * @param string|array $config
     */
    public function __construct($one, $many = false, $config = false)
    {
        $this->one = $one;
        $this->many = $many ? $many : $this->one . 's';
        $this->config = Arr::collect($config);
        $this->builder();
    }

    /**
     * Builder
     */
    public function builder()
    {
        $featured_image = $this->config->has('featured_image') ?
        $this->config->get('featured_image') :
        'Featured image';

        $this->labels = Arr::collect([
            'menu_name' => __($this->many, THEME_TEXT_DOMAIN),
            'name' => _x($this->many, 'Taxonomy general name', THEME_TEXT_DOMAIN),
            'singular_name' => _x($this->one, 'Taxonomy single name', THEME_TEXT_DOMAIN),
            'search_items' => sprintf(__('Search %s', THEME_TEXT_DOMAIN), $this->many),
            'popular_items' => sprintf(__('Popular %s', THEME_TEXT_DOMAIN), $this->many),
            'all_items' => sprintf(__('All %s', THEME_TEXT_DOMAIN), $this->many),
            'parent_item' => sprintf(__('Parent %s', THEME_TEXT_DOMAIN), $this->one),
            'parent_item_colon' => sprintf(__('Parent %s:', THEME_TEXT_DOMAIN), $this->one),
            'edit_item' => sprintf(__('Edit %s', THEME_TEXT_DOMAIN), $this->one),
            'view_item' => sprintf(__('View %s', THEME_TEXT_DOMAIN), $this->one),
            'update_item' => sprintf(__('Update %s', THEME_TEXT_DOMAIN), $this->one),
            'add_new_item' => sprintf(__('Add New %s', THEME_TEXT_DOMAIN), $this->one),
            'new_item_name' => sprintf(__('New %s Name', THEME_TEXT_DOMAIN), $this->one),
            'separate_items_with_commas' => sprintf(__('Separate %s with commas', THEME_TEXT_DOMAIN), Str::lower($this->many)),
            'add_or_remove_items' => sprintf(__('Add or remove %s', THEME_TEXT_DOMAIN), Str::lower($this->many)),
            'choose_from_most_used' => sprintf(__('Choose from most used %s', THEME_TEXT_DOMAIN), Str::lower($this->many)),
            'not_found' => sprintf(__('No %s found', THEME_TEXT_DOMAIN), Str::lower($this->many)),
            'no_terms' => sprintf(__('No %s', THEME_TEXT_DOMAIN), Str::lower($this->many)),
            'items_list_navigation' => sprintf(__('%s list navigation', THEME_TEXT_DOMAIN), $this->many),
            'items_list' => sprintf(__('%s list', THEME_TEXT_DOMAIN), $this->many),
            'most_used' => __('Most Used', THEME_TEXT_DOMAIN),
            'back_to_items' => sprintf(__('&larr; Back to %s', THEME_TEXT_DOMAIN), $this->many),
        ]);

        $this->labels = $this->labels->merge($this->config->toArray());

        return $this;
    }

    /**
     * Get
     *
     * @return array $this->labels
     */
    public function get()
    {
        return $this->labels->toArray();
    }
}
