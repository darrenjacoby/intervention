import React from 'react';
import { useAtom } from 'jotai';
import { CustomSelectControl } from '@wordpress/components';
import { dataAtom, selectedIndexAtom } from '../AdminAtoms';
import { __ } from '../../utils/wp';
import { getRolesAsNiceName } from '../../utils/admin';

/**
 * Role Groups
 */
const RoleGroups = () => {
  const [data] = useAtom(dataAtom);
  const [selectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom);

  /**
   * Select Control Options
   */
  const options = data.map((item, i) => {
    const [roles] = item.roles;
    const name = getRolesAsNiceName(roles);
    return { key: i, name };
  });

  /**
   * Handler
   *
   * @param {object} selectedItem
   */
  const handler = (selectedItem) => {
    setSelectedIndex(selectedItem.key);
  };

  /**
   * Render
   */
  return (
    <div className="flex flex-wrap items-center">
      <CustomSelectControl
        label="Route"
        hideLabelFromVision={true}
        value={options.find((option) => option.key === selectedIndex)}
        options={options}
        onChange={({ selectedItem }) => handler(selectedItem)}
      />
    </div>
  );
};

export default RoleGroups;
