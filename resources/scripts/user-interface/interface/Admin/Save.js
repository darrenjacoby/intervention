import React from 'react';
import { usePrompt } from 'react-router-dom';
import { useState } from '@wordpress/element';
import { useAtom } from 'jotai';
import { Button } from '@wordpress/components';
import { useMutation } from 'react-query';
import apiFetch from '@wordpress/api-fetch';
import { dataAtom, selectedIndexAtom, isBlockingAtom } from '../../atoms/admin';
import { arrayHasDuplicates } from '../../utils/structures';
import { safeSelectedIndex } from '../../utils/admin';
import { __ } from '../../utils/wp';

/**
 * Sort Data By Role Keys
 *
 * @param {object} applied
 * @param {number} i
 * @returns {object}
 */
const setRoleKeyOrder = (data, i = 0) => {
  const roleKeys = Object.keys(intervention.route.admin.data.roles);
  const findSelectedIndex = data[i].roles[0].join();

  // sorting algorithm
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

  // new index found
  // relook this implementation
  const selectedIndexFound = data.reduce((carry, item, index) => {
    if (findSelectedIndex === item.roles[0].join()) {
      carry = index;
    }
    return carry;
  }, i);

  const selectedIndex = selectedIndexFound ? selectedIndexFound : 0;
  // console.log({ selectedIndex });

  return { data, selectedIndex };
  // return { data };
};

/**
 * Save
 *
 * @description save `admin` options to the WordPress database.
 *
 * @returns <Save />
 */
const Save = ({ state }) => {
  const [data, setData] = useAtom(dataAtom);
  const [dangerousSelectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom);
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
  const middleware = data.reduce((carry, { roles, components }) => {
    const removeImmutableComponents = Object.entries(components).reduce(
      (carry, [k, [value, immutable]]) => {
        if (immutable !== true) {
          carry[k] = [value, false];
        }
        return carry;
      },
      {}
    );

    carry[roles[0].join('|')] = removeImmutableComponents;
    return carry;
  }, {});

  /**
   * Mutation
   *
   * @description save changes to database.
   */
  const mutation = useMutation(() => {
    return apiFetch({
      url: intervention.route.admin.url,
      method: 'POST',
      data: { data: middleware, save: true },
    }).then((res) => {
      const selectedIndex = safeSelectedIndex(dangerousSelectedIndex, res.data);
      const sorted = setRoleKeyOrder(res.data, selectedIndex);
      setSelectedIndex(sorted.selectedIndex);
      setData(sorted.data);
      setButtonText(__('Save'));
      state.reset();
    });
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
      return Object.keys(middleware).includes('');
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

export { Save, setRoleKeyOrder };
