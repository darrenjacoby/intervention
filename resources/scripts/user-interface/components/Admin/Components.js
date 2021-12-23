import React from 'react';
import {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from '@wordpress/element';
import { TextControl, Icon, Button } from '@wordpress/components';
import AdminContext from '../AdminContext';
import { __ } from '../../utils/wp';
// import { RowHierachical } from './Components/RowHierarchical';
import Row from './Components/Row';
import { RowRemove } from './Components/RowRemove';
import { RowRemoveGroup } from './Components/RowRemoveGroup';
import { getInterventionKey } from '../../utils/admin';
import Save from './ButtonSave';
import debounce from 'lodash.debounce';

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
  const getComponentsData = () => {
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

  const isText = (k) => {
    return k.includes(':text');
  };

  /**
   * Is Boolean
   */
  const isBoolean = (k) => {
    return !k.includes(':');
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
   * Boolean Group
   *
   * @param {object} item
   * @param {object} group
   * @returns <BooleanGroup />
   */
  const BooleanGroup = ({ item: parentKey, keyOnly }) => {
    const childrenKeys = getComponentsData(`${path}`)[keyOnly];
    const children = Object.entries(childrenKeys).reduce((carry, [k, v]) => {
      carry[`${parentKey}/${k}`] = v;
      return carry;
    }, {});

    const childrenKeysRemove = Object.keys(children).map((k) => {
      return { key: k };
    });

    /**
     * Get Siblings
     *
     * @param {string} key
     * @returns {array} [ { key } ]
     */
    const getSiblings = (key) => {
      return Object.keys(children).reduce((carry, k) => {
        return k !== key ? [...carry, { key: k }] : carry;
      }, []);
    };

    const groupContainsAll = (appliedComponents) => {
      return Object.keys(children).every((k) => {
        return Object.keys(appliedComponents).includes(getInterventionKey(k));
      });
    };

    /**
     * Handle Parent Click
     *
     * @param {string} key
     */
    const handleParentClick = (key) => {
      api({ toggle: [{ key }], remove: childrenKeysRemove });
    };

    /**
     * Handle Child Click
     *
     * @param {string} key
     */
    const handleChildClick = (key) => {
      // remove parentKey
      if (isKeyApplied(getInterventionKey(parentKey))) {
        api({ remove: [{ key: parentKey }], add: getSiblings(key) });
        return;
      }

      api({ toggle: [{ key }] });
    };

    /**
     * Effect
     *
     * @description look for if a group contains all
     */
    useEffect(() => {
      if (groupContainsAll(applied[index].components)) {
        api({ add: [{ key: parentKey }], remove: childrenKeysRemove });
      }
    }, [applied]);

    return (
      <>
        <div onClick={() => handleParentClick(parentKey)}>
          <Row item={parentKey}>{getInterventionKey(parentKey)}</Row>
        </div>

        <div className={`pl-48 `}>
          {Object.keys(children).map((k) => (
            <div key={k} onClick={() => handleChildClick(k)}>
              <Row item={k} groupKey={parentKey}>
                {getInterventionKey(k)}
              </Row>
            </div>
          ))}
        </div>
      </>
    );
  };

  /**
   * Boolean Item
   *
   * @param {object} param
   * @returns {<Remove />}
   */
  const BooleanItem = ({ item: key }) => (
    <div onClick={() => api({ toggle: [{ key, value: true }] })}>
      <Row item={key}>{getInterventionKey(key)}</Row>
    </div>
  );

  /**
   * Text Item
   *
   * @param {object} { key: {string} key, value: {string|number} value }
   * @returns <StringItem />
   */
  // eslint-disable-next-line
  const TextItem = React.memo(({ item: key }) => {
    const valueOnRender = () => {
      return isKeyApplied(key)
        ? applied[index].components[getInterventionKey(key)][0]
        : '';
    };

    const [value, setValue] = useState(valueOnRender());

    const changeHandler = (v) => {
      const value = v < 0 ? 0 : v;
      setValue(value);
      save(value);
    };

    const clearHandler = () => {
      api({ remove: [{ key }] });
    };

    const save = useCallback(
      debounce((value) => {
        value === '' && api({ remove: [{ key }] });
        value >= 0 && api({ add: [{ key, value }] });
      }, 5000),
      []
    );

    return (
      <Row item={key}>
        <div className="flex h-full ?">
          <div className="w-1/2">{getInterventionKey(key)}</div>
          <div className="w-1/2 flex items-center">
            <TextControl
              label={key}
              hideLabelFromVision={true}
              value={value}
              type="number"
              onChange={(v) => changeHandler(v)}
            />
            <Button onClick={() => clearHandler()}>{__('Clear')}</Button>
          </div>
        </div>
      </Row>
    );
  });

  /**
   * ListRouting
   *
   * @param {object} item
   * @returns <ListRouting />
   */
  const ListRouting = ({ item: k, value = false }) => {
    const key = path !== '' ? `${path}/${k}` : k;

    return (
      <>
        {isHierachical(k) && <RowHierachical item={key} />}
        {isBooleanGroup(k) && <BooleanGroup item={key} keyOnly={k} />}
        {isBoolean(k) && <BooleanItem item={key} />}
        {isText(k) && <TextItem item={key} />}
      </>
    );
  };

  return (
    <>
      <Breadcrumb />
      {Object.keys(getComponentsData(path)).map((key) => (
        <React.Fragment key={key}>
          <ListRouting item={key} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Components;
