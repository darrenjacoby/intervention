import React from 'react';
import { useState, useContext } from '@wordpress/element';
import AdminContext from '../AdminContext';
import { __ } from '../../utils/wp';

/**
 * Registered user roles from WordPress.
 */
const registeredRoles = intervention.route.admin.data.roles;
const registeredRolesKeys = Object.keys(registeredRoles);

/**
 * Role Group Edit
 *
 * @returns <Roles />
 */
const RoleGroupEdit = () => {
  const { applied, setApplied, index, setIndex, setIsBlocking } =
    useContext(AdminContext);

  const [edit, setEdit] = useState(false);

  const isImmutableItem = () => {
    return applied[index].immutable === true;
  };

  /**
   * Toggle Role In Group
   *
   * @param {string} role
   */
  const toggleRoleInGroup = (role) => {
    const add = (item) => [...item.roles, role];
    const remove = (item) => item.roles.filter((item) => item !== role);
    const sortRoles = (sort) =>
      registeredRolesKeys.filter((v) => sort.includes(v));

    const appliedIndexRole = applied.map((item, i) => {
      if (i === index) {
        item.roles = item.roles.includes(role) ? remove(item) : add(item);
        item.roles = sortRoles(item.roles);
      }
      return item;
    });

    setApplied(appliedIndexRole);
    setIsBlocking(true);
  };

  /**
   * Delete Role Group
   *
   * @description Remove the role group `index` from `applied`.
   */
  const deleteRoleGroup = () => {
    const indexHasComponents =
      Object.keys(applied[index].components).length > 0;

    if (indexHasComponents) {
      const proceed = window.confirm(
        'Proceed? Deleted group settings will be lost.'
      );
      if (proceed === false) {
        return;
      }
    }

    const removeGroup = applied.filter((item, i) => {
      return i !== index;
    });

    const newIndex = index === 0 ? index : index - 1;

    setApplied(removeGroup);
    setIndex(newIndex);
    setIsBlocking(true);
  };

  /**
   * Role List
   *
   * @description Display role list using `registeredRoles` from WordPress.
   *
   * @return <RoleList>
   */
  const RoleList = () => (
    <div className="flex flex-wrap items-center">
      <div className="w-1 h-[48px] bg-gray-2 mr-12"></div>

      {Object.entries(registeredRoles).map(([key, { name }]) => (
        <div
          key={key}
          className={`
            cursor-pointer
            mr-6
            last:mr-12
            py-[2px]
            border
            rounded
            px-[4px]
            ${
              applied[index].roles.includes(key)
                ? 'text-primary-10 border-primary-10'
                : 'text-gray-50 border-gray-2 hover:border-gray-5'
            }
          `}
          onClick={() => toggleRoleInGroup(key)}
        >
          {key}
        </div>
      ))}
    </div>
  );

  /**
   * Remove Role Group
   *
   * @description Remove role group layout
   *
   * @returns <RemoveRoleGroup />
   */
  const RemoveRoleGroup = () => (
    <a
      href="#"
      className="
        text-gray-50
        no-underline
        active:text-red
        hover:text-red
        focus:text-red"
      onClick={() => deleteRoleGroup()}
    >
      {__('Delete')}
    </a>
  );

  /**
   * Editable Group
   *
   * @description
   */
  const EditableRoleGroup = () => (
    <div className="flex items-center">
      <a
        href="#"
        className={`mr-12 ${edit ? 'no-underline text-gray-90' : 'underline'}`}
        onClick={(event) => {
          event.preventDefault();
          setEdit(!edit);
        }}
      >
        {__('Edit')}
      </a>

      {edit && <RoleList />}
      <div className="w-1 h-[50px] bg-gray-5 mr-12"></div>
      <RemoveRoleGroup />
    </div>
  );

  /**
   * Hardcoded Group
   */
  const HardcodedRoleGroup = () => (
    <span className="text-gray-50 flex items-center">{__('Hardcoded')}</span>
  );

  /**
   * Render
   */
  return isImmutableItem() ? <HardcodedRoleGroup /> : <EditableRoleGroup />;
};

export default RoleGroupEdit;
