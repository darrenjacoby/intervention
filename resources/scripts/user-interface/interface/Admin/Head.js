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
import { EditRoleGroup } from './RoleGroups/EditRoleGroup';
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
  const [isNoData, setIsNoData] = useState(false);

  console.log({ DATA: data });

  /**
   * Reset
   */
  const reset = () => {
    setIsNew(false);
    setIsEditing(false);
  };

  /**
   * Effect: No Data
   */
  useEffect(() => {
    // check for `data` length
    // check for first item `roles` `[0]`(1), first `roles` item `[0]`(2), and finally the role array `[0]`(2)
    // check for first item `components` length
    const state = data.length === 1 && data[0].roles[0][0] === '';
    /*
    if (isNoData === true && isNoData !== state) {
      setIsEditing(true);
    }
    */
    setIsNoData(state);
  }, [data]);

  /**
   * Effect: Is Editing
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
   * Render Editing
   *
   * @returns {boolean}
   */
  const renderEditing = () => {
    return (isNoData === true || isEditing === true) && immutable === false;
  };

  /**
   * Render
   */
  return (
    <>
      <Toolbar>
        <ToolbarFlex>
          <>
            <div className="flex items-center">
              <RoleGroupDropdown stateHead={{ setIsNew, reset, isNoData }} />
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
          </>

          {/*<RoleGroupDiffs />*/}
        </ToolbarFlex>

        <ToolbarContent>
          {isNoData === false && (
            <>
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

              <NewRoleGroup stateHead={{ setIsNew, isNoData }} />
            </>
          )}
          <ToolbarDivider />
          <Save stateHead={{ reset }} />
        </ToolbarContent>
      </Toolbar>

      {renderEditing() && (
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
                <EditRoleGroup />
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
            {isNoData === false && (
              <div
                className="
                  h-full
                  flex
                  items-center
                  text-gray-70
                  text-13
                  lg:text-14"
              >
                <DeleteRoleGroup />
              </div>
            )}
          </div>
        </Toolbar>
      )}
    </>
  );
};

export { Head };
