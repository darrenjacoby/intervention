import { useState, useEffect, useContext } from '@wordpress/element';
import { TextControl, Button } from '@wordpress/components';
import ComponentsContext from '../ComponentsContext';
import { Row, RowState } from './Row';
import { getInterventionKey } from '../../../utils/admin';
import { __ } from '../../../utils/wp';

const isTextItem = (k) => {
  return k.includes(':text');
};

/**
 * Text Item
 *
 * @param {object} { key: {string} key }
 * @returns <TextItem />
 */
const TextItem = ({ item: key, type = 'text' }) => {
  const { api, getEdited, setEdited } = useContext(ComponentsContext);
  const [value, immutable] = getEdited(key);
  const init = value === false ? '' : value;
  const [state, setState] = useState(init);

  useEffect(() => {
    state !== ''
      ? api().add(getInterventionKey(key), state)
      : api().remove(getInterventionKey(key));

    setEdited(api().get());
  }, [state]);

  const handler = (value) => {
    if (immutable) {
      return;
    }

    if (type === 'number') {
      value = value <= 0 ? '' : value;
    }
    setState(value);
  };

  return (
    <Row item={key}>
      <RowState state={state} immutable={immutable} />
      <div className="flex w-full items-center">
        <div className="w-1/2">{getInterventionKey(key)}</div>

        <div
          className="
          w-1/2
          flex
          items-center
          border-l
          border-gray-2"
        >
          <TextControl
            label={false}
            hideLabelFromVision={false}
            value={state}
            placeholder={''}
            type={type}
            disabled={immutable}
            onChange={(value) => handler(value)}
          />
          {state !== '' && immutable === false && (
            <Button onClick={() => handler('')}>{__('Undo')}</Button>
          )}
        </div>
      </div>
    </Row>
  );
};

export { isTextItem, TextItem };
