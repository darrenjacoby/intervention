<?php

namespace Sober\Intervention\Admin\Common\All;

use Sober\Intervention\Admin\Support\All\Search as SearchSupport;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Common/All/Search
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'common.all.search',
 * ]
 */
class Search
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

        $compose = $compose->has('common.all')->add('common.all.', [
            'search',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        if ($this->config->get('common.all.search')) {
            SearchSupport::set('all')->remove(['*.all.search']);
        }
    }
}
