<?php

namespace Sober\Intervention\Application\Support\Taxonomies;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Str;

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
     * @return Sober\Intervention\Application\Support\Taxonomies\Labels
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
        $theme = wp_get_theme();
        $i18n = $theme->get('TextDomain');
        $featured_image = $this->config->has('featured_image') ?
            $this->config->get('featured_image') :
            'Featured image';

        $this->labels = Arr::collect([
            'menu_name' => __($this->many, $i18n),
            'name' => _x($this->many, 'Taxonomy general name', $i18n),
            'singular_name' => _x($this->one, 'Taxonomy single name', $i18n),
            'search_items' => sprintf(__('Search %s', $i18n), $this->many),
            'popular_items' => sprintf(__('Popular %s', $i18n), $this->many),
            'all_items' => sprintf(__('All %s', $i18n), $this->many),
            'parent_item' => sprintf(__('Parent %s', $i18n), $this->one),
            'parent_item_colon' => sprintf(__('Parent %s:', $i18n), $this->one),
            'edit_item' => sprintf(__('Edit %s', $i18n), $this->one),
            'view_item' => sprintf(__('View %s', $i18n), $this->one),
            'update_item' => sprintf(__('Update %s', $i18n), $this->one),
            'add_new_item' => sprintf(__('Add New %s', $i18n), $this->one),
            'new_item_name' => sprintf(__('New %s Name', $i18n), $this->one),
            'separate_items_with_commas' => sprintf(__('Separate %s with commas', $i18n), Str::lower($this->many)),
            'add_or_remove_items' => sprintf(__('Add or remove %s', $i18n), Str::lower($this->many)),
            'choose_from_most_used' => sprintf(__('Choose from most used %s', $i18n), Str::lower($this->many)),
            'not_found' => sprintf(__('No %s found', $i18n), Str::lower($this->many)),
            'no_terms' => sprintf(__('No %s', $i18n), Str::lower($this->many)),
            'items_list_navigation' => sprintf(__('%s list navigation', $i18n), $this->many),
            'items_list' => sprintf(__('%s list', $i18n), $this->many),
            'most_used' => __('Most Used', $i18n),
            'back_to_items' => sprintf(__('&larr; Back to %s', $i18n), $this->many),
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
