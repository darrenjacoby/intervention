import apiFetch from '@wordpress/api-fetch';
import { exportSelectionSession } from '../sessions';

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

export { exportQuery };
