import React from 'react';
import { useState, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { useAtom } from 'jotai';
import {
  Toolbar,
  ToolbarDivider,
  ToolbarFlex,
  ToolbarTitle,
  ToolbarContent,
} from '../Page/Toolbar';
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
  const [selectedIndex] = useAtom(selectedIndexAtom);
  const [, immutable] = data[selectedIndex].roles;
  const [isEditing, setIsEditing] = useState(false);
  const [isNew, setIsNew] = useState(false);

  /**
   * Reset
   */
  const reset = () => {
    setIsNew(false);
    setIsEditing(false);
  };

  /**
   * Effect
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
  const handler = () => {
    setIsEditing(!isEditing);
  };

  /**
   * Render
   */
  return (
    <>
      <Toolbar>
        <ToolbarFlex>
          <div className="flex items-center">
            <RoleGroupDropdown stateHead={{ reset }} />
          </div>
          <ToolbarContent>
            {immutable && (
              <>
                <div
                  className="
                  ml-12
                  mr-8
                  w-1
                  h-full
                  bg-gray-5"
                ></div>
                <span className="text-gray-50 flex items-center mr-12">
                  {__('Hardcoded')}
                </span>
              </>
            )}
          </ToolbarContent>

          {/*<RoleGroupDiffs />*/}
        </ToolbarFlex>

        <ToolbarContent>
          {!immutable && !isNew && (
            <>
              <Button className="is-secondary" onClick={() => handler()}>
                {__('Edit')}
              </Button>
              <div className="w-8"></div>
            </>
          )}
          <NewRoleGroup stateHead={{ setIsNew }} />
          <ToolbarDivider />
          <Save stateHead={{ reset }} />
        </ToolbarContent>
      </Toolbar>

      {isEditing && immutable === false && (
        <div
          className="
            relative
            sticky
            top-0
            md:top-[32px]
            w-full
            h-[50px]
            px-16
            flex
            items-center
            justify-between
            border-b
            border-gray-5
            bg-white"
        >
          <ToolbarFlex>
            <ToolbarTitle>
              <RolesRoleGroup />
            </ToolbarTitle>

            <ToolbarContent>
              <DeleteRoleGroup />
            </ToolbarContent>
          </ToolbarFlex>
        </div>
      )}
    </>
  );
};

export { Head };
