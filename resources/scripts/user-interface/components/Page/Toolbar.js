/**
 * Toolbar
 *
 * @param {object} props
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
        py-4
        flex
        items-center
        justify-between
        border-b
        border-gray-5
        bg-white
        z-10"
    >
      {/* py-4 */}
      {children}
    </div>
  );
};

export default Toolbar;
