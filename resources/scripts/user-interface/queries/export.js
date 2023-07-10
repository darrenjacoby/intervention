import apiFetch from '@wordpress/api-fetch';
import { exportSessionStorage } from '../sessions';

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
    data: { selected: exportSessionStorage() },
  });
};

export { exportQuery };
