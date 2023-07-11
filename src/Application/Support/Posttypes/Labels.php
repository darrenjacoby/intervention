<?php

namespace Jacoby\Intervention\Application\Support\Posttypes;

use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Str;

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
	 * @return Jacoby\Intervention\Application\Support\Posttypes\Labels
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
			'name' => _x($this->many, 'Post type general name', THEME_TEXT_DOMAIN),
			'singular_name' => _x($this->one, 'Post type singular name', THEME_TEXT_DOMAIN),
			'menu_name' => _x($this->many, 'Admin Menu text', THEME_TEXT_DOMAIN),
			'name_admin_bar' => _x($this->one, 'Add New on Toolbar', THEME_TEXT_DOMAIN),
			'add_new' => __('Add New', THEME_TEXT_DOMAIN),
			'add_new_item' => sprintf(__('Add New %s', THEME_TEXT_DOMAIN), $this->one),
			'edit_item' => sprintf(__('Edit %s', THEME_TEXT_DOMAIN), $this->one),
			'new_item' => sprintf(__('New %s', THEME_TEXT_DOMAIN), $this->one),
			'view_item' => sprintf(__('View %s', THEME_TEXT_DOMAIN), $this->one),
			'view_items' => sprintf(__('View %s', THEME_TEXT_DOMAIN), $this->many),
			'search_items' => sprintf(__('Search %s', THEME_TEXT_DOMAIN), $this->many),
			'not_found' => sprintf(__('No %s found.', THEME_TEXT_DOMAIN), Str::lower($this->many)),
			'not_found_in_trash' => sprintf(__('No %s found in trash.', THEME_TEXT_DOMAIN), Str::lower($this->many)),
			'parent_item_colon' => sprintf(__('Parent %s:', THEME_TEXT_DOMAIN), $this->one),
			'all_items' => sprintf(__('All %s', THEME_TEXT_DOMAIN), $this->many),
			'archives' => sprintf(__('%s Archives', THEME_TEXT_DOMAIN), $this->one),
			'attributes' => sprintf(__('%s Attributes', THEME_TEXT_DOMAIN), $this->one),
			'insert_into_item' => sprintf(__('Insert into %s', THEME_TEXT_DOMAIN), Str::lower($this->one)),
			'uploaded_to_this_item' => sprintf(__('Uploaded to this %s', THEME_TEXT_DOMAIN), Str::lower($this->one)),
			'filter_items_list' => sprintf(__('Filter %s list', THEME_TEXT_DOMAIN), Str::lower($this->many)),
			'items_list_navigation' => sprintf(__('%s list navigation', THEME_TEXT_DOMAIN), $this->many),
			'items_list' => sprintf(__('%s list', THEME_TEXT_DOMAIN), $this->many),
			'item_published' => sprintf(__('%s published.', THEME_TEXT_DOMAIN), $this->one),
			'item_published_privately' => sprintf(__('%s published privately.', THEME_TEXT_DOMAIN), $this->one),
			'item_reverted_to_draft' => sprintf(__('%s reverted to draft.', THEME_TEXT_DOMAIN), $this->one),
			'item_scheduled' => sprintf(__('%s scheduled.', THEME_TEXT_DOMAIN), $this->one),
			'item_updated' => sprintf(__('%s updated.', THEME_TEXT_DOMAIN), $this->one),
			'featured_image' => __($featured_image, THEME_TEXT_DOMAIN),
			'set_featured_image' => sprintf(__('Set %s', THEME_TEXT_DOMAIN), Str::lower($featured_image)),
			'remove_featured_image' => sprintf(__('Remove %s', THEME_TEXT_DOMAIN), Str::lower($featured_image)),
			'use_featured_image' => sprintf(__('Use as %s', THEME_TEXT_DOMAIN), Str::lower($featured_image)),
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
