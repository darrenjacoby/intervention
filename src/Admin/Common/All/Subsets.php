<?php

namespace Sober\Intervention\Admin\Common\All;

use Sober\Intervention\Admin\Support\All\Subsets as SubsetsSupport;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Common/All/Subsets
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'common.all.subsets',
 * ]
 */
class Subsets
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
            'list',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        if ($this->config->get('common.all.subsets')) {
            SubsetsSupport::set('all')->remove(['*.all.subsets']);
        }
    }
}
