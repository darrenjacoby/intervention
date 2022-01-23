import { PseudoFade } from '../../Page/PseudoFade';
import { __ } from '../../../utils/wp';

/**
 * Row
 *
 * @description layout for row.
 *
 * @param {object} param
 * @returns <Row />
 */
const Row = ({ children, isButton = false }) => {
  return (
    <div
      className={`
        row
        relative
        h-[44px]
        px-1
        flex-1
        flex
        text-13
        lg:text-14
        text-gray-50
        leading-none
        border-t
        border-gray-2
        cursor-pointer
        first:border-0
        ${isButton ? 'row-button' : ''}
      `}
    >
      {children}
    </div>
  );
};

/**
 * Row In
 *
 * @description layout for application row in when key and value are not required.
 *
 * @param {object} props
 * @returns <RowIn />
 */
const RowIn = ({ children, isHierachical = false }) => {
  return (
    <div
      className="
        relative
        w-full
        h-full
        truncate"
    >
      <div
        className={`
          inset-0
          absolute
          flex
          items-center
          pr-8
          ${isHierachical ? 'pl-16' : 'pl-8'}
        `}
      >
        <span className="leading-none">{children}</span>
        <PseudoFade />
      </div>
    </div>
  );
};

/**
 * Row Key
 *
 * @description layout for row key.
 *
 * @params {object} props
 * @returns <RowKey />
 */
const RowKey = ({ children }) => {
  return (
    <div
      className="
        relative
        w-1/2
        px-8
        pt-1
        flex
        items-center
        truncate"
    >
      {children}
    </div>
  );
};

/**
 * Row Inset
 *
 * @description layout for row inset used on boolean groups.
 *
 * @params {object} props
 * @returns <RowInset />
 */
const RowInset = ({ children }) => {
  return (
    <div className="ml-48 border-l border-t border-gray-2">{children}</div>
  );
};

/**
 * Row Value
 *
 * @description layout for row value.
 *
 * @params {object} props
 * @returns <RowValue />
 */
const RowValue = ({ children }) => {
  return (
    <div
      className="
        row-value
        relative
        w-1/2
        px-12
        flex
        items-center
        border-l
        border-gray-2"
    >
      {children}
    </div>
  );
};

const RowValueUndo = ({ children }) => {
  return <div className="pl-6">{children}</div>;
};

/**
 * Row State
 *
 * @description layout for row state.
 *
 * @param {object} param
 * @returns <RowState />
 */
const RowState = ({ state = false, immutable = false }) => {
  /**
   * Tasks
   */
  const removed = () => {
    return state === true;
  };

  const edited = () => {
    return typeof state !== 'boolean' && state !== '';
  };

  /**
   * Render
   */
  return (
    <div
      className="
        min-w-[48px]
        h-[43px]
        flex
        items-center
        justify-center
        border-r
        border-gray-2
        z-0"
    >
      <div className="text-primary-10 font-600">
        {removed() && <span className="">{__('R')}</span>}
        {edited() && <span className="">{__('E')}</span>}
        {immutable && <span className="">{__('H')}</span>}
      </div>
    </div>
  );
};

export { Row, RowIn, RowInset, RowKey, RowValue, RowValueUndo, RowState };
