import apiFetch from '@wordpress/api-fetch';

/**
 * Import Query
 *
 * @description query import data.
 *
 * @returns {object}
 */
const importQuery = async () => {
  return await apiFetch({
    url: intervention.route.import.url,
    method: 'POST',
  });
};

export { importQuery };
