import PseudoFade from '../Page/PseudoFade';

/**
 * Row From To
 *
 * @param {object} props
 */
const RowFromTo = ({ valueFrom, valueTo }) => {
  return (
    <div>
      {valueFrom !== '' && (
        <span className="mr-[6px]">{String(valueFrom)}</span>
      )}

      <span
        className="
        px-[6px]
        py-[2px]
        text-primary-10
        rounded
        border
        border-primary-10"
      >
        <span className="mr-4 text-12">{String.fromCharCode(8594)}</span>
        {String(valueTo)}
      </span>
    </div>
  );
};

/**
 * Row
 *
 * @param {object} props
 */
const Row = ({ intervention, database }) => {
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
      {/*
      font-mono
      text-12
      md:text-13
      */}
      {/* key name */}
      {/*
      <div
        className={`w-[4px] my-[-1px] ${
          intervention.value !== database.value ? 'bg-primary' : ''
        }`}
      ></div>
      */}
      <div
        className="
          relative
          w-1/2
          px-[16px]
          pt-1
          flex
          items-center
          truncate"
      >
        <span>{intervention.key}</span>
        <PseudoFade />
      </div>

      <div
        className="
          relative
          w-1/2
          pt-1
          px-12
          flex
          flex-wrap
          items-center
          border-l
          border-gray-2
          truncate"
      >
        {intervention.value !== database.value ? (
          <RowFromTo valueFrom={database.value} valueTo={intervention.value} />
        ) : (
          <span>{String(intervention.value)}</span>
        )}
        <PseudoFade />
      </div>
    </div>
  );
};

export default Row;
