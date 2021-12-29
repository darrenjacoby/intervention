import { __ } from '../../../utils/wp';

/**
 * Row
 *
 * @param {object} param
 * @returns {<Row />}
 */
const Row = ({ children }) => {
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
        items-center
      "
    >
      {children}
    </div>
  );
};

/**
 * Row State
 *
 * @param {object} param
 * @returns {<State />}
 */
const RowState = ({ state = false, immutable = false }) => {
  const removed = () => {
    return state === true;
  };

  const edited = () => {
    return typeof state !== 'boolean' && state !== '';
  };

  return (
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
      {removed() && <span className="">{__('R')}</span>}
      {edited() && <span className="">{__('E')}</span>}
      {immutable && <span className="">{__('H')}</span>}
    </div>
  );
};

export { Row, RowState };
