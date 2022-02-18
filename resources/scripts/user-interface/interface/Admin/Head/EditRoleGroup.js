import { useAtom } from 'jotai';
import { ButtonGroup, Button } from '@wordpress/components';
import {
  selectedIndexDataAtom,
  selectedIndexDataRoleAtom,
} from '../../../atoms/admin';
import { __ } from '../../../utils/wp';

const registeredRolesKeys = Object.keys(intervention.route.admin.data.roles);

/**
 * Get Aliased Roles
 *
 * @description get aliased roles.
 *
 * @param {array} roles
 * @returns {array}
 */
const getAliasedRoles = (roles) => {
  const getAll = () => registeredRolesKeys.filter((v) => v);
  const getAllNotAdmin = () =>
    registeredRolesKeys.filter((v) => v !== 'administrator');

  if (roles.includes('all')) return getAll();
  if (roles.includes('all-not-administrator')) return getAllNotAdmin();
  return roles;
};

/**
 * Edit Role Group
 *
 * @description Display role list using `registeredRoles` from WordPress.
 *
 * @return <EditRoleGroup>
 */
const EditRoleGroup = () => {
  const [data] = useAtom(selectedIndexDataAtom);
  const [, setRole] = useAtom(selectedIndexDataRoleAtom);
  const [roles] = data.roles;
  const rolesRender = getAliasedRoles(roles);

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
      {registeredRolesKeys.map((key) => (
        <Button
          key={key}
          className={`
          ${rolesRender.includes(key) ? 'is-active' : ''}
        `}
          onClick={() => handler(key)}
        >
          {key}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export { EditRoleGroup };
