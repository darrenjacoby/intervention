import { atom } from 'jotai';
import { diff, detailedDiff } from 'deep-object-diff';
import { objectHasKey } from '../utils/structures';

const registeredRolesKeys = Object.keys(intervention.route.admin.data.roles);

/**
 * Query
 *
 * @description write function for setting the original query.
 */
const queryAtom = atom(
  /**
   * Initial
   */
  [{ roles: [[], false], components: [] }],
  /**
   * Write
   *
   * @param {function} get
   * @param {function} set
   * @param {function} update
   */
  (get, set, update) => {
    set(queryAtom, update);
    /**
     * Deep clone
     *
     * @description important as we mutate `data` state and therefore should not pass by ref.
     * @link https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/#shallow-clone-vs-deep-clone
     */
    const deepClone = JSON.parse(JSON.stringify(update));
    set(updateDataAtom, deepClone);
  }
);

/**
 * Data
 *
 * @description read function for setting `dataAtom`.
 *
 * @returns {array}
 */
const updateDataAtom = atom(null);
const dataAtom = atom(
  /**
   * Read
   *
   * @param {function} get
   * @returns {array}
   */
  (get) => {
    return get(updateDataAtom) || get(queryAtom);
  },
  /**
   * Write
   *
   * @param {function} get
   * @param {function} set
   * @param {function} update
   */
  (get, set, update) => {
    set(updateDataAtom, update);
  }
);

/**
 * Selected Index
 *
 * @description read/write tuple for setting `selectedIndex`.
 *
 * @returns {array}
 */
const selectedIndexAtom = atom(
  /**
   * Initial
   */
  0,
  /**
   * Write
   *
   * @param {function} get
   * @param {function} set
   * @param {function} update
   */
  (get, set, update) => {
    set(selectedIndexAtom, update);
  }
);

/**
 * Path
 *
 * @description read/write function for setting `path`.
 *
 * @returns {array}
 */
const updatePathAtom = atom(null);
const pathAtom = atom(
  /**
   * Read
   *
   * @param {function} get
   */
  (get) => {
    const init = Array(get(dataAtom).length);
    return get(updatePathAtom) || init;
  },
  /**
   * Write
   *
   * @param {function} get
   * @param {function} set
   * @param {function} update
   */
  (get, set, update) => {
    const updatePath = get(pathAtom);
    updatePath[get(selectedIndexAtom)] = update;
    set(updatePathAtom, [...updatePath]);
  }
);

/**
 * Diff: Is Blocking
 *
 * @description read/set tuple for setting `isBlockingAtom`.
 *
 * @returns {array}
 */
const updateIsBlockingAtom = atom(null);
const isBlockingAtom = atom(
  /**
   * Read
   *
   * @param {function} get
   * @returns {boolean}
   */
  (get) => {
    return get(updateIsBlockingAtom) || false;
  },
  /**
   * Write
   *
   * @param {function} get
   * @param {function} set
   * @param {function} update
   */
  (get, set, update) => {
    const queryData = get(queryAtom);
    const comparison = diff(queryData, update);
    const changed = Object.keys(comparison).length > 0;
    set(updateIsBlockingAtom, changed);
  }
);

/**
 * Diff: Selected Data Diff
 *
 * @description
 *
 * @returns {array}
 */
/*
 export const selectedAppliedDiffAtom = atom((get) => {
  const index = get(selectedIndexAtom);
  const applied = get(appliedAtom)[index];
  const savedData = get(dataAtom)[index]?.components;
  const diff = detailedDiff(savedData, applied);
  return {
    additions:
      Object.keys(diff.added).length + Object.keys(diff.updated).length,
    deletions: Object.keys(diff.deleted).length,
  };
});
*/

/**
 * Selected Index: Data
 *
 * @description read function for `data[selectedIndex]` state.
 *
 * @returns {array}
 */
const selectedIndexDataAtom = atom(
  /**
   * Read
   *
   * @param {function} get
   * @returns {array}
   */
  (get) => {
    return get(dataAtom)[get(selectedIndexAtom)];
  }
);

/**
 * Selected Index/Data: Component
 *
 * @description write function for setting `data[selectedIndex]` components.
 *
 * @returns {array}
 */
const selectedIndexDataComponentAtom = atom(
  /**
   * Initial
   */
  null,
  /**
   * Write
   *
   * @param {function} get
   * @param {function} set
   * @param {function} update
   */
  (get, set, update) => {
    const [action, key, value = true] = update;
    const data = get(dataAtom);
    const selectedIndex = get(selectedIndexAtom);
    const state = Object.assign({}, data[selectedIndex].components);

    /**
     * Actions
     *
     * @description run `add` or `remove` on `selectedIndex`.
     */
    const add = () => (state[key] = [value, false]);
    const del = () =>
      objectHasKey(state, key) && state[key][1] === false && delete state[key];
    action === 'add' ? add() : del();

    /**
     * Setters
     *
     * @description set `dataAtom` components.
     */
    data[selectedIndex].components = state;
    set(dataAtom, data);
    set(isBlockingAtom, data);
  }
);

/**
 * Selected Index/Data: Role
 *
 * @description write function for setting `data[selectedIndex]` roles.
 *
 * @returns {array}
 */
const selectedIndexDataRoleAtom = atom(
  /**
   * Initial
   */
  null,
  /**
   * Write
   *
   * @param {function} get
   * @param {function} set
   * @param {function} update
   */
  (get, set, update) => {
    const data = get(dataAtom);
    const selectedIndex = get(selectedIndexAtom);
    const [roles] = data[selectedIndex].roles;

    /**
     * Actions
     *
     * @description run `add` or `remove` on `selectedIndex`.
     */
    const add = () => [...roles, update];
    const remove = () => roles.filter((item) => item !== update);
    const sort = (sort) => registeredRolesKeys.filter((v) => sort.includes(v));
    const updated = roles.includes(update) ? remove() : add();
    const save = sort(updated);

    /**
     * Merge
     *
     * @description merge `selectedIndex` changes with `dataAtom`.
     */
    const merged = get(dataAtom).map((item, i) => {
      return i === selectedIndex
        ? { roles: [save, false], components: item.components }
        : item;
    });

    /**
     * Setters
     *
     * @description set `dataAtom` with newly created `merged` array.
     */
    set(dataAtom, merged);
  }
);

/**
 * Selected Path: Path
 *
 * @description read function for getting `selectedIndex` `path`.
 *
 * @returns {array}
 */
const selectedIndexPathAtom = atom(
  /**
   * Read
   *
   * @param {funciton} get
   * @returns {string}
   */
  (get) => {
    return get(pathAtom)[get(selectedIndexAtom)] || '';
  }
);

export {
  queryAtom,
  dataAtom,
  selectedIndexAtom,
  pathAtom,
  isBlockingAtom,
  selectedIndexDataAtom,
  selectedIndexDataComponentAtom,
  selectedIndexDataRoleAtom,
  selectedIndexPathAtom,
};
