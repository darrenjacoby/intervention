import React from 'react';
import { useAtom } from 'jotai';
import {
  dataAtom,
  selectedIndexAtom,
  selectedIndexDataAtom,
} from '../../../atoms/admin';
import { __ } from '../../../utils/wp';

/**
 * Delete Role Group
 *
 * @description
 *
 * @returns <DeleteRoleGroup />
 */
const DeleteRoleGroup = () => {
  const [data, setData] = useAtom(dataAtom);
  const [selectedIndexData] = useAtom(selectedIndexDataAtom);
  const [selectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom);
  const containsApplied = Object.keys(selectedIndexData.components).length > 0;

  /**
   *
   * @returns
   */
  const del = () => {
    if (containsApplied) {
      const proceed = window.confirm(
        'Proceed? Deleted group settings will be lost.'
      );
      if (proceed === false) {
        return;
      }
    }

    const dataExclGroup = data.filter((item, i) => {
      return i !== selectedIndex;
    });

    const newIndex = selectedIndex === 0 ? selectedIndex : selectedIndex - 1;

    setData(dataExclGroup);
    setSelectedIndex(newIndex);
  };

  /**
   * Render
   */
  return (
    <a
      href="#"
      className="
        text-gray-50
        no-underline
        active:text-red
        hover:text-red
        focus:text-red"
      onClick={() => del()}
    >
      {__('Delete')}
    </a>
  );
};

export { DeleteRoleGroup };
