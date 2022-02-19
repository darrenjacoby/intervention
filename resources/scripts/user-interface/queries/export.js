import apiFetch from '@wordpress/api-fetch';
import { exportSelectionSession } from '../sessions';

/**
 * Export Admin Options
 *
 * @description query export data.
 *
 * @returns {object}
 */
const exportAdminOptions = async () => {
  return await apiFetch({
    url: intervention.route.exportAdminOptions.url,
    method: 'POST',
  });
};

/**
 * Export Query
 *
 * @description query export data.
 *
 * @returns {object}
 */
const exportQuery = async () => {
  return await apiFetch({
    url: intervention.route.export.url,
    method: 'POST',
    data: { selected: exportSelectionSession() },
  });
};

export { exportAdminOptions, exportQuery };
