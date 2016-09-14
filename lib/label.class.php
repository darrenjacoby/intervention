<?php namespace Sober\Intervention;

class Label
{
    public static function setLabels($post_type, $instance)
    {
        global $wp_post_types;
        $labels = $wp_post_types[$post_type]->labels;
        if (Util::isArrayValueSet(0, $instance)) {
            self::setPlural($labels, $instance[0]);
        }
        if (Util::isArrayValueSet(1, $instance)) {
            self::setSingular($labels, $instance[1]);
        }
    }

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

    public static function setSingular($labels, $singular)
    {
        $labels->singular_name = __('Add New ' . $singular);
        $labels->add_new = __('Add ' . $singular);
        $labels->add_new_item = __('Add ' . $singular);
        $labels->edit_item = __('Edit ' . $singular);
        $labels->new_item = __('New ' . $singular);
        $labels->view_item = __('View ' . $singular);
        $labels->parent_item_colon = __('Parent ' . $singular . ':');
        $labels->insert_into_item = __('Insert into ' . $singular);
        $labels->uploaded_to_this_item = __('Uploaded to this ' . $singular);
        $labels->name_admin_bar = __($singular);
        return $labels;
    }

    public static function setIcon($post_type, $instance)
    {
        global $menu;
        switch ($post_type) {
            case 'post':
                $position = 5;
                break;
            case 'page':
                $position = 20;
                break;
            case 'attachment':
                $position = 10;
                break;
        }
        if (Util::isArrayValueSet(2, $instance)) {
            $icon = $instance[2];
            // If dashicons- is not present, add it
            if (strpos($icon, 'dashicons-') === false) {
                $icon = 'dashicons-' . $icon;
            }
            $menu[$position][6] = $icon;
        }
    }
}
