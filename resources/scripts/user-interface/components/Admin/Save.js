import React from 'react';
import { useState } from '@wordpress/element';
import { useAtom } from 'jotai';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { dataAtom, selectedIndexAtom, isBlockingAtom } from '../AdminAtoms';
import { arrayHasDuplicates } from '../../utils/arr';
import { sortDataByRoleKeys } from '../../utils/admin';
import { __ } from '../../utils/wp';

/**
 * Head
 */
const Save = () => {
  const [data, setData] = useAtom(dataAtom);
  const [selectedIndex] = useAtom(selectedIndexAtom);
  const [isBlocking, setIsBlocking] = useAtom(isBlockingAtom);

  const [buttonText, setButtonText] = useState(__('Save'));

  /**
   * Handler
   */
  const handler = () => {
    setButtonText(__('Saving'));

    const save = () => {
      apiFetch({
        url: intervention.route.admin.url,
        method: 'POST',
        data: { data: middleware, save: true },
      }).then((res) => {
        if (res?.data) {
          const sorted = sortDataByRoleKeys(res.data, selectedIndex);
          setData(sorted.data);
          // setIndex(sorted.index);
          setButtonText(__('Save'));
          setIsBlocking(false);
        }
      });
    };

    const escape = () => {
      setButtonText(__('Save'));
    };

    /*
    const rolesAsKeys = applied.reduce((carry, { roles }) => {
      carry.push(roles.join('|'));
      return carry;
    }, []);
    */

    /**
     * Convert to object for saving
     *
     * @returns {object}
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

      /*
      if (Object.keys(components).length > 0) {
        carry[roles.join('|')] = removeImmutableComponents;
      }
      */

      carry[roles.group.join('|')] = removeImmutableComponents;
      return carry;
    }, {});

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
        carry.push(roles.group.join('|'));
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
      proceed ? save() : escape();
      return;
    }

    save();
  };

  /**
   * Render
   */
  return (
    <Button
      className="is-primary"
      onClick={() => handler()}
      disabled={isBlocking === true}
    >
      {buttonText}
    </Button>
  );
};

export default Save;
