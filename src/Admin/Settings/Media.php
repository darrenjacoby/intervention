<?php

namespace Jacoby\Intervention\Admin\Settings;

use Jacoby\Intervention\Admin\SharedApi;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;

/**
 * Settings/Media
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_head/
 *
 * @param
 * [
 *     'settings.media',
 *     'settings.media' => (string) $route,
 *     'settings.media.title' => (string) $title,
 *     'settings.media.title.[menu, page]' => (string) $title,
 *     'settings.media.tabs',
 *     'settings.media.tabs.[screen-options, help]',
 *     'settings.media.sizes',
 *     'settings.media.uploads',
 * ]
 */
class Media
{
	protected $config;

	/**
	 * Initialize
	 *
	 * @param array $config
	 */
	public function __construct($config = false)
	{
		$compose = Composer::set(Arr::normalizeTrue($config));

		$compose = $compose->has('settings.media.all')->add('settings.media.', [
			'tabs', 'sizes', 'uploads',
		]);

		$compose = $compose->has('settings.media.title')->add('settings.media.title.', [
			'menu', 'page',
		]);

		$compose = $compose->has('settings.media.tabs')->add('settings.media.tabs.', [
			'screen-options', 'help',
		]);

		$this->config = $compose->get();
		$this->hook();
	}

	/**
	 * Hook
	 */
	protected function hook()
	{
		$shared = SharedApi::set('settings.media', $this->config);
		$shared->router();
		$shared->menu();
		$shared->title();
		$shared->tabs();

		add_action('admin_head-options-media.php', [$this, 'head']);
	}

	/**
	 * Head
	 */
	public function head()
	{
		if ($this->config->has('settings.media.sizes')) {
			echo '<script>
				jQuery(document).ready(function() {
					jQuery("#thumbnail_size_w").parents("table").prev().prev().remove();
					jQuery("#thumbnail_size_w").parents("table").prev().remove();
					jQuery("#thumbnail_size_w").parents("table").remove();
				});
			</script>';
		}

		if ($this->config->has('settings.media.sizes.thumbnail')) {
			echo '<script>
				jQuery(document).ready(function() {
					jQuery("#thumbnail_size_w").parents("tr").remove();
				});
			</script>';
		}

		if ($this->config->has('settings.media.sizes.medium')) {
			echo '<script>
				jQuery(document).ready(function() {
					jQuery("#medium_size_w").parents("tr").remove();
				});
			</script>';
		}

		if ($this->config->has('settings.media.sizes.large')) {
			echo '<script>
				jQuery(document).ready(function() {
					jQuery("#large_size_w").parents("tr").remove();
				});
			</script>';
		}

		if ($this->config->has('settings.media.uploads')) {
			echo '<script>
				jQuery(document).ready(function() {
					jQuery("#uploads_use_yearmonth_folders").parents("table").prev().remove();
					jQuery("#uploads_use_yearmonth_folders").parents("table").remove();
				});
			</script>';
		}
	}
}
