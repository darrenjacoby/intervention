import React from 'react';
import { useState, useEffect } from '@wordpress/element';
import { useAtom } from 'jotai';
import { SelectControl, Button } from '@wordpress/components';
import { Row, RowState } from './Row';
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
    return { label: value, value };
  }
);

/**
 * Options All
 *
 * @description create blank entry item and merge with `intervention.route.admin.data.dashicons`.
 */
const optionsAll = [{ label: '', value: '' }, ...optionsSelectControl];

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

    if (value !== '') {
      setComponent(['add', interventionKey, value]);
    } else {
      setComponent(['del', interventionKey]);
    }

    setState(value);
  };

  /**
   * Render
   */
  return (
    <>
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
            <SelectControl
              label="Route"
              hideLabelFromVision={true}
              value={state}
              disabled={immutable}
              options={options}
              onChange={(route) => handler(route)}
            />

            {immutable === false && state !== '' && (
              <Button onClick={() => handler('')}>{__('Undo')}</Button>
            )}
          </div>
        </div>
      </Row>

      {state === '' && children}
    </>
  );
};

export { isIconItem, IconItem };
