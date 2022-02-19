import { useAtom } from 'jotai';
import { Disabled, CustomSelectControl } from '@wordpress/components';
import { dataAtom, selectedIndexAtom } from '../../../atoms/admin';
import { __ } from '../../../utils/wp';

/**
 * Get Roles as Nicename
 *
 * @param {array} roles
 * @returns {string}
 */
/*
export const getRolesAsNiceName = (roles) => {
  const joined = roles.join(', ');
  // const caps = joined.charAt(0).toUpperCase() + joined.slice(1);
  const andPos = joined.lastIndexOf(',');
  return andPos > 0
    ? joined.substring(0, andPos) + ' and ' + joined.substring(andPos + 1)
    : joined;
};
*/

/**
 * Role Groups
 */
const RoleGroupDropdown = ({ stateHead }) => {
  const [data] = useAtom(dataAtom);
  const [selectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom);

  /**
   * Select Control Options
   *
   * @returns {array} options
   */
  const options = data.map((item, i) => {
    const [roles] = item.roles;
    const name = roles.join('/');
    return { key: i, name };
  });

  /**
   * Handler
   *
   * @param {object} selectedItem
   */
  const handler = (selectedItem) => {
    setSelectedIndex(selectedItem.key);
    stateHead.reset();
  };

  const value = options.find((option) => option.key === selectedIndex);
  const valueNone = { key: selectedIndex, name: 'select user roles' };

  const Dropdown = () => {
    return (
      <CustomSelectControl
        label="Route"
        hideLabelFromVision={true}
        value={value.name !== '' ? value : valueNone}
        options={options}
        onChange={({ selectedItem }) => handler(selectedItem)}
        className="rolegroup-dropdown"
      />
    );
  };

  /**
   * Render
   */
  return (
    <>
      {value.name === '' && (
        <div className="rolegroup-dropdown-disabled">
          <Dropdown />
        </div>
      )}

      {value.name !== '' && <Dropdown />}
    </>
  );
};

export { RoleGroupDropdown };
