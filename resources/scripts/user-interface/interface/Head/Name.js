const Name = ({ children }) => {
  return (
    <div
      className="
        flex-1
        mr-[18px]
        flex
        items-center
        font-600
        text-20
        text-gray-90
        sm:flex-none"
    >
      {children}
    </div>
  );
};

export { Name };
