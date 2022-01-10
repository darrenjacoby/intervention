import apiFetch from '@wordpress/api-fetch';
import { exportSelectionSession } from '../sessions';
import { getCheckedItems, setCheckedItems } from '../interface/Export';

/**
 * Export Query
 *
 * @description query export data.
 *
 * @returns {object}
 */
const exportQuery = async () => {
  const checked = exportSelectionSession()
    ? setCheckedItems(exportSelectionSession())
    : setCheckedItems(true);
  const groups = getCheckedItems(checked);

  return await apiFetch({
    url: intervention.route.export.url,
    method: 'POST',
    data: { groups },
  });
};

export { exportQuery };
