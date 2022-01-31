import { useAtom } from 'jotai';
import { Button } from '@wordpress/components';
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
    <Button className="is-blank is-warning" onClick={() => del()}>
      {__('Delete')}
    </Button>
  );
};

export { DeleteRoleGroup };
