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
            'search_items' => __(sprintf('Search %s', $this->many), $i18n),
            'popular_items' => __(sprintf('Popular %s', $this->many), $i18n),
            'all_items' => __(sprintf('All %s', $this->many), $i18n),
            'parent_item' => __(sprintf('Parent %s', $this->one), $i18n),
            'parent_item_colon' => __(sprintf('Parent %s:', $this->one), $i18n),
            'edit_item' => __(sprintf('Edit %s', $this->one), $i18n),
            'view_item' => __(sprintf('View %s', $this->one), $i18n),
            'update_item' => __(sprintf('Update %s', $this->one), $i18n),
            'add_new_item' => __(sprintf('Add New %s', $this->one), $i18n),
            'new_item_name' => __(sprintf('New %s Name', $this->one), $i18n),
            'separate_items_with_commas' => __(sprintf('Separate %s with commas', Str::lower($this->many)), $i18n),
            'add_or_remove_items' => __(sprintf('Add or remove %s', Str::lower($this->many)), $i18n),
            'choose_from_most_used' => __(sprintf('Choose from most used %s', Str::lower($this->many)), $i18n),
            'not_found' => __(sprintf('No %s found', Str::lower($this->many)), $i18n),
            'no_terms' => __(sprintf('No %s', Str::lower($this->many)), $i18n),
            'items_list_navigation' => __(sprintf('%s list navigation', $this->many), $i18n),
            'items_list' => __(sprintf('%s list', $this->many), $i18n),
            'most_used' => __('Most Used', $i18n),
            'back_to_items' => __(sprintf('&larr; Back to %s', $this->many), $i18n),
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
