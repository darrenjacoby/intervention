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
     * @param string $one
     * @param string $many
     * @param string|array $config
     * @return Sober\Intervention\Application\Support\Posttypes\Labels
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
            'name' => _x($this->many, 'Post type general name', $i18n),
            'singular_name' => _x($this->one, 'Post type singular name', $i18n),
            'menu_name' => _x($this->many, 'Admin Menu text', $i18n),
            'name_admin_bar' => _x($this->one, 'Add New on Toolbar', $i18n),
            'add_new' => __('Add New', $i18n),
            'add_new_item' => sprintf(__('Add New %s', $i18n), $this->one),
            'edit_item' => sprintf(__('Edit %s', $i18n), $this->one),
            'new_item' => sprintf(__('New %s', $i18n), $this->one),
            'view_item' => sprintf(__('View %s', $i18n), $this->one),
            'view_items' => sprintf(__('View %s', $i18n), $this->many),
            'search_items' => sprintf(__('Search %s', $i18n), $this->many),
            'not_found' => sprintf(__('No %s found.', $i18n), Str::lower($this->many)),
            'not_found_in_trash' => sprintf(__('No %s found in trash.', $i18n), Str::lower($this->many)),
            'parent_item_colon' => sprintf(__('Parent %s:', $i18n), $this->one),
            'all_items' => sprintf(__('All %s', $i18n), $this->many),
            'archives' => sprintf(__('%s Archives', $i18n), $this->one),
            'attributes' => sprintf(__('%s Attributes', $i18n), $this->one),
            'insert_into_item' => sprintf(__('Insert into %s', $i18n), Str::lower($this->one)),
            'uploaded_to_this_item' => sprintf(__('Uploaded to this %s', $i18n), Str::lower($this->one)),
            'filter_items_list' => sprintf(__('Filter %s list', $i18n), Str::lower($this->many)),
            'items_list_navigation' => sprintf(__('%s list navigation', $i18n), $this->many),
            'items_list' => sprintf(__('%s list', $i18n), $this->many),
            'item_published' => sprintf(__('%s published.', $i18n), $this->one),
            'item_published_privately' => sprintf(__('%s published privately.', $i18n), $this->one),
            'item_reverted_to_draft' => sprintf(__('%s reverted to draft.', $i18n), $this->one),
            'item_scheduled' => sprintf(__('%s scheduled.', $i18n), $this->one),
            'item_updated' => sprintf(__('%s updated.', $i18n), $this->one),
            'featured_image' => __($featured_image, $i18n),
            'set_featured_image' => sprintf(__('Set %s', $i18n), Str::lower($featured_image)),
            'remove_featured_image' => sprintf(__('Remove %s', $i18n), Str::lower($featured_image)),
            'use_featured_image' => sprintf(__('Use as %s', $i18n), Str::lower($featured_image)),
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
