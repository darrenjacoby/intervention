import React from 'react';
import { useAtom } from 'jotai';
import { isHierachical } from './Components/HierachicalItem';
import { isBooleanItem, BooleanItem } from './Components/BooleanItem';
import { isBooleanGroup } from './Components/BooleanGroup';
import { isTextItem, TextItem } from './Components/TextItem';
import { isNumberItem, NumberItem } from './Components/NumberItem';
import { isIconItem, IconItem } from './Components/IconItem';
import { selectedIndexDataAtom } from '../../atoms/admin';
import { getInterventionKey } from '../../utils/admin';
import { objectHasKey } from '../../utils/structures';
import { __ } from '../../utils/wp';

const staticComponentsData = intervention.route.admin.data.components;

/**
 * Get Static Components Data
 *
 * @param {string} path
 * @returns {object} { {key} key: {boolean|object} value  }
 */
const getStaticComponentsData = (path = '') => {
  const get = () => {
    const paths = path.split('/');
    return paths.reduce((carry, item) => {
      carry = objectHasKey(carry, item) ? carry[item] : carry;
      return carry;
    }, staticComponentsData);
  };

  return path !== '' ? get() : staticComponentsData;
};

/**
 * Is Item On
 *
 * @param {string} key
 * @returns {boolean}
 */
const isItemOn = (key) => {
  const [data] = useAtom(selectedIndexDataAtom);
  return Object.keys(data.components).includes(getInterventionKey(key));
};

/**
 * Is Applied Blank
 *
 * @param {string} key
 * @returns {boolean}
 */
const isAppliedBlank = () => {
  const [data] = useAtom(selectedIndexDataAtom);
  return Object.keys(data.components).length === 0;
};

/**
 * Is Hierachical Title
 *
 * @param {string} key
 * @returns
 */
const isHierachicalTitle = (interventionKey) => {
  const [data] = useAtom(selectedIndexDataAtom);
  const appliedKeys = Object.keys(data.components).some((k) =>
    k.startsWith(interventionKey)
  );
  const top = interventionKey.split('.').length === 1;
  return top && appliedKeys;
};

const AppliedBlank = () => {
  return <h1>No applied components</h1>;
};

/**
 * Components Applied
 *
 * @returns <ComponentsApplied />
 */
const ComponentsApplied = () => {
  /**
   * Get First Path Key
   *
   * @description required to determine `:route` items.
   */
  // const getFirstPathKey = Object.keys(getStaticComponentsData(''))[0];

  /**
   *
   * @param {object} props
   * @returns
   */
  const RoutingHierachical = ({ item }) => {
    const interventionKey = getInterventionKey(item);

    return (
      <>
        {isHierachicalTitle(interventionKey) && <h1>{interventionKey}</h1>}
        {Object.keys(getStaticComponentsData(item)).map((key) => (
          <Routing key={key} item={key} path={item} />
        ))}
      </>
    );
  };

  /**
   *
   * @param {*} param0
   * @returns
   */
  const RoutingBooleanGroup = ({ item: groupKey }) => {
    const childKeys = getStaticComponentsData(groupKey);
    return (
      <>
        {Object.keys(childKeys).map((key) => (
          <Routing key={key} item={key} path={groupKey} />
        ))}
      </>
    );
  };

  /**
   * Routing
   *
   * @param {object} item
   * @returns <Routing />
   */
  const Routing = ({ item: k, path = '' }) => {
    const key = path !== '' ? `${path}/${k}` : k;

    /**
     * Render
     *
     * @description hierachical items are routed to `<RoutingHierachical />`
     */
    return (
      <>
        {isHierachical(k) && <RoutingHierachical item={key} />}
        {isItemOn(key) && (
          <>
            {isBooleanItem(k) && <BooleanItem item={key} />}
            {isTextItem(k) && <TextItem item={key} />}
            {isNumberItem(k) && <NumberItem item={key} />}
            {isIconItem(k) && <IconItem item={key} />}
            {isBooleanGroup(k) && <BooleanItem item={key} />}
          </>
        )}
        {isBooleanGroup(k) && !isItemOn(key) && (
          <RoutingBooleanGroup item={key} />
        )}
        {/*
        {isBooleanGroup(k) && (isItemOn(key) || isBooleanGroupOn(key)) && (
          <BooleanGroup item={key} data={getStaticComponentsData(key)} />
        )}
        */}
      </>
    );
  };

  /**
   * Render
   */
  return (
    <>
      {isAppliedBlank() && <AppliedBlank />}
      {Object.keys(getStaticComponentsData()).map((key) => (
        <Routing key={key} item={key} />
      ))}
    </>
  );
};

export { ComponentsApplied };
