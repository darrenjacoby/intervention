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
        $featured_image = $this->config->has('featured_image') ?
            $this->config->get('featured_image') :
            'Featured image';

        $this->labels = Arr::collect([
            'name' => _x($this->many, 'Post type general name', INTERVENTION_TEXT_DOMAIN),
            'singular_name' => _x($this->one, 'Post type singular name', INTERVENTION_TEXT_DOMAIN),
            'menu_name' => _x($this->many, 'Admin Menu text', INTERVENTION_TEXT_DOMAIN),
            'name_admin_bar' => _x($this->one, 'Add New on Toolbar', INTERVENTION_TEXT_DOMAIN),
            'add_new' => __('Add New', INTERVENTION_TEXT_DOMAIN),
            'add_new_item' => sprintf(__('Add New %s', INTERVENTION_TEXT_DOMAIN), $this->one),
            'edit_item' => sprintf(__('Edit %s', INTERVENTION_TEXT_DOMAIN), $this->one),
            'new_item' => sprintf(__('New %s', INTERVENTION_TEXT_DOMAIN), $this->one),
            'view_item' => sprintf(__('View %s', INTERVENTION_TEXT_DOMAIN), $this->one),
            'view_items' => sprintf(__('View %s', INTERVENTION_TEXT_DOMAIN), $this->many),
            'search_items' => sprintf(__('Search %s', INTERVENTION_TEXT_DOMAIN), $this->many),
            'not_found' => sprintf(__('No %s found.', INTERVENTION_TEXT_DOMAIN), Str::lower($this->many)),
            'not_found_in_trash' => sprintf(__('No %s found in trash.', INTERVENTION_TEXT_DOMAIN), Str::lower($this->many)),
            'parent_item_colon' => sprintf(__('Parent %s:', INTERVENTION_TEXT_DOMAIN), $this->one),
            'all_items' => sprintf(__('All %s', INTERVENTION_TEXT_DOMAIN), $this->many),
            'archives' => sprintf(__('%s Archives', INTERVENTION_TEXT_DOMAIN), $this->one),
            'attributes' => sprintf(__('%s Attributes', INTERVENTION_TEXT_DOMAIN), $this->one),
            'insert_into_item' => sprintf(__('Insert into %s', INTERVENTION_TEXT_DOMAIN), Str::lower($this->one)),
            'uploaded_to_this_item' => sprintf(__('Uploaded to this %s', INTERVENTION_TEXT_DOMAIN), Str::lower($this->one)),
            'filter_items_list' => sprintf(__('Filter %s list', INTERVENTION_TEXT_DOMAIN), Str::lower($this->many)),
            'items_list_navigation' => sprintf(__('%s list navigation', INTERVENTION_TEXT_DOMAIN), $this->many),
            'items_list' => sprintf(__('%s list', INTERVENTION_TEXT_DOMAIN), $this->many),
            'item_published' => sprintf(__('%s published.', INTERVENTION_TEXT_DOMAIN), $this->one),
            'item_published_privately' => sprintf(__('%s published privately.', INTERVENTION_TEXT_DOMAIN), $this->one),
            'item_reverted_to_draft' => sprintf(__('%s reverted to draft.', INTERVENTION_TEXT_DOMAIN), $this->one),
            'item_scheduled' => sprintf(__('%s scheduled.', INTERVENTION_TEXT_DOMAIN), $this->one),
            'item_updated' => sprintf(__('%s updated.', INTERVENTION_TEXT_DOMAIN), $this->one),
            'featured_image' => __($featured_image, INTERVENTION_TEXT_DOMAIN),
            'set_featured_image' => sprintf(__('Set %s', INTERVENTION_TEXT_DOMAIN), Str::lower($featured_image)),
            'remove_featured_image' => sprintf(__('Remove %s', INTERVENTION_TEXT_DOMAIN), Str::lower($featured_image)),
            'use_featured_image' => sprintf(__('Use as %s', INTERVENTION_TEXT_DOMAIN), Str::lower($featured_image)),
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
