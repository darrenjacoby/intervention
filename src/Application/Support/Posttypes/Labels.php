<?php

namespace Sober\Intervention\Application\Support\Posttypes;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Str;

/**
 * Support/Posttypes/Labels
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
     * @param string|array $config
     * @return Sober\Intervention\Application\Support\Posttypes\Labels
     */
    public static function set($config = false)
    {
        return new self($config);
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
            'name' => _x($this->many, 'Post type general name', $i18n),
            'singular_name' => _x($this->one, 'Post type singular name', $i18n),
            'menu_name' => _x($this->many, 'Admin Menu text', $i18n),
            'name_admin_bar' => _x($this->one, 'Add New on Toolbar', $i18n),
            'add_new' => __('Add New', $i18n),
            'add_new_item' => __(sprintf('Add New %s', $this->one), $i18n),
            'edit_item' => __(sprintf('Edit %s', $this->one), $i18n),
            'new_item' => __(sprintf('New %s', $this->one), $i18n),
            'view_item' => __(sprintf('View %s', $this->one), $i18n),
            'view_items' => __(sprintf('View %s', $this->many), $i18n),
            'search_items' => __(sprintf('Search %s', $this->many), $i18n),
            'not_found' => __(sprintf('No %s found.', Str::lower($this->many)), $i18n),
            'not_found_in_trash' => __(sprintf('No %s found in trash.', Str::lower($this->many)), $i18n),
            'parent_item_colon' => __(sprintf('Parent %s:', $this->one), $i18n),
            'all_items' => __(sprintf('All %s', $this->many), $i18n),
            'archives' => __(sprintf('%s Archives', $this->one), $i18n),
            'attributes' => __(sprintf('%s Attributes', $this->one), $i18n),
            'insert_into_item' => __(sprintf('Insert into %s', Str::lower($this->one)), $i18n),
            'uploaded_to_this_item' => __(sprintf('Uploaded to this %s', Str::lower($this->one)), $i18n),
            'filter_items_list' => __(sprintf('Filter %s list', Str::lower($this->many)), $i18n),
            'items_list_navigation' => __(sprintf('%s list navigation', $this->many), $i18n),
            'items_list' => __(sprintf('%s list', $this->many), $i18n),
            'item_published' => __(sprintf('%s published.', $this->one), $i18n),
            'item_published_privately' => __(sprintf('%s published privately.', $this->one), $i18n),
            'item_reverted_to_draft' => __(sprintf('%s reverted to draft.', $this->one), $i18n),
            'item_scheduled' => __(sprintf('%s scheduled.', $this->one), $i18n),
            'item_updated' => __(sprintf('%s updated.', $this->one), $i18n),
            'featured_image' => __($featured_image, $i18n),
            'set_featured_image' => __(sprintf('Set %s', Str::lower($featured_image)), $i18n),
            'remove_featured_image' => __(sprintf('Remove %s', Str::lower($featured_image)), $i18n),
            'use_featured_image' => __(sprintf('Use as %s', Str::lower($featured_image)), $i18n),
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
