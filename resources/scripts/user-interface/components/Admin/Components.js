import React from 'react';
import { useState, useEffect, useContext } from '@wordpress/element';
import AdminContext from '../AdminContext';
import ComponentsContext from './ComponentsContext';
import { isHierachical, Hierachical } from './Components/HierachicalItem';
import { isBooleanItem, BooleanItem } from './Components/BooleanItem';
import { isBooleanGroup, BooleanGroup } from './Components/BooleanGroup';
import { isTextItem, TextItem } from './Components/TextItem';
import { isNumberItem, NumberItem } from './Components/NumberItem';
import { isRouteItem, RouteItem } from './Components/RouteItem';
import { getInterventionKey, objHasKey } from '../../utils/admin';
import { __ } from '../../utils/wp';

const staticComponentsData = intervention.route.admin.data.components;

/**
 * Components
 *
 * @returns {<List />}
 */
const Components = () => {
  const { dataIndex } = useContext(AdminContext);
  const [path, setPath] = useState('');
  const [edited, setEdited] = useState([]);

  useEffect(() => {
    setEdited(dataIndex.components);
  }, [dataIndex]);

  useEffect(() => {
    console.log({ edited });
  }, [edited]);

  /**
   * Api
   *
   * @param {object} edited
   * @returns
   */
  const api = () => {
    const toggle = (key) => (!objHasKey(edited, key) ? add(key) : remove(key));
    const add = (key, value = true) => (edited[key] = [value, false]);
    const remove = (key) =>
      objHasKey(edited, key) && edited[key][1] === false && delete edited[key];
    const get = () => edited;
    return Object.freeze({ toggle, add, remove, get });
  };

  /**
   * Get Edited
   *
   * @param {string} k
   * @returns {array} [ {boolean|string} value, {boolean} immutable ]
   */
  const getEdited = (k) => {
    const key = getInterventionKey(k);
    return Object.keys(edited).includes(key) ? edited[key] : [false, false];
  };

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
        carry = objHasKey(carry, item) ? carry[item] : carry;
        return carry;
      }, staticComponentsData);
    };

    return path !== '' ? get() : staticComponentsData;
  };

  /**
   * Breadcrumb
   *
   * @returns <Breadcrumb />
   */
  const Breadcrumb = () => {
    const paths = path.split('/');

    const handler = (k) => {
      const pos = path.indexOf(k) + k.length;
      setPath(path.substring(0, pos));
    };

    return (
      <div className="flex">
        <div className="cursor-pointer" onClick={() => handler('')}>
          {__('root')}
        </div>

        {paths.map((item) => (
          <div
            key={item}
            className="cursor-pointer"
            onClick={() => handler(item)}
          >
            {getInterventionKey(item)}
          </div>
        ))}
      </div>
    );
  };

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
        {isBooleanGroup(k) && <BooleanGroup item={key} />}
      </>
    );
  };

  const firstPathKey = Object.keys(getStaticComponentsData(path))[0];

  const RouteGroup = () => {
    return (
      <>
        <RouteItem item={`${path}/${firstPathKey}`}>
          {Object.keys(getStaticComponentsData(path)).map((key) => (
            <Routing key={key} item={key} />
          ))}
        </RouteItem>
      </>
    );
  };

  /*
  const Group = () => {
    return (
      <>
        <Route item={firstPathKey}>
          {Object.keys(getStaticComponentsData(path)).map((key) => (
            <Routing key={key} item={key} />
          ))}
        </Route>
      </>
    );
  };
  */

  return (
    <ComponentsContext.Provider
      value={{
        edited,
        getEdited,
        setEdited,
        setPath,
        api,
        getStaticComponentsData,
      }}
    >
      <Breadcrumb />
      {isRouteItem(firstPathKey) && <RouteGroup />}
      {!isRouteItem(firstPathKey) &&
        Object.keys(getStaticComponentsData(path)).map((key) => (
          <Routing key={key} item={key} />
        ))}
    </ComponentsContext.Provider>
  );
};

export default Components;
