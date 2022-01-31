/**
 * Page
 *
 * @param {object} props
 */
const Page = ({ children }) => {
  return (
    <div
      className="
        bg-white
        lg:flex-1
        flex
        flex-wrap
        w-full"
    >
      {children}
    </div>
  );
};

export { Page };
