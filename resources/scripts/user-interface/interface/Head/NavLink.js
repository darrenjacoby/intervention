import { NavLink as RouterNavLink, useMatch } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const match = useMatch(to);

  return (
    <RouterNavLink
      to={to}
      title={children}
      className={`
        inline-block
        text-center
        h-[36px]
        mx-[2px]
        mt-2
        px-[6px]
        leading-none
        no-underline
        text-14
        rounded
        border
        first:ml-0
        hover:text-primary
        active:shadow-none
        focus:shadow-none
        hover:shadow-none
        text-bold-hack
        ${
          match
            ? 'font-500 text-primary-10 border-primary-10'
            : 'font-400 text-gray-70 border-white'
        }`}
    >
      <span className="flex items-center h-full">{children}</span>
    </RouterNavLink>
  );
};

export { NavLink };
