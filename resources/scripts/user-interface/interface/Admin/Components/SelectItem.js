import { useAtom } from 'jotai';
import { useState } from '@wordpress/element';
import { CustomSelectControl, Button } from '@wordpress/components';
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
  getCustomSelectOptionName,
  getCustomSelectOptionsArray,
} from '../../../utils/admin';
import { __ } from '../../../utils/wp';

/**
 * Is Select Item
 *
 * @param {string} k
 * @returns {boolean}
 */
const isSelectItem = (k) => {
  return k.includes(':select');
};

/**
 * Select Item
 *
 * @param {object} { key: {string} key }
 * @returns <RouteItem />
 */
const SelectItem = ({ item: key, staticData, children }) => {
  const interventionKey = getInterventionKey(key);
  const [data] = useAtom(selectedIndexDataAtom);
  const [, setComponent] = useAtom(selectedIndexDataComponentAtom);
  const [value, immutable] = getValue(data.components, interventionKey);
  const init = value === false ? '' : value;
  const [state, setState] = useState(init);
  const staticDataKeys = Object.keys(staticData);

  /**
   * Get Immutable Option
   *
   * @description only return the hard coded option.
   *
   * @param {string} value
   * @returns {array}
   */
  const getImmutableOption = (value) => {
    const name = getCustomSelectOptionName(value);
    return [{ key: value, name, value }];
  };

  /**
   * Options
   *
   * @description resolve correct options.
   */
  const options = immutable
    ? getImmutableOption(state)
    : getCustomSelectOptionsArray(staticDataKeys);

  /**
   * Handler
   *
   * @param {string} value
   */
  const handler = (selected) => {
    const value = selected !== '' ? selected.selectedItem.value : '';

    value !== ''
      ? setComponent(['add', interventionKey, value])
      : setComponent(['del', interventionKey]);

    setState(value);
  };

  /**
   * Select
   *
   * @returns <Select />
   */
  const Select = () => {
    return (
      <CustomSelectControl
        className="row"
        hideLabelFromVision={true}
        value={options.find((option) => option.value === state)}
        options={options}
        onChange={(route) => handler(route)}
      />
    );
  };

  /**
   * Render
   */
  return (
    <Row item={key} immutable={immutable}>
      <RowState state={state} />
      <RowKey>{interventionKey}</RowKey>
      <RowValue>
        <Select />

        {immutable === false && state !== '' && (
          <RowValueUndo>
            <RowValueUndoIn />
          </RowValueUndo>
        )}
      </RowValue>
    </Row>
  );
};

export { isSelectItem, SelectItem };
