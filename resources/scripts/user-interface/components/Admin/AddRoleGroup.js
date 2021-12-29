import React from 'react';
import { useAtom } from 'jotai';
import { Button } from '@wordpress/components';
import { selectedIndexAtom, dataAtom } from '../AdminAtoms';
import { __ } from '../../utils/wp';

/**
 * Add Role Group
 *
 * @returns <AddRoleGroup />
 */
const AddRoleGroup = () => {
  const [data, setData] = useAtom(dataAtom);
  const [, setSelectedIndex] = useAtom(selectedIndexAtom);

  const addRoleGroup = () => {
    const roles = [['administrator'], false];
    const template = { roles, components: [] };
    const addGroup = [...data, ...[template]];
    setData(addGroup);
    setSelectedIndex(data.length);
  };

  /**
   * Add Role Group
   *
   * @returns <AddRoleGroup />
   */
  return (
    <Button className="is-secondary" onClick={() => addRoleGroup()}>
      {__('Add Group')}
    </Button>
  );
};

export default AddRoleGroup;
