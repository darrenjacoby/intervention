import { atom } from 'jotai';
import { objectHasKey } from '../utils/admin';

const template = [{ roles: [[], false], components: [] }];

/**
 * Data
 *
 * @description read/set tuple for setting `dataAtom`.
 *
 * @returns {array}
 */
export const dataAtom = atom(template, (get, set, update) => {
  set(dataAtom, [...update]);
});

/**
 * Selected Index
 *
 * @description read/write tuple for setting `selectedIndex`.
 *
 * @returns {array}
 */
export const selectedIndexAtom = atom(0, (get, set, update) => {
  set(selectedIndexAtom, update);
});

/**
 * Is Blocking
 *
 * @description read/set tuple for setting `isBlockingAtom`.
 *
 * @returns {array}
 */
export const isBlockingAtom = atom(false, (get, set, update) => {
  set(isBlockingAtom, update);
});

/**
 * Path
 *
 * @description gets `selectedIndexAtom` components.
 *
 * @returns {array}
 */
export const pathAtom = atom('', (get, set, update) => {
  set(pathAtom, update);
});

/**
 * Derived: Roles
 *
 * @description gets `selectedIndexAtom` roles.
 *
 * @returns {object}
 */
export const rolesAtom = atom((get) => {
  return get(dataAtom)[get(selectedIndexAtom)].roles;
});

/**
 * Derived: Components
 *
 * @description gets `selectedIndexAtom` components.
 *
 * @returns {array}
 */
// @link https://github.com/pmndrs/jotai/issues/352
const updateComponentsAtom = atom(null);
export const componentsAtom = atom(
  (get) => {
    return (
      get(updateComponentsAtom) ||
      get(dataAtom)[get(selectedIndexAtom)].components
    );
  },
  (get, set, update) => {
    // getters
    const [action, key, value = true] = update;
    const comps = get(componentsAtom);

    // actions
    const add = () => (comps[key] = [value, false]);
    const del = () =>
      objectHasKey(comps, key) && comps[key][1] === false && delete comps[key];

    // routing
    action === 'toggle' && !objectHasKey(comps, key) ? add() : del();
    action === 'add' && add();
    action === 'del' && del();

    // setter
    set(updateComponentsAtom, comps);
    console.log({ comps });
  }
);
