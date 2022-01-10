import { useAtom } from 'jotai';
import { useState, useEffect } from '@wordpress/element';
import { TextControl, Button } from '@wordpress/components';
import { Row, RowState } from './Row';
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
   * Effect
   */
  /*
  useEffect(() => {
    if (state !== '') {
      setApplied(['add', interventionKey, state]);
    } else {
      setApplied(['del', interventionKey]);
    }
  }, [state]);
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
    if (immutable) {
      return;
    }

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
    <Row item={key}>
      <RowState state={state} immutable={immutable} />
      <div
        className="
          flex
          w-full
          items-center"
      >
        <div className="w-1/2">{interventionKey}</div>

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
            placeholder={__(getKeyParams(key))}
            type={type}
            disabled={immutable}
            onChange={(value) => handler(value)}
          />
          {immutable === false && state !== '' && (
            <Button onClick={() => handler('')}>{__('Undo')}</Button>
          )}
        </div>
      </div>
    </Row>
  );
};

export { isTextItem, TextItem };
