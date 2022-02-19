import { useAtom } from 'jotai';
import { useState } from '@wordpress/element';
import { TextControl, Button } from '@wordpress/components';
import {
  Row,
  RowKey,
  RowValue,
  RowValueUndo,
  RowValueUndoIn,
  RowState,
} from './Row';
import {
  selectedIndexDataAtom,
  selectedIndexDataComponentAtom,
} from '../../../atoms/admin';
import {
  getInterventionKey,
  getValue,
  getKeyParams,
} from '../../../utils/admin';
import { __ } from '../../../utils/wp';

/**
 * Is Text Item
 *
 * @param {string} k
 * @returns {boolean}
 */
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
  const interventionKey = getInterventionKey(key);
  const [data] = useAtom(selectedIndexDataAtom);
  const [, setComponent] = useAtom(selectedIndexDataComponentAtom);
  const [value, immutable] = getValue(data.components, interventionKey);
  const init = value === false ? '' : value;
  const [state, setState] = useState(init);

  /**
   * Tasks
   */
  const add = (value) => {
    setComponent(['add', interventionKey, value]);
  };

  const del = () => {
    setComponent(['del', interventionKey]);
  };

  /**
   * Handler
   *
   * @param {string|number} value
   */
  const handler = (value) => {
    if (type === 'number') {
      value = value <= 0 ? '' : Number(value);
    }

    value !== '' ? add(value) : del();
    setState(value);
  };

  /**
   * Render
   */
  return (
    <Row item={key} immutable={immutable}>
      <RowState state={state} />
      <RowKey>{interventionKey}</RowKey>
      <RowValue>
        <TextControl
          label={false}
          hideLabelFromVision={false}
          value={state}
          placeholder={__(getKeyParams(key))}
          type={type}
          onChange={(value) => handler(value)}
        />
        {immutable === false && state !== '' && (
          <RowValueUndo>
            <Button className="is-secondary" onClick={() => handler('')}>
              <RowValueUndoIn />
            </Button>
          </RowValueUndo>
        )}
      </RowValue>
    </Row>
  );
};

export { isTextItem, TextItem };
