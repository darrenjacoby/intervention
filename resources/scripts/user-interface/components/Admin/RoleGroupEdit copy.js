import React from 'react';
import { useState, useContext } from '@wordpress/element';
import AdminContext from '../AdminContext';
import { Icon, Button } from '@wordpress/components';
import { __ } from '../../utils/wp';

const registeredRoles = intervention.route.admin.data.roles;
const registeredRolesKeys = Object.keys(registeredRoles);

/**
 * Role Grouping
 *
 * @returns <Roles />
 */
const RoleGroupEdit = () => {
  const { applied, setApplied, index, setIsBlocking } =
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
   * Role Groups
   *
   * @returns <RoleGroups>
   */
  /*
  const RoleGroups = () => (
    <>
      {applied.map((item, i) => (
        <div
          key={`role-group-sortable-${i}`}
          className={`
            flex
            items-center
            rounded-[2px]
            h-[36px]
            px-[10px]
            inline-flex
            mr-[8px]
            cursor-pointer
            bg-white
            text-13
            lg:text-14
            ${
              i === index
                ? 'border border-primary-10 text-primary-10'
                : 'border border-gray-5 text-gray-50'
            }
          `}
          onClick={() => setIndex(i)}
        >
          {item.roles.length === 0 && (
            <div className="flex items-center justify-center text-20">
              &#8230;
            </div>
          )}

          <div className="flex">
            {item.roles.length > 0 &&
              item.roles.map((role) => (
                <div key={role} className="pr-4 last:pr-0">
                  {role}
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
  */

  /**
   * Role Selection
   *
   * @return <RegisteredRoles>
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
   * Add Role Group
   *
   * @returns <AddRoleGroup />
   */
  /*
  const AddRoleGroup = () => (
    <div
      className="components-button is-secondary ml-8"
      onClick={() => addRoleGroup()}
    >
      {__('Add Group')}
    </div>
  );
  */

  const Group = () => {
    // const [edit, setEdit] = useState(false);

    //  console.log(edit);

    return (
      <>
        <div className="flex items-center">
          <a
            href="#"
            className={`mr-12 ${
              edit ? 'no-underline text-gray-90' : 'underline'
            }`}
            onClick={(event) => {
              event.preventDefault();
              setEdit(!edit);
            }}
          >
            {__('Edit')}
          </a>

          {edit && <RoleList />}
          <div className="w-1 h-[48px] bg-gray-5 mr-12"></div>
          <RemoveRoleGroup />
        </div>
      </>
    );
  };

  const ImmutableGroup = () => (
    <span className="text-gray-50 flex items-center">
      {/*<Icon icon="editor-code" className="flex items-center justify-center text-16" />*/}
      {__('Hardcoded')}
    </span>
  );

  /**
   * Render
   */
  return isImmutableItem() ? <ImmutableGroup /> : <Group />;
};

export default RoleGroupEdit;
