import { atom } from 'jotai';
import { diff, detailedDiff } from 'deep-object-diff';
import { objectHasKey } from '../utils/structures';
import { adminSelectedIndexSession, adminPathSession } from '../sessions';

const registeredRolesKeys = Object.keys(intervention.route.admin.data.roles);
const allNotAdminRoleKeys = registeredRolesKeys.filter(
  (v) => v !== 'administrator'
);
/*
const sortRegisteredRoleKeys = [
  ...['all, all-not-administrator'],
  ...registeredRolesKeys,
];
*/

/**
 * Query
 *
 * @description write function for setting the original query.
 */
const initQuery = [{ roles: [[''], false], components: {} }];
const updateQueryAtom = atom(null);
const queryAtom = atom(
  /**
   * Initial
   */
  (get) => {
    return get(updateQueryAtom) || initQuery;
  },
  /**
   * Write
   *
   * @param {function} get
   * @param {function} set
   * @param {function} update
   */
  (get, set, update) => {
    /**
     * Middleware
     *
     * @description add array to components value for immutable/mutable interface option.
     *
     * @returns {object}
     */
    const middleware = () =>
      update.reduce((carry, { roles, components }, i) => {
        const immutableConfigArray = Object.entries(components).reduce(
          (c, [k, value]) => {
            c[k] = Array.isArray(value) ? value : [value, false];
            return c;
          },
          {}
        );

        carry[i] = { roles, components: immutableConfigArray };

        return carry;
      }, []);

    const transformedUpdate = middleware();

    /**
     * If the array is empty, fallback to `initQuery`.
     */
    const safeTransformedUpdate =
      transformedUpdate.length === 0 ? initQuery : transformedUpdate;
    set(updateQueryAtom, safeTransformedUpdate);

    /**
     * Deep clone
     *
     * @description important as we mutate `data` state and therefore should not pass by ref.
     * @link https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/#shallow-clone-vs-deep-clone
     */
    const deepClone = JSON.parse(JSON.stringify(transformedUpdate));
    set(dataAtom, deepClone);
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
    if (update.length === 0) {
      update = initQuery;
    }

    set(updateDataAtom, update);
    set(isBlockingAtom, update);
  }
);

/**
 * Selected Index
 *
 * @description read/write tuple for setting `selectedIndex`.
 *
 * @returns {array}
 */
const updateSelectedIndexAtom = atom(null);
const selectedIndexAtom = atom(
  /**
   * Initial
   */
  (get) => {
    const query = get(queryAtom);
    const session = adminSelectedIndexSession();
    const isInit = get(updateSelectedIndexAtom) === null;
    const init = isInit && session < query.length ? session : 0;
    return get(updateSelectedIndexAtom) || init;
  },
  /**
   * Write
   *
   * @param {function} get
   * @param {function} set
   * @param {function} update
   */
  (get, set, update) => {
    adminSelectedIndexSession(update);
    set(updateSelectedIndexAtom, update);
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
    const session = adminPathSession();
    return get(updatePathAtom) || session || init;
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
    adminPathSession([...updatePath]);
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
  }
);

/**
 * Selected Index/Data: Role
 *
 * @description write function for setting `data[selectedIndex]` roles.
 *
 * @returns {array}
 */
const getRolesFromAlias = (roles) => {
  if (roles.includes('all')) return registeredRolesKeys;
  if (roles.includes('all-not-administrator')) return allNotAdminRoleKeys;
  return roles;
};

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
    const [getRoles] = data[selectedIndex].roles;
    const roles = getRolesFromAlias(getRoles);

    /**
     * Actions
     *
     * @description run `add` or `remove` on `selectedIndex`.
     */
    const add = () => [...roles, update];
    const remove = () => roles.filter((item) => item !== update);
    const sort = (sort) => registeredRolesKeys.filter((v) => sort.includes(v));
    const aliases = (roles) => {
      if (roles.length === registeredRolesKeys.length) {
        return ['all'];
      }

      if (allNotAdminRoleKeys.every((v) => roles.includes(v))) {
        return ['all-not-administrator'];
      }

      return roles;
    };

    const updated = roles.includes(update) ? remove() : add();
    const save = aliases(sort(updated));

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
