import React from 'react';
import { useContext } from '@wordpress/element';
import { Button } from '@wordpress/components';
import AdminContext from '../AdminContext';
import { __ } from '../../utils/wp';

/**
 * Role Group Edit
 *
 * @returns <Roles />
 */
const AddRoleGroup = () => {
  const { data, setData, setIndex } = useContext(AdminContext);

  const addRoleGroup = () => {
    const roles = { group: ['administrator'], immutable: false };
    const template = { roles, components: [] };
    const addGroup = [...data, ...[template]];
    setData(addGroup);
    setIndex(data.length);
  };

  /**
   * Add Role Group
   *
   * @returns <AddRoleGroup />
   */
  return (
    <Button className="is-secondary" onClick={() => addRoleGroup()}>
      {__('Add Group')}
    </Button>
  );
};

export default AddRoleGroup;
