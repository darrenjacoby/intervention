import React from 'react';
import { useAtom } from 'jotai';
import { Breadcrumb } from './Components/Breadcrumb';
import { isHierachical, Hierachical } from './Components/HierachicalItem';
import { isBooleanItem, BooleanItem } from './Components/BooleanItem';
import { isBooleanGroup, BooleanGroup } from './Components/BooleanGroup';
import { isTextItem, TextItem } from './Components/TextItem';
import { isNumberItem, NumberItem } from './Components/NumberItem';
import { isRouteItem, RouteItem } from './Components/RouteItem';
import { objectHasKey } from '../../utils/admin';
import { pathAtom } from '../AdminAtoms';
import { __ } from '../../utils/wp';

const staticComponentsData = intervention.route.admin.data.components;

/**
 * Components
 *
 * @returns {<List />}
 */
const Components = () => {
  const [path] = useAtom(pathAtom);

  /**
   * Get Static Components Data
   *
   * @param {string} path
   * @returns {object} { {key} key: {boolean|object} value  }
   */
  const getStaticComponentsData = (path) => {
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
   * Get First Path Key
   *
   * @description required to determine `:route` items.
   */
  const getFirstPathKey = Object.keys(getStaticComponentsData(path))[0];

  /**
   * Routing
   *
   * @param {object} item
   * @returns <Routing />
   */
  const Routing = ({ item: k }) => {
    const key = path !== '' ? `${path}/${k}` : k;

    return (
      <>
        {isHierachical(k) && <Hierachical item={key} />}
        {isBooleanItem(k) && <BooleanItem item={key} />}
        {isTextItem(k) && <TextItem item={key} />}
        {isNumberItem(k) && <NumberItem item={key} />}
        {isBooleanGroup(k) && (
          <BooleanGroup item={key} data={getStaticComponentsData(key)} />
        )}
      </>
    );
  };

  /**
   * Route Item Group
   *
   * @returns <RouteGroup>
   */
  const RouteItemGroup = () => (
    <RouteItem item={`${path}/${getFirstPathKey}`}>
      {Object.keys(getStaticComponentsData(path)).map((key) => (
        <Routing key={key} item={key} />
      ))}
    </RouteItem>
  );

  /**
   * Render
   */
  return (
    <>
      <Breadcrumb />

      {isRouteItem(getFirstPathKey) && <RouteItemGroup />}

      {!isRouteItem(getFirstPathKey) &&
        Object.keys(getStaticComponentsData(path)).map((key) => (
          <Routing key={key} item={key} />
        ))}
    </>
  );
};

export default Components;
