import { useAtom } from 'jotai';
import { useState, useEffect, useRef } from '@wordpress/element';
import { Row, RowState } from './Row';
import { componentsAtom } from '../../AdminAtoms';
import { getInterventionKey, getValue } from '../../../utils/admin';
import { __ } from '../../../utils/wp';

/**
 * Is Boolean Group
 *
 * @param {string} k
 * @returns {boolean}
 */
const isBooleanGroup = (k) => {
  return k.includes(':group');
};

/**
 * Boolean Group
 *
 * @param {object} { key: {string} key }
 * @returns <BooleanGroup />
 */
const BooleanGroup = ({ item: parentKey, data }) => {
  const parentInterventionKey = getInterventionKey(parentKey);
  const [components, setComponents] = useAtom(componentsAtom);
  const [parentValue, parentImmutable] = getValue(
    components,
    parentInterventionKey
  );
  const firstUpdate = useRef(true);

  /**
   * State: Selected
   */
  const childData = Object.keys(data).reduce((carry, k) => {
    const interventionKey = getInterventionKey(`${parentKey}/${k}`);
    carry.push(interventionKey);
    return carry;
  }, []);

  const selectedChildData = childData.reduce((carry, k) => {
    const [value] = getValue(components, k);
    return value ? [carry, k] : carry;
  }, []);

  const [selected, setSelected] = useState(
    parentValue ? childData : selectedChildData
  );

  /**
   * Parent On Tasks
   *
   * @description group `setComponent` calls for when parent is selected.
   */
  const parentOnTasks = () => {
    selected.map((k) => {
      setComponents(['del', k]);
    });
    setComponents(['add', parentInterventionKey]);
  };

  /**
   * Parent Off Tasks
   *
   * @description group `setComponent` calls for when parent is deselected.
   */
  const parentOffTasks = () => {
    selected.map((k) => {
      setComponents(['add', k]);
    });
    setComponents(['del', parentInterventionKey]);
  };

  /**
   * Effect
   *
   * @description after first update, watch `selected` for changes and run `setComponent` calls.
   */
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const parentOnState = childData.length === selected.length;
    parentOnState ? parentOnTasks() : parentOffTasks();
  }, [selected]);

  /**
   * Parent Item
   *
   * @returns <ParentItem />
   */
  const ParentItem = () => {
    const handler = () => {
      if (parentImmutable) {
        return;
      }

      const selectedChange =
        selected.length === childData.length ? [] : childData;
      setSelected(selectedChange);
    };

    return (
      <div onClick={() => handler()}>
        <Row>
          <RowState
            state={selected.length === childData.length}
            immutable={parentImmutable}
          />
          {getInterventionKey(parentKey)}
        </Row>
      </div>
    );
  };

  /**
   * Boolean Item
   *
   * @param {string} key
   * @returns <BooleanItem />
   */
  const BooleanItem = ({ item: key }) => {
    const interventionKey = getInterventionKey(key);
    const state = selected.includes(interventionKey);
    const [, immutable] = getValue(key);

    const handler = () => {
      if (parentImmutable || immutable) {
        return;
      }

      const selectedExclItem = selected.filter((k) => key !== k);
      const selectedChange = selected.includes(key)
        ? selectedExclItem
        : [...selected, key];
      setSelected(selectedChange);
    };

    return (
      <div onClick={() => handler()}>
        <Row item={key}>
          <RowState state={state} immutable={parentImmutable || immutable} />
          {key}
        </Row>
      </div>
    );
  };

  /**
   * Render
   */
  return (
    <>
      <ParentItem />

      <div className="pl-48">
        {childData.map((k) => (
          <BooleanItem key={k} item={k} />
        ))}
      </div>
    </>
  );
};

export { isBooleanGroup, BooleanGroup };
