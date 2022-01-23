import React from 'react';
import { useState, useEffect } from '@wordpress/element';
import { useAtom } from 'jotai';
import { CustomSelectControl, Button } from '@wordpress/components';
import { Row, RowKey, RowValue, RowValueUndo, RowState } from './Row';
import {
  selectedIndexDataAtom,
  selectedIndexDataComponentAtom,
} from '../../../atoms/admin';
import { getInterventionKey, getValue } from '../../../utils/admin';
import { __ } from '../../../utils/wp';

/**
 * Options Select Control
 */
const optionsSelectControl = intervention.route.admin.data.dashicons.map(
  (value) => {
    return { key: value, name: value, value };
  }
);

/**
 * Options All
 *
 * @description create blank entry item and merge with `intervention.route.admin.data.dashicons`.
 */
const optionsAll = [{ key: '', name: '', value: '' }, ...optionsSelectControl];

/**
 * Is Route
 *
 * @param {string} k
 * @returns {boolean}
 */
const isIconItem = (k) => {
  return k.includes(':icon');
};

/**
 * Icon Item
 *
 * @param {object} { key: {string} key }
 * @returns <RouteItem />
 */
const IconItem = ({ item: key, children }) => {
  const interventionKey = getInterventionKey(key);
  const [data] = useAtom(selectedIndexDataAtom);
  const [, setComponent] = useAtom(selectedIndexDataComponentAtom);
  const [value, immutable] = getValue(data.components, interventionKey);
  const init = value === false ? '' : value;
  const [state, setState] = useState(init);

  /**
   * Immutable Option
   *
   * @description only return the hard coded option.
   *
   * @param {string} value
   * @returns {array}
   */
  const immutableOption = (value) => {
    return [{ label: value, value }];
  };

  /**
   * Options
   *
   * @description resolve correct options.
   */
  const options = immutable ? immutableOption(state) : optionsAll;

  /**
   * Handler
   *
   * @param {string} value
   */
  const handler = (value) => {
    if (immutable) {
      return;
    }

    value !== ''
      ? setComponent(['add', interventionKey, value])
      : setComponent(['del', interventionKey]);

    setState(value);
  };

  /**
   * Render
   */
  return (
    <>
      <Row item={key}>
        <RowState state={state} immutable={immutable} />
        <RowKey>{interventionKey}</RowKey>
        <RowValue>
          <CustomSelectControl
            label="Route"
            hideLabelFromVision={true}
            value={options.find((option) => option.key === state)}
            disabled={immutable}
            options={options}
            onChange={(route) => handler(route)}
          />

          {immutable === false && state !== '' && (
            <RowValueUndo>
              <Button className="is-secondary" onClick={() => handler('')}>
                {__('Undo')}
              </Button>
            </RowValueUndo>
          )}
        </RowValue>
      </Row>
    </>
  );
};

export { isIconItem, IconItem };
