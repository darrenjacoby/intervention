import { useAtom } from 'jotai';
import { useState, useEffect, useRef } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { Row, RowIn, RowInset, RowState } from './Row';
import {
  selectedIndexDataAtom,
  selectedIndexDataComponentAtom,
} from '../../../atoms/admin';
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
 * Parent Item
 *
 * @param {object} props
 * @returns <ParentItem />
 */
const ParentItem = ({ item: key, immutable, shared }) => {
  const interventionKey = getInterventionKey(key);

  /**
   * Handler
   *
   * @returns
   */
  const handler = () => {
    if (immutable) {
      return;
    }

    const selectedChange =
      shared.selectedChildKeys.length === shared.childData.length
        ? []
        : shared.childData;
    shared.setSelectedChildKeys(selectedChange);
  };

  /**
   * Render
   */
  return (
    <Row isButton={true}>
      <Button onClick={() => handler()}>
        <RowState
          state={shared.selectedChildKeys.length === shared.childData.length}
          immutable={immutable}
        />
        <RowIn>{interventionKey}</RowIn>
      </Button>
    </Row>
  );
};

/**
 * Child Item
 *
 * @param {string} key
 * @returns <BooleanItem />
 */
const ChildItem = ({ item: key, shared }) => {
  const [data] = useAtom(selectedIndexDataAtom);
  const interventionKey = getInterventionKey(key);
  const [, immutable] = getValue(data.components, interventionKey);
  const state = shared.selectedChildKeys.includes(interventionKey) || immutable;

  const isImmutable = () => shared.parentImmutable || immutable;
  /**
   * Handler
   *
   * @returns
   */
  const handler = () => {
    if (shared.parentImmutable || immutable) {
      return;
    }

    const selectedExclItem = shared.selectedChildKeys.filter((k) => key !== k);
    const selectedChange = shared.selectedChildKeys.includes(key)
      ? selectedExclItem
      : [...shared.selectedChildKeys, key];
    shared.setSelectedChildKeys(selectedChange);
  };

  return (
    <Row item={key} isButton={true}>
      <Button onClick={() => handler()}>
        <RowState state={state} immutable={isImmutable()} />
        <RowIn>{key}</RowIn>
      </Button>
    </Row>
  );
};

/**
 * Boolean Group
 *
 * @param {object} { key: {string} key }
 * @returns <BooleanGroup />
 */
const BooleanGroup = ({ item: parentKey, staticData }) => {
  const parentInterventionKey = getInterventionKey(parentKey);
  const [data] = useAtom(selectedIndexDataAtom);
  const [, setComponent] = useAtom(selectedIndexDataComponentAtom);
  const [parentValue, parentImmutable] = getValue(
    data.components,
    parentInterventionKey
  );
  const firstUpdate = useRef(true);

  /**
   * State: Selected
   */
  const childData = Object.keys(staticData).reduce((carry, k) => {
    const interventionKey = getInterventionKey(`${parentKey}/${k}`);
    carry.push(interventionKey);
    return carry;
  }, []);

  const selectedChildData = childData.reduce((carry, k) => {
    const [value] = getValue(data.components, k);
    return value ? [...carry, k] : carry;
  }, []);

  const [selectedChildKeys, setSelectedChildKeys] = useState(
    parentValue ? childData : selectedChildData
  );

  /**
   * Add All
   *
   * @description group `setApplied` calls for when parent is selected.
   */
  const addAll = () => {
    selectedChildKeys.map((k) => {
      const [, immutable] = getValue(data.components, k);
      if (immutable === false) {
        setComponent(['del', k]);
      }
    });
    setComponent(['add', parentInterventionKey]);
  };

  /**
   * Add Individual
   *
   * @description group `setApplied` calls for when parent is deselected.
   */
  const addIndividual = () => {
    // delete existing items
    childData.map((k) => setComponent(['del', k]));
    // add items in selected child keys
    selectedChildKeys.map((k) => {
      const [, immutable] = getValue(data.components, k);
      if (immutable === false) {
        setComponent(['add', k]);
      }
    });
    // remove parent item key
    setComponent(['del', parentInterventionKey]);
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

    const parentOnState = childData.length === selectedChildKeys.length;
    parentOnState ? addAll() : addIndividual();
  }, [selectedChildKeys]);

  /**
   * Render
   */
  return (
    <>
      <ParentItem
        item={parentKey}
        immutable={parentImmutable}
        shared={{ childData, selectedChildKeys, setSelectedChildKeys }}
      />
      <RowInset>
        {childData.map((k) => (
          <ChildItem
            key={k}
            item={k}
            shared={{
              parentImmutable,
              selectedChildKeys,
              setSelectedChildKeys,
            }}
          />
        ))}
      </RowInset>
    </>
  );
};

export { isBooleanGroup, BooleanGroup };
