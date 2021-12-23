/**
 * Notice
 *
 * @param {object} props
 */
const Notice = ({ children, highlight }) => {
  return (
    <>
      <div
        className={`
          w-full
          min-h-[50px]
          py-14
          flex
          items-center
          ${highlight ? 'border-l-[3px] border-primary pl-[13px] pr-16' : ''}
      `}
      >
        <div className="m-0 text-14">{children}</div>
      </div>

      {/*
      <div
        className="
          w-full
          h-1
          border-b
          border-b-gray-2"
      ></div>
      */}
    </>
  );
};

export default Notice;
