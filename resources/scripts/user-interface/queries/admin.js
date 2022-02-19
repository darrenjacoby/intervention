import apiFetch from '@wordpress/api-fetch';
import { setRoleKeyOrder } from '../interface/Admin/Save';

/**
 * Admin Query
 *
 * @description query admin data.
 *
 * @returns {object}
 */
const adminQuery = async () => {
  const res = await apiFetch({
    url: intervention.route.admin.url,
    method: 'POST',
  });
  const sorted = setRoleKeyOrder(res.data);
  return sorted.data;
};

export { adminQuery };
