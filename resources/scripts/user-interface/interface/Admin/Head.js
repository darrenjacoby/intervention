import { useAtom } from 'jotai';
import { useState, useEffect } from '@wordpress/element';
import { Button, Icon } from '@wordpress/components';
import {
  Toolbar,
  ToolbarDivider,
  ToolbarFlex,
  ToolbarContent,
} from '../Page/Toolbar';
import { RoleGroupDropdown } from './RoleGroups/RoleGroupDropdown';
import { RolesRoleGroup } from './RoleGroups/RolesRoleGroup';
import { NewRoleGroup } from './RoleGroups/NewRoleGroup';
import { DeleteRoleGroup } from './RoleGroups/DeleteRoleGroup';
import { Save } from './Save';
import { dataAtom, selectedIndexAtom } from '../../atoms/admin';
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
            <RoleGroupDropdown stateHead={{ setIsNew, reset }} />
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
                <span className="hidden lg:flex text-gray-50 items-center mr-12 text-13">
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
                <span className="hidden lg:inline">{__('Edit')}</span>
                <Icon
                  className="
                    flex
                    items-center
                    justify-center
                    text-16
                    w-12
                    lg:hidden
                  "
                  icon="edit"
                />
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
        <Toolbar autoHeight={true}>
          <div className="w-full h-full flex flex-wrap">
            <div className="w-full lg:w-auto flex h-full">
              <div
                className="
                  flex
                  items-center
                  text-14
                  text-gray-90
                  font-500"
              >
                <RolesRoleGroup />
              </div>

              <div
                className="
                  hidden
                  lg:block
                  ml-12
                  mr-8
                  w-1
                  h-full
                  bg-gray-2"
              ></div>
            </div>
            <div className="h-full flex items-center text-gray-70 text-13 lg:text-14">
              <DeleteRoleGroup />
            </div>
          </div>
        </Toolbar>
      )}
    </>
  );
};

export { Head };
