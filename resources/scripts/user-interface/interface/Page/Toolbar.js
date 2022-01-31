/**
 * Toolbar
 *
 * @description layout for sticky toolbar.
 *
 * @param {object} props
 * @returns <Toolbar />
 */
const Toolbar = ({ children, autoHeight = false }) => {
  return (
    <div
      className={`
        relative
        sticky
        top-0
        md:top-[32px]
        w-full
        px-16
        flex
        items-center
        justify-between
        border-b
        border-gray-5
        bg-white
        z-10
        ${autoHeight === true ? 'pt-16 pb-12 lg:py-0 lg:h-[50px]' : 'h-[50px]'}
      `}
    >
      {children}
    </div>
  );
};

/**
 * Toolbar Divider
 *
 * @returns
 */
const ToolbarDivider = () => {
  return (
    <div
      className="
      mx-8
      w-1
      h-full
      bg-gray-2"
    ></div>
  );
};

/**
 * Toolbar Flex
 *
 * @description layout for toolbar flex.
 *
 * @param {object} props
 * @returns <ToolbarFlex />
 */
const ToolbarFlex = ({ children }) => {
  return <div className="w-full h-full flex">{children}</div>;
};

/**
 * Toolbar Title
 *
 * @description layout for toolbar title.
 *
 * @param {object} props
 * @returns <ToolbarTitle />
 */
const ToolbarTitle = ({ children }) => {
  return (
    <div className="flex h-full">
      <div
        className="
          flex
          items-center
          text-14
          text-gray-90
          font-500"
      >
        {children}
      </div>

      <div
        className="
          ml-12
          mr-8
          w-1
          h-full
          bg-gray-2"
      ></div>
    </div>
  );
};

/**
 * Toolbar Content
 *
 * @description layout for toolbar content.
 *
 * @param {object} props
 * @returns <ToolbarContent />
 */
const ToolbarContent = ({ children }) => {
  return (
    <div
      className="
        h-full
        flex
        items-center
        text-gray-70
        text-13
        lg:text-14"
    >
      {children}
    </div>
  );
};

export { Toolbar, ToolbarDivider, ToolbarFlex, ToolbarTitle, ToolbarContent };
