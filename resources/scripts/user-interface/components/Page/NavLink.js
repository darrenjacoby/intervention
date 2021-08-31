import { NavLink as RouterNavLink, useMatch } from 'react-router-dom';

/**
 * Nav Link
 *
 * @param {object} props
 */
const NavLink = ({ to, children }) => {
  /**
   * Determine if link belongs to `Tools`
   *
   * @returns boolean
   */
  const match = useMatch(to);

  return (
    <RouterNavLink
      to={to}
      className={`
        px-16
        flex
        items-center
        text-13
        font-500
        no-underline
        border-gray-5
        border-r
        last:border-0
        hover:text-primary
        active:shadow-none
        focus:shadow-none
        hover:shadow-none
        ${match ? 'text-gray-100' : 'text-gray-40'}`}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
