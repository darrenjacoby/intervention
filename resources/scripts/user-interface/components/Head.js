import Header from './Head/Header';
import Name from './Head/Name';
// import NavLink from './Head/NavLink';
import OutboundLink from './Head/OutboundLink';
import { __ } from '../utils/wp';

/**
 * Head
 */
const Head = () => {
  return (
    <Header>
      <div className="flex flex-wrap">
        <Name>Intervention</Name>

        {/*
        <div className="flex flex-wrap">
          <NavLink to="/">{__('Tools')}</NavLink>
          <NavLink to="/admin">{__('Admin')}</NavLink>
        </div>
        */}
      </div>

      <div className="hidden md:flex md:flex-wrap">
        <OutboundLink href="https://github.com/soberwp/intervention">
          GitHub
        </OutboundLink>

        {/*
        <OutboundLink href="https://twitter.com/soberwp">
          Twitter
        </OutboundLink>
        */}
      </div>
    </Header>
  );
};

export default Head;
