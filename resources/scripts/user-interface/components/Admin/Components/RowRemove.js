import { useContext } from '@wordpress/element';
import AdminContext from '../../AdminContext';
import Row from './Row';
import { getInterventionKey } from '../../../utils/admin';
import { __ } from '../../../utils/wp';

/**
 * Is Remove
 *
 * @param {*} tree
 * @returns {boolean}
 */
const isRowRemove = (key) => {
  return key === true;
};

/**
 * Remove Item
 *
 * @param {object} param
 * @returns {<Remove />}
 */
const RowRemove = ({ item: key }) => {
  const { api } = useContext(AdminContext);

  return (
    <div
      onClick={() => {
        api([{ key, value: true }]);
      }}
    >
      <Row item={key}>{getInterventionKey(key)}</Row>
    </div>
  );
};

export { RowRemove, isRowRemove };
