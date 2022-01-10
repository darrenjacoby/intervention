import React from 'react';
import { useAtom } from 'jotai';
import { ButtonGroup, Button } from '@wordpress/components';
import {
  selectedIndexDataAtom,
  selectedIndexDataRoleAtom,
} from '../../../atoms/admin';
import { __ } from '../../../utils/wp';

/**
 * Registered user roles from WordPress.
 */
const registeredRoles = intervention.route.admin.data.roles;

/**
 * Role Group Button Group
 *
 * @description Display role list using `registeredRoles` from WordPress.
 *
 * @return <RoleList>
 */
const RolesRoleGroup = () => {
  const [data] = useAtom(selectedIndexDataAtom);
  const [, setRole] = useAtom(selectedIndexDataRoleAtom);
  const [roles] = data.roles;

  /**
   * Handler
   *
   * @param {string} role
   */
  const handler = (role) => {
    setRole(role);
  };

  /**
   * Render
   */
  return (
    <ButtonGroup>
      {Object.entries(registeredRoles).map(([key, { name }]) => (
        <Button
          key={key}
          className={`
          ${
            roles.includes(key)
              ? 'text-primary-10 border-primary-10 ?'
              : 'text-gray-50 border-gray-2 hover:border-gray-5'
          }
        `}
          onClick={() => handler(key)}
        >
          {key}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export { RolesRoleGroup };
