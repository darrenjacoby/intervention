import { PseudoFade } from '../Page/PseudoFade';

/**
 * Row Not Found
 *
 * @description layout for empty application row.
 *
 * @params {object} props
 * @returns <RowNotFound />
 */
const RowNotFound = ({ children }) => {
  return (
    <div
      className="
        h-[42px]
        px-16
        flex
        items-center
        text-14
        leading-none
        text-gray-50
        last:border-0"
    >
      {children}
    </div>
  );
};

/**
 * Row
 *
 * @description layout for application row.
 *
 * @params {object} props
 * @returns <Row />
 */
const Row = ({ children }) => {
  return (
    <div
      className="
        flex
        h-[44px]
        text-13
        lg:text-14
        leading-none
        text-gray-50
        border-b
        border-gray-2
        last:-mb-1"
    >
      {children}
    </div>
  );
};

/**
 * Row Key
 *
 * @description layout for application row key.
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
        px-[16px]
        flex
        items-center
        truncate"
    >
      <div
        className="
          inset-0
          absolute
          flex
          items-center
          px-16"
      >
        <span className="leading-none">{children}</span>
        <PseudoFade />
      </div>
    </div>
  );
};

/**
 * Row Value
 *
 * @description layout for application row value.
 *
 * @params {object} props
 * @returns <RowValue />
 */
const RowValue = ({ children }) => {
  return (
    <div
      className="
        relative
        w-1/2
        px-12
        border-l
        border-gray-2
        truncate"
    >
      <div
        className="
          inset-0
          absolute
          flex
          items-center
          px-12"
      >
        <span className="leading-none">{children}</span>
        <PseudoFade />
      </div>
    </div>
  );
};

/**
 * Row Value From To
 *
 * @description layout for application row value `from` and `to`.
 *
 * @params {object} { from: {string}, to: {string} }
 * @returns <RowValueFromTo />
 */
const RowValueFromTo = ({ from, to }) => {
  return (
    <div className="flex items-center">
      {from !== '' && <span className="mr-4">{String(from)}</span>}

      <span
        className="
          px-4
          py-[3px]
          text-primary-10
          rounded
          border
          border-primary"
      >
        <span className="mr-4 text-12">{String.fromCharCode(8594)}</span>
        {String(to)}
      </span>
    </div>
  );
};

export { RowNotFound, Row, RowKey, RowValue, RowValueFromTo };
