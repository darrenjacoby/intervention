const Name = ({ children }) => {
  return (
    <div
      className="
        flex
        justify-between
        h-[60px]
        py-0
        px-16
        z-30
        bg-white
        border-b
        border-gray-5"
    >
      {children}
    </div>
  );
};

export default Name;
