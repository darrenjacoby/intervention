import React from 'react';
import { useState } from '@wordpress/element';
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
 * Get Option Label
 *
 * @param {string} value
 * @returns {string}
 */
const getOptionLabel = (value) => {
  return value
    .replaceAll('-', ' ')
    .split('.')
    .map((str) => {
      return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(' ');
    })
    .join('/');
};

/**
 * Routing Options
 *
 * @description get `pagenow` options that include `.`.
 */
const routingOptions = intervention.route.admin.data.pagenow
  .filter((value) => {
    return value.includes('.');
  })
  .filter(Boolean);

/**
 * Routing Options Select Control
 *
 * @description format `routingOptions` for WordPress `<SelectControl>` component.
 */
const routingOptionsSelectControl = routingOptions.map((value) => {
  const label = getOptionLabel(value);
  return { label, value };
});

/**
 * Options All
 *
 * @description create blank entry item and merge with `routingOptionsSelectControl`.
 */
const optionsAll = [{ label: '', value: '' }, ...routingOptionsSelectControl];

/**
 * Is Route
 *
 * @param {string} k
 * @returns {boolean}
 */
const isRouteItem = (k) => {
  return k.includes(':route');
};

/**
 * Route Item
 *
 * @param {object} { key: {string} key }
 * @returns <RouteItem />
 */
const RouteItem = ({ item: key, children }) => {
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
    const label = getOptionLabel(value);
    return [{ label, value }];
  };

  /**
   * Excl Key From Options
   *
   * @description remove routes that start with this `key`.
   *
   * @param {array} options
   * @returns {array}
   */
  const exclKeyFromOptions = (options) => {
    return options
      .filter((item) => {
        return item.value.startsWith(interventionKey) === false;
      })
      .filter(Boolean);
  };

  /**
   * Options
   *
   * @description resolve correct options.
   */
  const options = immutable
    ? immutableOption(state)
    : exclKeyFromOptions(optionsAll);

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

export { isRouteItem, RouteItem };
