import React from 'react';
import { useAtom } from 'jotai';
import { Button } from '@wordpress/components';
import { selectedIndexAtom, dataAtom } from '../../../atoms/admin';
import { __ } from '../../../utils/wp';

/**
 * New Role Group
 *
 * @returns <AddRoleGroup />
 */
const NewRoleGroup = ({ stateHead }) => {
  const [data, setData] = useAtom(dataAtom);
  const [, setSelectedIndex] = useAtom(selectedIndexAtom);

  const addRoleGroup = () => {
    const template = { roles: [['administrator'], false], components: [] };
    const addGroup = [...data, ...[template]];
    setData(addGroup);
    setSelectedIndex(data.length);
    stateHead.setIsNew(true);
  };

  /**
   * Add Role Group
   *
   * @returns <AddRoleGroup />
   */
  return (
    <Button className="is-secondary" onClick={() => addRoleGroup()}>
      {__('New')}
    </Button>
  );
};

export { NewRoleGroup };
