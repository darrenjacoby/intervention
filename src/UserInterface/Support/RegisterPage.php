<?php

namespace Sober\Intervention\UserInterface\Support;

/**
 * UserInterface/RegisterPage
 *
 * Register custom WordPress options page.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 */
class RegisterPage
{
    /**
     * Initialize
     *
     * @param string $template_path
     */
    public function __construct()
    {
    }

    /**
     * Get Menu Title
     *
     * Return the options page menu title.
     *
     * @return string
     */
    public function getMenuTitle()
    {
        return __('Intervention', INTERVENTION_TEXT_DOMAIN);
    }

    /**
     * Get Page Title
     *
     * Return the options page title.
     *
     * @return string
     */
    public function getPageTitle()
    {
        return __('Intervention', INTERVENTION_TEXT_DOMAIN);
    }

    /**
     * Get Text Domain
     *
     * Return the active theme text domain.
     *
     * @return string
     */
    public function getTextDomain()
    {
        return INTERVENTION_TEXT_DOMAIN;
    }

    /**
     * Get Parent Slug
     *
     * Return the options page parent slug.
     *
     * @return string
     */
    public function getParentSlug()
    {
        return 'tools.php';
    }

    /**
     * Get Slug
     *
     * Return the options page slug.
     *
     * @return string
     */
    public function getSlug()
    {
        return 'intervention';
    }

    /**
     * Get Capabilities
     *
     * Return the options page user capabilities.
     *
     * @return string
     */
    public function getCapabilities()
    {
        return 'install_plugins';
    }

    /**
     * Render Template
     *
     * Render the options page template.
     *
     * @param string $template
     */
    public function render()
    {
        echo '<div id="intervention"></div>';
    }
}
