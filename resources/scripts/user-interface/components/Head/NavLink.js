import {
  NavLink as RouterNavLink,
  useLocation,
  useMatch,
} from 'react-router-dom';

const NavLink = ({ to, children }) => {
  /**
   * Determine if link belongs to 'Tools'
   *
   * @returns boolean
   */
  const match = useMatch(to);
  const location = useLocation();

  const rootExemption = () => {
    return to === '/' && location?.pathname.startsWith('/tools');
  };

  const exactMatch = () => {
    if (match === null) {
      return;
    }

    return match.path === to;
  };

  return (
    <RouterNavLink
      to={to}
      className={`
        flex
        items-center
        h-full
        px-4
        mx-4
        font-500
        leading-none
        no-underline
        border-b-4
        text-14
        text-gray-100
        first:ml-0
        hover:text-primary
        active:shadow-none
        focus:shadow-none
        hover:shadow-none
        ${exactMatch() || rootExemption() ? 'border-primary' : 'border-white'}`}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
