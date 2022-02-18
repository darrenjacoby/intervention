import { useAtom } from 'jotai';
import { Button, Icon } from '@wordpress/components';
import { selectedIndexAtom, dataAtom, pathAtom } from '../../../atoms/admin';
import { __ } from '../../../utils/wp';

/**
 * New Role Group
 *
 * @returns <AddRoleGroup />
 */
const NewRoleGroup = ({ stateHead }) => {
  const [data, setData] = useAtom(dataAtom);
  const [, setPath] = useAtom(pathAtom);
  const [, setSelectedIndex] = useAtom(selectedIndexAtom);

  const addRoleGroup = () => {
    const template = {
      roles: [[''], false],
      components: {},
    };
    const addGroup = [...data, ...[template]];
    setData(addGroup);
    setSelectedIndex(addGroup.length - 1);
    setPath('');
    stateHead.setIsNew(true);
  };

  /**
   * Add Role Group
   *
   * @returns <AddRoleGroup />
   */
  return (
    <Button className="is-secondary" onClick={() => addRoleGroup()}>
      <span className="hidden lg:inline">{__('New')}</span>
      <Icon
        className="
            flex
            items-center
            justify-center
            text-16
            w-12
            lg:hidden
          "
        icon="plus-alt2"
      />
    </Button>
  );
};

export { NewRoleGroup };
