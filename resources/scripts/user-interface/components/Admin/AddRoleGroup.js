import React from 'react';
import { useContext } from '@wordpress/element';
// import { Button } from '@wordpress/components';
import AdminContext from '../AdminContext';
import { __ } from '../../utils/wp';

/**
 * Role Group Edit
 *
 * @returns <Roles />
 */
const AddRoleGroup = () => {
  const {
    roleGroups,
    components,
    componentsEditing,
    setRoleGroups,
    setComponents,
    setComponentsEditing,
    setIndex,
  } = useContext(AdminContext);

  const addRoleGroup = () => {
    setRoleGroups([...roleGroups, [['administrator'], false]]);
    setComponents([...components, []]);
    // setComponentsEditing(...componentsEditing, ...[]);
    setIndex(roleGroups.length);
  };

  /**
   * Add Role Group
   *
   * @returns <AddRoleGroup />
   */
  return (
    <>
      {/*
      <a
        href="#"
        className="h-full flex items-center"
        onClick={() => addRoleGroup()}
      >
        {__('Add')}
      </a>
      */}

      <div className="flex items-center">
        <a href="#" className="is-secondary" onClick={() => addRoleGroup()}>
          {__('Add')}
        </a>
      </div>
    </>
  );
};

export default AddRoleGroup;
