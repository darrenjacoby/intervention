<?php

namespace Sober\Intervention\Admin\Tools;

use Sober\Intervention\Admin\SharedApi;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Tools/SiteHealth
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'tools.site-health',
 *     'tools.site-health' => (string) $route,
 *     'tools.site-health.title' => (string) $title,
 *     'tools.site-health.title.[menu, page]' => (string) $title,
 * ]
 */
class SiteHealth
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $compose = Composer::set(Arr::normalize($config));

        $compose = $compose->has('tools.site-health.title')->add('tools.site-health.title.', [
            'menu', 'page',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        $shared = SharedApi::set('tools.site-health', $this->config);
        $shared->router();
        $shared->title();
    }
}
