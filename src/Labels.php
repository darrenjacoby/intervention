<?php

namespace Sober\Intervention;

trait Labels
{
    use Utils;

    /**
     * Get post type labels from $wp_post_types
     * Call methods to update plural and singular labels
     *
     * @param string $type
     * @param string|array $config
     */
    public function setLabels($type, $config)
    {
        $wp_post_type = get_post_type_object($type);
        $labels = $wp_post_type->labels;
        // route to one and many
        if ($this->isArrayValueSet(0, $config)) {
            $this->setLabelMany($labels, $config[0]);
        }
        if ($this->isArrayValueSet(1, $config)) {
            $this->setLabelOne($labels, $config[1]);
        }
    }

    /**
     * Set post type plural labels
     *
     * @param PostTypeLabels $labels
     * @param string $many
     * @return PostTypeLabels
     */
     
    public function setLabelMany($labels, $many)
    {
        $labels->name = __($many);
        $labels->view_items = __('View ' . $many);
        $labels->search_items = __('Search ' . $many);
        $labels->not_found = __('No ' . strtolower($many) . ' Found');
        $labels->not_found_in_trash = __('No ' . strtolower($many) . ' found in Trash');
        $labels->all_items = __('All ' . $many);
        $labels->filter_items_list = __('Filter ' . $many . ' list');
        $labels->items_list_navigation = __($many . ' list navigation');
        $labels->items_list = __($many . ' list');
        $labels->menu_name = __($many);
        return $labels;
    }

    /**
     * Set post type singular labels
     *
     * @param PostTypeLabels $labels
     * @param string $one
     * @return PostTypeLabels
     */
    public function setLabelOne($labels, $one)
    {
        $labels->singular_name = __($one);
        $labels->add_new = __('Add ' . $one);
        $labels->add_new_item = __('Add New ' . $one);
        $labels->edit_item = __('Edit ' . $one);
        $labels->new_item = __('New ' . $one);
        $labels->view_item = __('View ' . $one);
        $labels->parent_item_colon = __('Parent ' . $one . ':');
        $labels->archives = __($one . ' Archives');
        $labels->attributes = __($one . ' Attributes');
        $labels->insert_into_item = __('Insert into ' . strtolower($one));
        $labels->uploaded_to_this_item = __('Uploaded to this ' . strtolower($one));
        $labels->filter_items_list = __('Filter ' . strtolower($one) . ' list ');
        $labels->name_admin_bar = __($one);
        return $labels;
    }

    /**
     * Set post type icon
     *
     * @param string $type
     * @param array $config
     */
    public function setLabelIcon($type, $config)
    {
        global $menu;
        switch ($type) {
            case 'post':
                $position = 5;
                break;
            case 'page':
                $position = 20;
                break;
            default:
                $position = 0;
                break;
        }
        if ($this->isArrayValueSet(2, $config)) {
            $icon = $config[2];
            // Append 'dashicons-' prefix if it has not been included
            if (strpos($icon, 'dashicons-') === false) {
                $icon = 'dashicons-' . $icon;
            }
            $menu[$position][6] = $icon;
        }
    }
}
