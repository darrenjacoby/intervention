import { __ } from '../../utils/wp';

/**
 * Import Row Empty
 */
const ImportRowEmpty = () => {
  return (
    <div
      className="
        h-[44px]
        lg:h-[40px]
        px-16
        flex
        items-center
        text-14
        leading-none
        text-gray-50
        last:border-0"
    >
      {__('Nothing found.')}
    </div>
  );
};

export default ImportRowEmpty;
