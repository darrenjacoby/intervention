import { useAtom } from 'jotai';
import { useState } from '@wordpress/element';
import { componentsAtom } from '../../AdminAtoms';
import { Row, RowState } from './Row';
import { getInterventionKey, getValue } from '../../../utils/admin';

/**
 * Is Boolean Item
 *
 * @param {string} k
 * @returns {boolean}
 */
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
  const interventionKey = getInterventionKey(key);
  const [components, setComponents] = useAtom(componentsAtom);
  const [value, immutable] = getValue(components, interventionKey);
  const [state, setState] = useState(value);

  /**
   * Handler
   */
  const handler = () => {
    if (immutable) {
      return;
    }

    setComponents(['toggle', interventionKey]);
    setState(!state);
  };

  /**
   * Render
   */
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
