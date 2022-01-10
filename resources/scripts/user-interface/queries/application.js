import apiFetch from '@wordpress/api-fetch';

/**
 * Application Query
 *
 * @description query application data.
 *
 * @returns {object}
 */
const applicationQuery = async () => {
  return await apiFetch({
    url: intervention.route.application.url,
    method: 'POST',
  });
};

export { applicationQuery };
