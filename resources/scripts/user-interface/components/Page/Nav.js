/**
 * Nav
 *
 * @param {object} props
 */
const Nav = ({ children }) => {
  return (
    <div
      className="
        min-h-[48px]
        flex
        justify-start
        w-full
        bg-white
        border-b
        border-gray-5"
    >
      {children}
    </div>
  );
};

export default Nav;
