<?php

namespace Jacoby\Intervention\Application;

use Jacoby\Intervention\Application\Support\Taxonomies\Register;
use Jacoby\Intervention\Application\Support\Taxonomies\Remove;
use Jacoby\Intervention\Support\Arr;
use Jacoby\Intervention\Support\Composer;
use Jacoby\Intervention\Support\Str;

/**
 * Taxonomies
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init
 * @link https://developer.wordpress.org/reference/functions/taxonomy_exists/
 *
 * @param
 * [
 *     'taxonomies.{name}' => (boolean|string|array) $enable|$label|$config,
 * ]
 */
class Taxonomies
{
	protected $taxonomies;
	protected $configs;
	protected $taxonomy;
	protected $config;

	/**
	 * Initialize
	 *
	 * @param array $config
	 */
	public function __construct($config = [])
	{
		// Set `$this->config` to group `taxonomies`
		$this->configs = Arr::transformKeysToSnakecase($config);

		$this->configs = Composer::set(Arr::normalize($this->configs))
			->group('taxonomies')
			->get();

		// Set `$this->taxonomies` with unique taxonomies
		$this->taxonomies = Composer::set($this->configs)
			->uniqueFirstKeys()
			->get();

		$this->hook();
	}

	/**
	 * Hook
	 *
	 * Loop through each taxonomy, set paramaters and route.
	 */
	public function hook()
	{
		add_action('init', function () {
			foreach ($this->taxonomies as $taxonomy) {
				$this->taxonomy = $taxonomy;
				$this->config = Composer::set($this->configs)
					->group($this->taxonomy)
					->get();
				$this->config = Arr::collect(Arr::multidimensional($this->config));
				$this->setExistingTaxonomy();
				$this->route();
			}
		});
	}

	/**
	 * Merge Existing Taxonomy
	 *
	 * If taxonomy exists then merge config with `$this->config`
	 */
	public function setExistingTaxonomy()
	{
		if (!taxonomy_exists($this->taxonomy)) {
			return;
		}

		$existing_config = json_decode(json_encode(get_taxonomy($this->taxonomy)), true);
		$this->config = Arr::collect($existing_config)->merge($this->config->toArray());
	}

	/**
	 * Route
	 *
	 * Unregister, register or modify the taxonomy.
	 *
	 * @param string $this->taxonomy
	 */
	public function route()
	{
		$value = $this->configs->get($this->taxonomy);

		if ($value === false) {
			Remove::set($this->taxonomy);
			return;
		}

		if (taxonomy_exists($this->taxonomy)) {
			Remove::set($this->taxonomy);
		}

		Register::set($this->taxonomy, $this->config->toArray());
	}
}
