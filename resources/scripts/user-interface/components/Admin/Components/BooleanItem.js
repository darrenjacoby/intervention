import { useContext, useState } from '@wordpress/element';
import ComponentsContext from '../ComponentsContext';
import { Row, RowState } from './Row';
import { getInterventionKey } from '../../../utils/admin';

const isBooleanItem = (k) => {
  return !k.includes(':');
};

/**
 * Boolean Item
 *
 * @param {object} { key: {string} key }
 * @returns <BooleanItem />
 */
const BooleanItem = ({ item: key }) => {
  const { api, getEdited, setEdited } = useContext(ComponentsContext);
  const [value, immutable] = getEdited(key);
  const [state, setState] = useState(value);

  const handler = () => {
    if (immutable) {
      return;
    }

    api().toggle(getInterventionKey(key));
    setEdited(api().get());
    setState(!state);
  };

  return (
    <div onClick={() => handler()}>
      <Row>
        <RowState state={value} immutable={immutable} />
        {getInterventionKey(key)}
      </Row>
    </div>
  );
};

export { isBooleanItem, BooleanItem };
