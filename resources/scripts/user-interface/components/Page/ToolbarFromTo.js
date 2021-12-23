/**
 * Toolbar From To
 *
 * @param {object} props
 */
const ToolbarFromTo = ({ from, to }) => {
  return (
    <span
      className="
        relative
        flex
        items-center
        font-500
        text-gray-100
        text-13
        leading-none"
    >
      {from}
      <div className="toolbar-divider"></div>
      {to}
      <div
        className="
          w-1
          h-[48px]
          mt-1
          ml-16
          bg-gray-5"
      ></div>
    </span>
  );
};

export default ToolbarFromTo;
