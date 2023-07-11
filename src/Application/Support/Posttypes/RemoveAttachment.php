<?php

namespace Jacoby\Intervention\Application\Support\Posttypes;

use Jacoby\Intervention\Support\Arr;

/**
 * Support/Posttypes/RemoveAttachment
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://gschoppe.com/wordpress/disable-attachment-pages/
 * @link https://developer.wordpress.org/reference/hooks/rewrite_rules_array/
 * @link https://developer.wordpress.org/reference/hooks/wp_unique_post_slug/
 * @link https://developer.wordpress.org/reference/hooks/request/
 * @link https://developer.wordpress.org/reference/hooks/attachment_link/
 * @link https://developer.wordpress.org/reference/hooks/template_redirect/
 * @link https://developer.wordpress.org/reference/hooks/register_post_type_args/
 * @link https://developer.wordpress.org/reference/functions/register_activation_hook/
 * @link https://developer.wordpress.org/reference/functions/register_deactivation_hook/
 */
class RemoveAttachment
{
	/**
	 * Initialize
	 *
	 * @param array $config
	 */
	public function __construct()
	{
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		// Remove
		add_filter('rewrite_rules_array', [$this, 'removeRewrites']);
		add_filter('wp_unique_post_slug', [$this, 'uniquePostSlug'], 10, 6);
		add_filter('request', [$this, 'removeQueryVar']);
		add_filter('attachment_link', [$this, 'changeLinkToFile'], 10, 2);

		// Futureproofing
		add_action('template_redirect', [$this, 'redirectPagesToFile']);
		add_filter('register_post_type_args', [$this, 'makePrivate'], 10, 2);

		// Rewrite rules
		register_activation_hook(__FILE__, 'flush_rewrite_rules');
		register_deactivation_hook(__FILE__, 'flush_rewrite_rules');
	}

	/**
	 * Remove Rewrites
	 */
	public function removeRewrites($rules)
	{
		foreach ($rules as $pattern => $rewrite) {
			if (preg_match('/([\?&]attachment=\$matches\[)/', $rewrite)) {
				unset($rules[$pattern]);
			}
		}
		return $rules;
	}

	/**
	 * WordPress Unique Post Slug
	 *
	 * Trimmed down version of `wp_unique_post_slug` from WordPress 4.8.3
	 *
	 * @param string $slug
	 * @param int $post_ID
	 * @param string $post_status
	 * @param string $post_type
	 * @param int $post_parent
	 * @return string $slug
	 */
	public function uniquePostSlug($slug, $post_ID, $post_status, $post_type, $post_parent, $original_slug)
	{
		global $wpdb, $wp_rewrite;

		if ($post_type === 'nav_menu_item') {
			return $slug;
		}

		if (!is_post_type_hierarchical($post_type)) {
			return $slug;
		}

		$feeds = $wp_rewrite->feeds;

		if (!is_array($feeds)) {
			$feeds = [];
		}

		$slug = $original_slug;
		$check_sql = "SELECT post_name FROM $wpdb->posts WHERE post_name = %s AND post_type IN ( %s ) AND ID != %d AND post_parent = %d LIMIT 1";
		$post_name_check = $wpdb->get_var($wpdb->prepare($check_sql, $slug, $post_type, $post_ID, $post_parent));

		/**
		 * Filters whether the post slug would make a bad hierarchical post slug
		 */
		if ($post_name_check || in_array($slug, $feeds) || 'embed' === $slug || preg_match("@^($wp_rewrite->pagination_base)?\d+$@", $slug) || apply_filters('wp_unique_post_slug_is_bad_hierarchical_slug', false, $slug, $post_type, $post_parent)) {
			$suffix = 2;
			do {
				$alt_post_name = _truncate_post_slug($slug, 200 - (strlen($suffix) + 1)) . "-$suffix";
				$post_name_check = $wpdb->get_var($wpdb->prepare($check_sql, $alt_post_name, $post_type, $post_ID, $post_parent));
				$suffix++;
			} while ($post_name_check);
			$slug = $alt_post_name;
		}

		return $slug;
	}

	/**
	 * Remove Query Var
	 *
	 * @param array $vars
	 * @return array $vars
	 */
	public function removeQueryVar($vars)
	{
		if (!empty($vars['attachment'])) {
			$vars['page'] = '';
			$vars['name'] = $vars['attachment'];
			unset($vars['attachment']);
		}

		return $vars;
	}

	/**
	 * Change Link to File
	 *
	 * @param string $url
	 * @param int $id
	 * @return string $url
	 */
	public function changeLinkToFile($url, $id)
	{
		$attachment_url = wp_get_attachment_url($id);
		if ($attachment_url) {
			return $attachment_url;
		}

		return $url;
	}

	/**
	 * Redirect Pages to File
	 */
	public function redirectPagesToFile()
	{
		if (is_attachment()) {
			$id = get_the_ID();
			$url = wp_get_attachment_url($id);
			if ($url) {
				wp_redirect($url, 301);
				die;
			}
		}
	}

	/**
	 * Make Private
	 *
	 * @param array $args
	 * @param string $slug
	 * @return string $url
	 */
	public function makePrivate($args, $slug)
	{
		if ($slug === 'attachment') {
			$args['public'] = false;
			$args['publicly_queryable'] = false;
		}

		return $args;
	}
}
