import { useMutation } from 'react-query';
import { usePrompt } from 'react-router-dom';
import { useAtom } from 'jotai';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import {
  queryAtom,
  dataAtom,
  selectedIndexAtom,
  pathAtom,
  isBlockingAtom,
} from '../../atoms/admin';
import { arrayHasDuplicates, objectHasKey } from '../../utils/structures';
import { __ } from '../../utils/wp';

/**
 * Sort Data By Role Keys
 *
 * @param {object} applied
 * @param {number} i
 * @returns {object}
 */
const sortRolesKeys = (data) => {
  const roleKeys = Object.keys(intervention.route.admin.data.roles);

  data.sort((a, b) => {
    const [rolesA] = a.roles;
    const [rolesB] = b.roles;
    const indexA = roleKeys.indexOf(rolesA[0]);
    const indexB = roleKeys.indexOf(rolesB[0]);

    if (indexA > indexB) {
      return 1;
    }

    if (indexA < indexB) {
      return -1;
    }

    return 0;
  });

  return data;
};

/**
 * Set Role Key Order
 *
 * @param {object} data
 * @param {string} findSelectedIndex
 *
 * @returns {object}
 */
const setRoleKeyOrder = (data, findSelectedIndex) => {
  /**
   * Order By Role Keys
   */
  data = sortRolesKeys(data);

  /**
   * Find Selected Index
   */
  const selectedIndexFound = data.reduce((carry, item, index) => {
    if (findSelectedIndex === item.roles[0].join()) {
      carry = index;
    }
    return carry;
  }, 0);

  const selectedIndex = selectedIndexFound ? selectedIndexFound : 0;

  return { data, selectedIndex };
};

/**
 * Save
 *
 * @description save `admin` options to the WordPress database.
 *
 * @returns <Save />
 */
const Save = ({ stateHead }) => {
  const [, setQuery] = useAtom(queryAtom);
  const [data, setData] = useAtom(dataAtom);
  const [dangerousSelectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom);
  const [path, setPath] = useAtom(pathAtom);
  const [isBlocking] = useAtom(isBlockingAtom);
  const [buttonText, setButtonText] = useState(__('Save'));

  /**
   * Prompt
   */
  usePrompt(
    'You have unsaved changes, are you sure you want to leave?',
    isBlocking
  );

  /**
   * Middleware
   *
   * @description remove immutable components before saving.
   *
   * @return {object}
   */
  const middleware = () =>
    data.reduce((carry, { roles, components }) => {
      /**
       * Remove Immutable Components + Option
       */
      const removeImmutableComponents = Object.entries(components).reduce(
        (carry, [k, [value, immutable]]) => {
          if (immutable !== true) {
            // carry[k] = [value, false];
            carry[k] = value;
          }
          return carry;
        },
        {}
      );

      /**
       * Merge Matching Roles
       */
      const [rolesArray] = roles;
      const rolesString = rolesArray.join('|');

      if (objectHasKey(carry, rolesString)) {
        carry[rolesString] = {
          ...carry[rolesString],
          ...removeImmutableComponents,
        };
      } else {
        carry[rolesString] = removeImmutableComponents;
      }

      /**
       * Return
       */
      return carry;
    }, {});

  /**
   * Mutation
   *
   * @description save changes to database.
   */
  const mutation = useMutation(() => {
    // save some data from the current role group to restore state if a merge takes place.
    const savedRoleString = data[dangerousSelectedIndex].roles[0].join();
    const savedPath = path[dangerousSelectedIndex];

    // post to the api with sanitized `middleware` and action `save`.
    return (
      apiFetch({
        url: intervention.route.admin.url,
        method: 'POST',
        data: { data: middleware(), save: true },
      })
        // the order that the atoms are updated matters as some updates require prior values.
        .then((res) => {
          const sorted = setRoleKeyOrder(res.data, savedRoleString);
          setSelectedIndex(sorted.selectedIndex);
          setQuery(sorted.data);
          setPath(savedPath);
          setButtonText(__('Save'));
          stateHead.reset();
        })
    );
  });

  /**
   * Handler
   */
  const handler = () => {
    setButtonText(__('Saving'));

    /**
     * Escape
     */
    const escape = () => {
      setButtonText(__('Save'));
    };

    /**
     * Empty Role Group Found
     *
     * @returns {boolean}
     */
    const emptyRoleGroupFound = () => {
      return Object.keys(middleware()).includes('');
    };

    /**
     * Duplicate Role Group Found
     *
     * @returns {boolean}
     */
    const duplicateRoleGroupFound = () => {
      const rolesAsKeys = data.reduce((carry, { roles }) => {
        carry.push(roles[0].join('|'));
        return carry;
      }, []);

      return arrayHasDuplicates(rolesAsKeys);
    };

    /**
     * If Empty Role Group Found
     */
    if (emptyRoleGroupFound()) {
      const msg = __(
        'Empty role group found, please assign a role or delete the group before saving.'
      );
      window.alert(msg);
      escape();
      return;
    }

    /**
     * If Duplicate Role Group Found
     */
    if (duplicateRoleGroupFound()) {
      const msg = __(
        'Found matching user groups, proceeding to save will merge groups.'
      );
      const proceed = window.confirm(msg);
      proceed ? mutation.mutate() : escape();
      return;
    }

    mutation.mutate();
  };

  /**
   * Render
   */
  return (
    <Button
      className="is-primary"
      onClick={() => handler()}
      disabled={isBlocking === false}
    >
      {buttonText}
    </Button>
  );
};

export { Save, setRoleKeyOrder, sortRolesKeys };
