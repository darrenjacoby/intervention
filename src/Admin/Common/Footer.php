<?php

namespace Sober\Intervention\Admin\Common;

use Sober\Intervention\Support\Arr;
use Sober\Intervention\Support\Composer;

/**
 * Common/Footer
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_footer_text/
 * @link https://developer.wordpress.org/reference/hooks/update_footer/
 *
 * @param
 * [
 *     'common.footer',
 *     'common.footer.credit',
 *     'common.footer.credit' => (string) $credit,
 *     'common.footer.version',
 * ]
 */
class Footer
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

        $compose = $compose->has('common.footer')->add('common.footer.', [
            'credit', 'version',
        ]);

        $this->config = $compose->get();
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        if ($this->config->get('common.footer.credit')) {
            add_filter('admin_footer_text', function () {
                $label = $this->config->get('common.footer.credit');
                return $label === true ? '' : $label;
            });
        }

        if ($this->config->get('common.footer.version')) {
            add_filter('update_footer', '__return_empty_string', 11);
        }
    }
}
