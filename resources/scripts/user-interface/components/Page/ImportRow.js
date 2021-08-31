import PseudoFade from './PseudoFade';

/**
 * Import Row From To
 *
 * @param {object} props
 */
const ImportRowFromTo = ({ valueFrom, valueTo }) => {
  return (
    <div>
      {valueFrom !== '' && (
        <span className="mr-[6px]">{String(valueFrom)}</span>
      )}

      <span
        className="
        px-[6px]
        py-4
        text-primary
        rounded
        border
        border-primary"
      >
        <span className="mr-4 text-12">{String.fromCharCode(8594)}</span>
        {String(valueTo)}
      </span>
    </div>
  );
};

/**
 * Import Row
 *
 * @param {object} props
 */
const ImportRow = ({ intervention, database }) => {
  return (
    <div
      className="
        flex
        h-[44px]
        lg:h-[40px]
        text-13
        lg:text-14
        leading-none
        text-gray-50
        border-b
        border-gray-2
        last:border-0"
    >
      {/*
      font-mono
      text-12
      md:text-13
      */}
      {/* key name */}
      <div
        className={`w-[3px] my-[-1px] ${
          intervention.value !== database.value ? 'bg-primary' : ''
        }`}
      ></div>
      <div
        className="
          relative
          w-1/2
          px-[13px]
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
          <ImportRowFromTo
            valueFrom={database.value}
            valueTo={intervention.value}
          />
        ) : (
          <span>{String(intervention.value)}</span>
        )}
        <PseudoFade />
      </div>
    </div>
  );
};

export default ImportRow;
