import { useState, useEffect, useContext } from '@wordpress/element';
import { SelectControl, Button } from '@wordpress/components';
import ComponentsContext from '../ComponentsContext';
import { Row, RowState } from './Row';
import { getInterventionKey } from '../../../utils/admin';
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
 * Route
 *
 * @param {object} { key: {string} key }
 * @returns <HierachicalItem />
 */
const RouteItem = ({ item: key, children }) => {
  const interventionKey = getInterventionKey(key);
  const { api, edited, getEdited, setEdited } = useContext(ComponentsContext);
  const [value, immutable] = getEdited(key);
  const init = value === false ? '' : value;
  const [state, setState] = useState(init);
  // const sanitizeKey = key.replace(':route', '');

  /**
   * Immutable Option
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

  const options = immutable
    ? immutableOption(state)
    : exclKeyFromOptions(optionsAll);

  /**
   * Effect
   */
  useEffect(() => {
    state !== ''
      ? api().add(interventionKey, state)
      : api().remove(interventionKey);
    setEdited(api().get());

    console.log({ state });
    console.log({ interventionKey });
    console.log({ edited });
  }, [state]);

  /**
   * Handler
   *
   * @param {string} value
   */
  const handler = (value) => {
    if (immutable) {
      return;
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
        <div className="flex w-full items-center">
          <div className="w-1/2">{getInterventionKey(key)}</div>
          <div className="w-1/2 flex items-center border-l border-gray-2">
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
