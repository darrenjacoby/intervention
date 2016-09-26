<?php

namespace Sober\Intervention;

class Label
{
    /**
     * Get post type labels from $wp_post_types
     * Call methods to update plural and singular labels
     *
     * @param string $type
     * @param string|array $config
     */
    public static function setLabels($type, $config)
    {
        global $wp_post_types;
        $labels = $wp_post_types[$type]->labels;
        if (Util::isArrayValueSet(0, $config)) {
            self::setPlural($labels, $config[0]);
        }
        if (Util::isArrayValueSet(1, $config)) {
            self::setSingular($labels, $config[1]);
        }
    }

    /**
     * Set post type plural labels
     *
     * @param object $labels
     * @param string $plural
     * @return object
     */
    public static function setPlural($labels, $plural)
    {
        $labels->name = __($plural);
        $labels->search_items = __('Search ' . $plural);
        $labels->not_found = __('No ' . $plural . ' Found');
        $labels->not_found_in_trash = __('No ' . $plural . ' found in Trash');
        $labels->name_admin_bar = __($plural);
        $labels->all_items = __('All ' . $plural);
        $labels->archives = __($plural . ' Archives');
        $labels->filter_items_list = __('Filter ' . $plural . ' list');
        $labels->items_list_navigation = __($plural . ' list navigation');
        $labels->items_list = __($plural . ' list');
        $labels->menu_name = __($plural);
        return $labels;
    }

    /**
     * Set post type singular labels
     *
     * @param object $labels
     * @param string $singular
     * @return object
     */
    public static function setSingular($labels, $singular)
    {
        $labels->singular_name = __($singular);
        $labels->add_new = __('Add ' . $singular);
        $labels->add_new_item = __('Add New ' . $singular);
        $labels->edit_item = __('Edit ' . $singular);
        $labels->new_item = __('New ' . $singular);
        $labels->view_item = __('View ' . $singular);
        $labels->parent_item_colon = __('Parent ' . $singular . ':');
        $labels->insert_into_item = __('Insert into ' . $singular);
        $labels->uploaded_to_this_item = __('Uploaded to this ' . $singular);
        $labels->name_admin_bar = __($singular);
        return $labels;
    }

    /**
     * Set post type icon
     *
     * @param object $labels
     * @param string $plural
     */
    public static function setIcon($type, $config)
    {
        global $menu;
        switch ($type) {
            case 'post':
                $position = 5;
                break;
            case 'page':
                $position = 20;
                break;
        }
        if (Util::isArrayValueSet(2, $config)) {
            $icon = $config[2];
            // Append 'dashicons-' prefix if it has not been included
            if (strpos($icon, 'dashicons-') === false) {
                $icon = 'dashicons-' . $icon;
            }
            $menu[$position][6] = $icon;
        }
    }
}
