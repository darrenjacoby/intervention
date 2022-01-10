import React from 'react';
import { useState, useEffect } from '@wordpress/element';
import { useAtom } from 'jotai';
import { RoleGroupDropdown } from './RoleGroups/RoleGroupDropdown';
import { RolesRoleGroup } from './RoleGroups/RolesRoleGroup';
import { NewRoleGroup } from './RoleGroups/NewRoleGroup';
import { DeleteRoleGroup } from './RoleGroups/DeleteRoleGroup';
import { Save } from './Save';
import {
  dataAtom,
  selectedIndexAtom,
  selectedAppliedDiffAtom,
} from '../../atoms/admin';
import { __ } from '../../utils/wp';
import { safeSelectedIndex } from '../../utils/admin';

/**
 * Immutable Role Group
 *
 * @description
 *
 * @returns <ImmutableRoleGroup />
 */
/*
const RoleGroupDiffs = () => {
  const [selectedAppliedDiff] = useAtom(selectedAppliedDiffAtom);

  return (
    <div className="flex">
      <div className="? h-[50px] flex items-center">
        + {selectedAppliedDiff?.additions}
      </div>
      <div className="? h-[50px] flex items-center">
        - {selectedAppliedDiff?.deletions}
      </div>
    </div>
  );
};
*/

/**
 * Head
 *
 * @returns <Head />
 */
const Head = () => {
  const [data] = useAtom(dataAtom);
  const [dangerousSelectedIndex] = useAtom(selectedIndexAtom);
  const selectedIndex = safeSelectedIndex(dangerousSelectedIndex, data);
  const [, immutable] = data[selectedIndex].roles;
  const [isEditing, setIsEditing] = useState(false);
  const [isNew, setIsNew] = useState(false);

  /**
   *
   */
  const reset = () => {
    setIsNew(false);
    setIsEditing(false);
  };

  /**
   *
   */
  useEffect(() => {
    if (isNew === true) {
      setIsEditing(true);
    }
  }, [isNew]);

  /**
   * Handler
   *
   * @param {object} event
   */
  const handler = (event) => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  /**
   * Render
   */
  return (
    <div
      className="
        relative
        sticky
        top-0
        md:top-[32px]
        w-full
        bg-white
        z-10"
    >
      <div
        className="
          flex
          items-center
          justify-between
          h-[50px]
          pl-12
          pr-16
          border-b
          border-gray-5"
      >
        <div className="flex items-center text-14">
          <RoleGroupDropdown state={{ reset }} />
          <div className="w-1 h-[50px] bg-gray-5 mx-12"></div>
          {!immutable && !isNew && (
            <a href="#" onClick={(event) => handler(event)}>
              {__('Edit')}
            </a>
          )}
          {immutable && (
            <span className="text-gray-50 flex items-center">
              {__('Hardcoded')}
            </span>
          )}
          {/*<RoleGroupDiffs />*/}
        </div>

        <div className="flex items-center">
          <NewRoleGroup state={{ setIsNew }} />
          <div className="w-8"></div>
          <Save state={{ reset }} />
        </div>
      </div>

      {isEditing && immutable === false && (
        <div
          className="
            flex
            items-center
            h-[50px]
            pl-12
            pr-16
            border-b
            border-gray-5"
        >
          <RolesRoleGroup />
          <div className="w-1 h-[50px] bg-gray-5 mx-12"></div>
          <DeleteRoleGroup />
        </div>
      )}
    </div>
  );
};

export { Head };
