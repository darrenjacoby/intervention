<?php

namespace Sober\Intervention\Admin\Common;

use Sober\Intervention\Admin\Support\Title as TitleSupport;
use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Common/Tabs
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @param
 * [
 *     'common.title-link',
 * ]
 */
class TitleLink
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

        $compose = $compose->has('common.title')->add('common.title.', [
            'link',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        if ($this->config->has('common.title-link')) {
            TitleSupport::set('all')->removeLink();
        }
    }
}
