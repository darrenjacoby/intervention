<?php

namespace Jacoby\Intervention\Application\Support\Posttypes;

use Jacoby\Intervention\Support\Arr;

/**
 * Support/Posttypes/Update
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/get_post_type_object/
 */
class Update
{
	protected $posttype;
	protected $config;

	/**
	 * Interface
	 *
	 * @param string $posttype
	 * @param string|array $config
	 * @return Jacoby\Intervention\Application\Support\Posttypes\Register
	 */
	public static function set($posttype = 'post', $config = false)
	{
		return new self($posttype, $config);
	}

	/**
	 * Initialize
	 *
	 * @param string $posttype
	 * @param string|array $config
	 */
	public function __construct($posttype = 'post', $config = false)
	{
		$this->posttype = $posttype;
		$this->config = Arr::collect($config);
		$this->update();
	}

	/**
	 * Update
	 *
	 * Update the post type.
	 *
	 * @param string $this->posttype
	 */
	public function update()
	{
		$object = get_post_type_object($this->posttype);

		/**
		 * Set Labels
		 *
		 * Set `$object->labels` to `$this->config[labels]`
		 *
		 * @param string $this->config
		 */
		if ($this->config->has('labels')) {
			$object->labels = (object) $this->config->pull('labels');
		}

		/**
		 * Set Capabilities
		 *
		 * Set `$object->cap` with `$this->config[capabilities]`
		 *
		 * @param string $this->config
		 */
		if ($this->config->has('capabilities')) {
			$capabilities = $this->config->pull('capabilities');
			$capabilities = Arr::collect($object->cap)->merge($capabilities);
			$object->cap = (object) $capabilities->toArray();
		}

		/**
		 * Set Supports
		 *
		 * Set `$_wp_post_type_features` to `$this->config[supports]`
		 *
		 * @param string $this->config
		 */
		if ($this->config->has('supports')) {
			$supports = Arr::transformEntriesToTrue($this->config->get('supports'));
			// $supports = Arr::transformKeysToDashcase($this->config->pull('supports'));
			$GLOBALS['_wp_post_type_features'][$this->posttype] = $supports;
		}

		/**
		 * Set Template
		 *
		 * Set `$object->template`to `$this->config[template]`
		 * Convert ['core/x' => true] to [0 => 'core/x'] recursively
		 *
		 * @param string $this->config
		 */
		/*
		if ($this->config->has('template')) {
		$template = $this->config->pull('template');
		$object->template = Arr::transform($template, function ($k, $v) {
		return $v === true ? [0, $k] : [$k, $v];
		});
		}
		 */

		// Set remaining `$object->{$key}` overrides from `$this->config`
		$this->config->map(function ($value, $key) use ($object) {
			$object->{$key} = $value;
		});
	}
}
