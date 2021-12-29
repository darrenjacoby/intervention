import { useState, useEffect, useContext, useRef } from '@wordpress/element';
import ComponentsContext from '../ComponentsContext';
import { Row, RowState } from './Row';
import { getInterventionKey } from '../../../utils/admin';
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
const BooleanGroup = ({ item: parentKey }) => {
  const { api, getEdited, setEdited, getStaticComponentsData } =
    useContext(ComponentsContext);

  const childDataKeys = Object.keys(getStaticComponentsData(parentKey));

  const childDataFormatted = childDataKeys.reduce((carry, k) => {
    carry.push(getInterventionKey(`${parentKey}/${k}`));
    return carry;
  }, []);

  const initSelected = childDataFormatted.reduce((carry, k) => {
    if (getEdited(k)[0]) {
      carry.push(k);
    }
    return carry;
  }, []);

  const [parentValue, parentImmutable] = getEdited(parentKey);
  const [selected, setSelected] = useState(
    parentValue ? childDataFormatted : initSelected
  );
  const firstUpdate = useRef(true);

  /**
   * Parent On Effect Api
   *
   * @description group `api` calls for when parent is selected.
   */
  const parentOnEffectApi = () => {
    selected.map((k) => api().remove(k));
    api().add(getInterventionKey(parentKey));
  };

  /**
   * Parent Off Effect Api
   *
   * @description group `api` calls for when parent is deselected.
   */
  const parentOffEffectApi = () => {
    selected.map((k) => api().add(k));
    api().remove(getInterventionKey(parentKey));
  };

  /**
   * Effect
   *
   * @description after first update, watch `selected` for changes and run `api` calls.
   */
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const parentOnState = childDataKeys.length === selected.length;
    parentOnState ? parentOnEffectApi() : parentOffEffectApi();

    setEdited(api().get());
    // setParentOn(parentOnState);
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
        selected.length === childDataKeys.length ? [] : childDataFormatted;
      setSelected(selectedChange);
    };

    return (
      <div onClick={() => handler()}>
        <Row>
          <RowState
            state={selected.length === childDataKeys.length}
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
    const state = selected.includes(getInterventionKey(key));
    const [, immutable] = getEdited(key);

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

  return (
    <>
      <ParentItem />

      <div className="pl-48">
        {childDataFormatted.map((k) => (
          <BooleanItem key={k} item={k} />
        ))}
      </div>
    </>
  );
};

export { isBooleanGroup, BooleanGroup };
