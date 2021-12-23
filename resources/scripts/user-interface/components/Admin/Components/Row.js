import AdminContext from '../../AdminContext';
import { useContext } from '@wordpress/element';
import { __ } from '../../../utils/wp';

/**
 * Row
 *
 * @param {object} param
 * @returns {<Edit />}
 */
const Row = ({ item: key, groupKey = false, children }) => {
  const { isKeyApplied, isKeyImmutable } = useContext(AdminContext);

  const isRowChecked = () => {
    return groupKey
      ? isKeyApplied(groupKey) || isKeyApplied(key)
      : isKeyApplied(key);
  };

  /**
   * Badge
   *
   * @returns
   */
  const Badge = () => (
    <div
      className="
        w-[50px]
        h-full
        flex
        items-center
        justify-center
        text-primary-10
        border border-gray-5
        font-600"
    >
      {isRowChecked() && <span className="">{__('R')}</span>}
      {isKeyImmutable(key) && <span className="">{__('H')}</span>}
    </div>
  );

  return (
    <div
      className="
        flex-1
        text-13
        lg:text-14
        leading-none
        text-gray-50
        border-gray-2
        border-b
        h-[44px]
        truncate
        cursor-pointer
        flex
        justify-between
        items-center
      "
    >
      <Badge />
      <div className="flex-1 px-[16px]">{children}</div>
    </div>
  );
};

export default Row;
