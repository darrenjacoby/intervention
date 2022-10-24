<?php

namespace Sober\Intervention\Admin\Common\All;

use Sober\Intervention\Admin\Support\All\Pagination as PaginationSupport;
use Sober\Intervention\Admin\Support\Tabs;
use Sober\Intervention\Support\Arr;

/**
 * Common/All/Pagination
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'common.all.pagination' => (int) $pagination,
 * ]
 */
class Pagination
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalizeTrue($config);
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        if ($this->config->get('common.all.pagination')) {
            PaginationSupport::set('all')->to($this->config->get('common.all.pagination'));
            Tabs::set('all')->remove(['screen-options.pagination']);
        }
    }
}
