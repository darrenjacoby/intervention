/**
 * Page
 *
 * @param {object} props
 */
const Page = ({ children }) => {
  return (
    <div className="bg-white flex-1 flex flex-wrap w-full">
      {/*<div className="mx-16 sm:mx-[28px]">*/}
      {/*
      <h1
        className="
          pt-[9px]
          pb-4
          text-23
          font-400"
      >
        {title}
      </h1>
      */}
      {children}
    </div>
  );
};

export default Page;
