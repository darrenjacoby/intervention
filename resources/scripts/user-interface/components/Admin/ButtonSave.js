import React from 'react';
import { useContext, useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import AdminContext from '../AdminContext';
import { __ } from '../../utils/wp';
import { sortDataByRoleKeys } from '../../utils/admin';
import { arrayHasDuplicates } from '../../utils/arr';

/**
 * Head
 */
const Save = () => {
  const { data, setData, index, setIndex, isBlocking, setIsBlocking } =
    useContext(AdminContext);

  const [buttonText, setButtonText] = useState(__('Save'));

  /**
   * Handle Save
   */
  const handleSave = () => {
    setButtonText(__('Saving'));

    const save = () => {
      apiFetch({
        url: intervention.route.admin.url,
        method: 'POST',
        data: { data: middleware, save: true },
      }).then((res) => {
        if (res?.data) {
          const sorted = sortDataByRoleKeys(res.data, index);
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

    if (emptyRoleGroupFound()) {
      const msg = __(
        'Empty role group found, please assign a role or delete the group before saving.'
      );
      window.alert(msg);
      escape();
      return;
    }

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

  return (
    <Button
      className="is-primary"
      onClick={() => handleSave()}
      disabled={isBlocking === true}
    >
      {buttonText}
    </Button>
  );
};

export default Save;
