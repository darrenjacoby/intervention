/**
 * Toolbar
 *
 * @description layout for sticky toolbar.
 *
 * @param {object} props
 * @returns <Toolbar />
 */
const Toolbar = ({ children }) => {
  return (
    <div
      className="
        relative
        sticky
        top-0
        md:top-[32px]
        w-full
        h-[50px]
        px-16
        flex
        items-center
        justify-between
        border-b
        border-gray-5
        bg-white
        z-10
      "
    >
      {children}
    </div>
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
  return <div className="h-full flex">{children}</div>;
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
          bg-gray-5"
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
  return <div className="h-full flex items-center">{children}</div>;
};

export { Toolbar, ToolbarFlex, ToolbarTitle, ToolbarContent };
