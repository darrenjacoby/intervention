<?php

namespace Sober\Intervention\Application;

use Sober\Intervention\Application\Support\Element;
use Sober\Intervention\Support\Arr;

/**
 * Permalinks
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 * @link https://developer.wordpress.org/reference/functions/update_option/
 * @link https://developer.wordpress.org/reference/functions/flush_rewrite_rules/
 *
 * @param
 * [
 *     'permalinks.structure' => (string) $tags,
 *     'permalinks.category-base' => (boolean|string) false|$category_base_path,
 *     'permalinks.tag-base' => (boolean|string) false|$tag_base_path,
 *     'permalinks.search-base' => (boolean|string) true|$search_base_path
 *     'permalinks.author-base' => (string) $author_base_path,
 *     'permalinks.comments-base' => (string) $comments_base_path,
 *     'permalinks.pagination-base' => (string) $pagination_base_path,
 *     'permalinks.comments-pagination-base' => (string) $comments_pagination_base_path,
 *     'permalinks.feed-base' => (string) $feed_base_path,
 * ]
 */
class Permalinks
{
    protected $config;

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct($config = false)
    {
        $this->config = Arr::normalize($config);
        $this->hook();
    }

    /**
     * Hook
     */
    protected function hook()
    {
        add_action('init', [$this, 'options']);
        add_action('admin_head-options-permalink.php', [$this, 'admin']);
    }

    /**
     * Options
     */
    public function options()
    {
        if ($this->config->has('permalinks.structure')) {
            $structure = $this->config->has('permalinks.structure');
            if (get_option('permalink_structure') !== $structure) {
                update_option('permalink_structure', $this->config->get('permalinks.structure'));
                flush_rewrite_rules();
            }
        }

        if ($this->config->has('permalinks.category-base')) {
            update_option('category_base', $this->config->get('permalinks.category-base'));
        }

        if ($this->config->has('permalinks.tag-base')) {
            update_option('tag_base', $this->config->get('permalinks.tag-base'));
        }
        
        //Set before: permalinks.search-base to get correct $pagination_base
        if ($this->config->has('permalinks.pagination-base')) {
            $pagination_base = $this->config->get('permalinks.pagination-base');
        
            $GLOBALS['wp_rewrite']->pagination_base = $pagination_base;
 
            $GLOBALS['wp_rewrite']->flush_rules();
            if (get_option('current_rewrite_pagination_base') !== $pagination_base) {
                $GLOBALS['wp_rewrite']->flush_rules();
                update_option('current_rewrite_pagination_base', $pagination_base);
            }
        }
        
        if ($this->config->has('permalinks.search-base')) {
            $search_base = $this->config->get('permalinks.search-base') === true ?
                'search' :
                $this->config->get('permalinks.search-base');
    
            $pagination_base = $GLOBALS['wp_rewrite']->pagination_base;

            add_action('template_redirect', function () use ($search_base, $pagination_base) {
                if (is_search() && !empty($_GET['s'])) {
                    $location = '/' . $search_base . '/' . $_GET['s'];
                    if (isset($_GET['paged']) && $_GET['paged']) {
                        $location .= '/' . $pagination_base . '/' . $_GET['paged'];
                    }
                    wp_redirect(trailingslashit(home_url($location)), 301);
                    exit();
                }
            });

            $GLOBALS['wp_rewrite']->search_base = $search_base;
            
            if ((get_option('current_rewrite_search_base') !== $search_base) || (get_option('current_rewrite_pagination_base') !== $pagination_base)) {
                add_rewrite_rule($search_base . '/([^/]+)/?$', 'index.php?s=$matches[1]', 'top');
                add_rewrite_rule($search_base . '/([^/]+)(/' . $pagination_base . '/(\d+))/?$', 'index.php?s=$matches[1]&paged=$matches[3]', 'top');
    
                $GLOBALS['wp_rewrite']->flush_rules();
                update_option('current_rewrite_search_base', $search_base);
            }
        }
        
        if ($this->config->has('permalinks.author-base')) {
            $author_base = $this->config->get('permalinks.author-base');
            
            $GLOBALS['wp_rewrite']->author_base = $author_base;
            
            if (get_option('current_rewrite_author_base') !== $author_base) {
                $GLOBALS['wp_rewrite']->flush_rules();
                update_option('current_rewrite_author_base', $author_base);
            }
        }
        
        if ($this->config->has('permalinks.comments-base')) {
            $comments_base = $this->config->get('permalinks.comments-base');
            
            $GLOBALS['wp_rewrite']->comments_base = $comments_base;
            
            if (get_option('current_rewrite_comments_base') !== $comments_base) {
                $GLOBALS['wp_rewrite']->flush_rules();
                update_option('current_rewrite_comments_base', $comments_base);
            }
        }
        
        if ($this->config->has('permalinks.comments-pagination-base')) {
            $comments_pagination_base = $this->config->get('permalinks.comments-pagination-base');
            
            $GLOBALS['wp_rewrite']->comments_pagination_base = $comments_pagination_base;
            
            if (get_option('current_rewrite_comments_pagination_base') !== $comments_pagination_base) {
                $GLOBALS['wp_rewrite']->flush_rules();
                update_option('current_rewrite_comments_pagination_base', $comments_pagination_base);
            }
        }
        
        if ($this->config->has('permalinks.comments-feed-base')) {
            $comments_feed_base = $this->config->get('permalinks.comments-feed-base');
            
            $GLOBALS['wp_rewrite']->comments_feed_base = $comments_feed_base;
            
            if (get_option('current_rewrite_comments_feed_base') !== $comments_feed_base) {
                $GLOBALS['wp_rewrite']->flush_rules();
                update_option('current_rewrite_comments_feed_base', $comments_feed_base);
            }
        }
    }

    /**
     * Admin
     */
    public function admin()
    {
        if ($this->config->has('permalinks.structure')) {
            Element::disabled('.permalink-structure input[type=radio], #permalink_structure, .available-structure-tags button');
        }

        if ($this->config->has('permalinks.category-base')) {
            Element::disabled('#category_base');
        }

        if ($this->config->has('permalinks.tag-base')) {
            Element::disabled('#tag_base');
        }
    }
}
