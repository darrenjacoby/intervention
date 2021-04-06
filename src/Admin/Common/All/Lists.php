<?php

namespace Sober\Intervention\Admin\Common\All;

use Sober\Intervention\Admin\Support\All\Lists\Actions as ListActions;
use Sober\Intervention\Admin\Support\All\Lists\Columns as ListColumns;
use Sober\Intervention\Admin\Support\All\Lists\Count as ListCount;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Common/All/Lists
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'common.all.list',
 *     'common.all.list.count',
 *     'common.all.list.cols',
 *     'common.all.list.actions',
 * ]
 */
class Lists
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

        $compose = $compose->has('common.all')->add('common.all.', [
            'list',
        ]);

        $compose = $compose->has('common.all.list')->add('common.all.list.', [
            'actions', 'cols', 'count',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        if ($this->config->has('common.all.list.actions')) {
            ListActions::set('all')->remove(['*.all.list.actions']);
        }

        if ($this->config->has('common.all.list.cols')) {
            ListColumns::set('all')->remove(['*.all.list.cols']);
        }

        if ($this->config->has('common.all.list.count')) {
            ListCount::set('all')->remove();
        }
    }
}
