<?php

namespace Sober\Intervention\UserInterface\Tools;

use Sober\Intervention\Support\Middleware\WordPressToIntervention;

/**
 * Import
 *
 * Import Intervention application config file to the WordPress database.
 *
 * @package WordPress
 * @subpackage Intervention
 * @since 2.0.0
 *
 * @link https://developer.wordpress.org/reference/functions/add_action/
 * @link https://developer.wordpress.org/reference/functions/register_rest_route/
 * @link https://developer.wordpress.org/reference/functions/wp_localize_script/
 * @link https://github.com/brick/varexporter
 */
class Import
{
    public static $store = [];

    /**
     * Initialize
     *
     * @param array $config
     */
    public function __construct()
    {
    }

    /**
     * Save
     *
     * Store updated values from the `OptionsApi`.
     */
    public static function save($database_k, $intervention_k, $intervention_v)
    {
        self::$store[$database_k] = [
            'intervention_k' => $intervention_k,
            'intervention_v' => $intervention_v,
        ];
    }

    /**
     * Update Database
     *
     * @param \WP_REST_Request
     * @return function rest_ensure_response()
     * [
     *      'items' => [],
     *      'diffs' => (int)
     *      'imported' => [
     *          'completed' => [],
     *          'skipped' => [],
     *      ],
     * ]
     *
     * @link https://developer.wordpress.org/reference/functions/rest_ensure_response/
     */
    public function request(\WP_REST_Request $request)
    {
        $import = $request->get_param('import') ?? false;

        /**
         * Remove all `pre_option_` filters so we can do
         * comparisons and updates without them confusing
         * database and intervention results.
         */
        foreach (self::$store as $database_k => $item) {
            remove_all_actions('pre_option_' . $database_k);
        }

        /**
         * Response
         */
        $response = [];
        $response['imported'] = ['completed' => [], 'skipped' => []];
        $response['items'] = [];
        $response['diff'] = 0;

        /**
         * Loop through items saved in `store` from the `OptionsApi`.
         */
        foreach (self::$store as $database_k => $item) {
            $database_v = get_option($database_k);
            $database_v_transformed = WordPressToIntervention::transform($item['intervention_k'], $database_v);

            /**
             * Import to database if `import === true` and intervention and database values are not equal.
             */
            if ($import && ($item['intervention_v'] !== $database_v_transformed)) {
                $status = update_option($database_k, $item['intervention_v']);
                $status = $status === true ? 'completed' : 'skipped';
                $response['imported'][$status][] = $item['intervention_k'];

                /**
                 * Update the database transformed value to `intervention_v`.
                 */
                if ($status === 'completed') {
                    $database_v_transformed = $item['intervention_v'];
                }
            }

            /**
             * Increase `diff` integer if intervention and database values are not equal.
             */
            if ($item['intervention_v'] !== $database_v_transformed) {
                $response['diff']++;
            }

            /**
             * Items array with intervention and database data.
             */
            $response['items'][] = [
                'intervention' => [
                    'key' => $item['intervention_k'],
                    'value' => $item['intervention_v'],
                ],
                'database' => [
                    'key' => $database_k,
                    'value' => $database_v_transformed,
                ],
            ];
        }

        return rest_ensure_response($response);
    }
}
