import { useAtom } from 'jotai';
import { useState, useEffect } from '@wordpress/element';
import { Button, Icon } from '@wordpress/components';
import {
  Toolbar,
  ToolbarDivider,
  ToolbarFlex,
  ToolbarContent,
} from '../Page/Toolbar';
import { RoleGroupDropdown } from './Head/RoleGroupDropdown';
import { EditRoleGroup } from './Head/EditRoleGroup';
import { NewRoleGroup } from './Head/NewRoleGroup';
import { DeleteRoleGroup } from './Head/DeleteRoleGroup';
import { Save } from './Save';
import { selectedIndexAtom, dataAtom, pathAtom } from '../../atoms/admin';
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
 * Head Null
 *
 * @params {object} stateHead
 *
 * @returns <HeadNull />
 */
const HeadNull = ({ stateHead }) => {
  const [, setData] = useAtom(dataAtom);
  const [, setPath] = useAtom(pathAtom);
  const [, setSelectedIndex] = useAtom(selectedIndexAtom);
  const { setIsNew } = stateHead;

  const addFirstRoleGroup = () => {
    const template = [{ roles: [[''], false], components: {} }];
    setData(template);
    setSelectedIndex(template.length - 1);
    setPath('');
    setIsNew(true);
  };

  const Quotation = ({ children }) => (
    <p className="text-16 text-gray-50 font-400 m-0 p-16">{children}</p>
  );

  /**
   * Render
   */
  return (
    <>
      <Toolbar>
        <ToolbarContent>
          <Button className="is-secondary" onClick={() => addFirstRoleGroup()}>
            <span className="hidden lg:inline">{__('New Role Group')}</span>
          </Button>
        </ToolbarContent>
        <Save />
      </Toolbar>

      <Quotation>
        <>&ldquo;</>
        {__('Less, But Better')}
        <>&rdquo;</>
        <span className="">
          <>&mdash;</>Dieter Rams
        </span>
      </Quotation>
    </>
  );
};

/**
 * Head On

 * @params {object} stateHead
 *
 * @returns <HeadOn />
 */
const HeadOn = ({ stateHead }) => {
  const [data] = useAtom(dataAtom);
  const [selectedIndex] = useAtom(selectedIndexAtom);
  const [, immutable] = data[selectedIndex].roles;
  const { isNew, setIsNew, isEditing, setIsEditing } = stateHead;

  /**
   * Reset
   */
  const reset = () => {
    setIsNew(false);
    setIsEditing(false);
  };

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
    <Toolbar>
      <ToolbarFlex>
        <>
          <div className="flex items-center">
            <RoleGroupDropdown stateHead={{ setIsNew, reset }} />
          </div>
          <ToolbarContent>
            {Boolean(immutable) && (
              <>
                {/*
                <div
                  className="
                    ml-12
                    mr-8
                    w-1
                    h-full
                    bg-gray-5"
                ></div>
                */}
                <ToolbarDivider />
                <span className="hidden lg:flex text-gray-50 items-center mr-12 text-13">
                  {__('Hardcoded')}
                </span>
              </>
            )}
          </ToolbarContent>
        </>
      </ToolbarFlex>

      <ToolbarContent>
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

          <NewRoleGroup stateHead={{ setIsNew }} />
        </>

        <ToolbarDivider />
        <Save stateHead={{ reset }} />
      </ToolbarContent>
    </Toolbar>
  );
};

/**
 * Head Editing
 *
 * @returns <HeadEditing />
 */
const HeadEditing = () => {
  const [data] = useAtom(dataAtom);
  const [selectedIndex] = useAtom(selectedIndexAtom);
  const [, immutable] = data[selectedIndex].roles;

  const EditRoleGroupLayout = ({ children }) => (
    <div
      className="
        flex
        items-center
        text-14
        text-gray-90
        font-500"
    >
      {children}
    </div>
  );

  const EditRoleGroupDivider = () => (
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
  );

  const DeleteRoleGroupLayout = ({ children }) => (
    <div
      className="
        h-full
        flex
        items-center
        text-gray-70
        text-13
        lg:text-14"
    >
      {children}
    </div>
  );

  /**
   * Render
   */
  return (
    <>
      {immutable === false && (
        <Toolbar autoHeight={true}>
          <div className="w-full h-full flex flex-wrap">
            <div className="w-full lg:w-auto flex h-full">
              <EditRoleGroupLayout>
                <EditRoleGroup />
              </EditRoleGroupLayout>

              <EditRoleGroupDivider />
            </div>

            <DeleteRoleGroupLayout>
              <DeleteRoleGroup />
            </DeleteRoleGroupLayout>
          </div>
        </Toolbar>
      )}
    </>
  );
};

/**
 * Head
 *
 * @returns <Head />
 */
const Head = () => {
  const [data] = useAtom(dataAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [isNew, setIsNew] = useState(false);

  /**
   * Effect: Is Editing
   */
  useEffect(() => {
    if (isNew === true) {
      setIsEditing(true);
    }
  }, [isNew]);

  /**
   * Is Data
   *
   * @returns {boolean}
   */
  const isData = () => {
    return Boolean(data.length !== 0);
  };

  const HeadData = () => (
    <>
      <HeadOn stateHead={{ isNew, setIsNew, isEditing, setIsEditing }} />
      {Boolean(isEditing === true) && <HeadEditing />}
    </>
  );

  /**
   * Render
   */
  return (
    <>
      {!isData() && <HeadNull stateHead={{ setIsNew }} />}
      {isData() && <HeadData />}
    </>
  );
};

export { Head };
