import React from 'react';
import { useState, useEffect, useContext } from '@wordpress/element';
import { Icon } from '@wordpress/components';
import AdminContext from '../AdminContext';
import { __ } from '../../utils/wp';
// import { RowHierachical } from './Components/RowHierarchical';
import Row from './Components/Row';
import { RowRemove } from './Components/RowRemove';
import { RowRemoveGroup } from './Components/RowRemoveGroup';
import { getInterventionKey } from '../../utils/admin';

const componentsData = intervention.route.admin.data.components;
console.log(componentsData);
/**
 * Get Path Node
 *
 * Remove `_` from nested items.
 *
 * @param {array} array
 * @returns {string}
 */
/*
const getPathNode = (array) => {
  return array
    .map((pathFragment) => {
      return pathFragment.startsWith('_')
        ? pathFragment.substring(1)
        : pathFragment;
    })
    .join('.')
    .substring(1);
};
*/

const objHasProp = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop) && prop !== '';
};

/**
 * Components
 *
 * @returns {<List />}
 */
const Components = () => {
  const { applied, index, api, isKeyApplied } = useContext(AdminContext);
  const [path, setPath] = useState('');

  /**
   * Get Path Components
   *
   * @returns {object}
   */
  const getPathComponents = () => {
    const get = () => {
      const paths = path.split('/');
      return paths.reduce((carry, item) => {
        carry = objHasProp(carry, item) ? carry[item] : carry;
        return carry;
      }, componentsData);
    };

    return path !== '' ? get() : componentsData;
  };

  /**
   * Is Hierarchal
   */
  const isHierachical = (k) => {
    return k.includes(':hierachical');
  };

  /**
   * Is BooleanGroup
   */
  const isBooleanGroup = (k) => {
    return k.includes(':group');
  };

  /**
   * Is Boolean
   */
  const isBoolean = (k) => {
    return k === true;
  };

  /**
   * Is Item Applied
   *
   * @param {string} k
   * @returns {boolean}
   */
  /*
  const isApplied = (k) => {
    const key = getInterventionKey(k);
    const componentsKeys = Object.keys(applied[index].components);
    return componentsKeys.includes(key) ? true : false;
  };
  */

  /**
   * Is Item Immutable
   *
   * @param {string} k
   * @returns {boolean}
   */
  /*
  const isImmutable = (k) => {
    const key = getInterventionKey(k);
    const components = applied[index].components;
    const valid = Array.isArray(components[key]);
    return valid ? components[key][1] : false;
  };
  */

  const Breadcrumb = () => {
    const paths = path.split('/');

    const handleClick = (k) => {
      const pos = path.indexOf(k) + k.length;
      setPath(path.substring(0, pos));
    };

    return (
      <div className="flex">
        <div className="cursor-pointer" onClick={() => handleClick('')}>
          {__('root')}
        </div>
        {paths.map((item) => (
          <div
            key={item}
            className="cursor-pointer"
            onClick={() => handleClick(item)}
          >
            {getInterventionKey(item)}
          </div>
        ))}
      </div>
    );
  };

  const RowHierachical = ({ item: key }) => {
    return (
      <div onClick={() => setPath(key)}>
        <div className="flex">
          <Row item={key}>{getInterventionKey(key)}</Row>
          <Icon
            className="
              ml-4
              flex
              items-center
              justify-center
              text-primary-10
              text-16
              p-0
              border-2
              "
            icon="arrow-right-alt"
          />
        </div>
      </div>
    );
  };

  /**
   * Routing
   *
   * @param {object} item
   * @returns
   */
  /*
  const List = () => {
    return (
      <>
        {Object.keys(getPathComponents(path)).map((key) => (
          <React.Fragment key={key}>
            <ListRouting item={key} />
          </React.Fragment>
        ))}
      </>
    );
  };
  */

  const BooleanGroup = ({ item: parentKey, group }) => {
    /**
     * Get Siblings
     *
     * @param {string} key
     * @returns {array}
     *    [
     *        { key }
     *    ]
     */
    const getSiblings = (key) => {
      return Object.keys(group).reduce((carry, k) => {
        const groupItemKey = `${parentKey}/${k}`;
        return groupItemKey !== key ? [...carry, { key: groupItemKey }] : carry;
      }, []);
    };

    /**
     * Handle Parent Click
     *
     * @param {string} key
     */
    const handleParentClick = (key) => {
      const remove = Object.keys(group).map((k) => {
        return { key: `${parentKey}.${k}` };
      });

      api({
        toggle: [{ key }],
        remove,
      });
    };

    /**
     * Handle Child Click
     *
     * @param {string} key
     */
    const handleChildClick = (key) => {
      if (isKeyApplied(getInterventionKey(parentKey))) {
        api({ remove: [{ key: parentKey }], add: getSiblings(key) });
        return;
      }

      api({ toggle: [{ key }] });
    };

    return (
      <>
        <div onClick={() => handleParentClick(parentKey)}>
          <Row item={parentKey}>{getInterventionKey(parentKey)}</Row>
        </div>

        {/*<div className={`pl-48 ${isApplied(key) ? 'hidden' : 'block'}`}>*/}
        <div className={`pl-48 `}>
          {Object.keys(group).map((k) => (
            <div key={k} onClick={() => handleChildClick(`${parentKey}/${k}`)}>
              <Row item={`${parentKey}/${k}`} groupKey={parentKey}>
                {getInterventionKey(parentKey + '/' + k)}
              </Row>
            </div>
          ))}
        </div>
      </>
    );
  };

  /**
   * Remove Item
   *
   * @param {object} param
   * @returns {<Remove />}
   */
  const BooleanItem = ({ item: key }) => (
    <div onClick={() => api([{ key, value: true }])}>
      <Row item={key}>{getInterventionKey(key)}</Row>
    </div>
  );

  const ListRouting = ({ item: k }) => {
    const key = path !== '' ? `${path}/${k}` : k;
    const val = getPathComponents(path)[k];
    return (
      <>
        {isHierachical(k) && <RowHierachical item={key} />}
        {isBooleanGroup(k) && <BooleanGroup item={key} group={val} />}
        {isBoolean(val) && <BooleanItem item={key} />}
      </>
    );
  };

  return (
    <>
      <Breadcrumb />
      {Object.keys(getPathComponents(path)).map((key) => (
        <React.Fragment key={key}>
          <ListRouting item={key} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Components;
