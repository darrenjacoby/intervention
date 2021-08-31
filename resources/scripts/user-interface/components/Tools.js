import { useState } from '@wordpress/element';
import { Outlet } from 'react-router-dom';
import Nav from './Page/Nav';
import NavLink from './Page/NavLink';
import Page from './Page/Page';
import { __ } from '../utils/wp';

/**
 * Tools
 */
const Tools = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">{__('Export')}</NavLink>
        <NavLink to="tools/import">{__('Import')}</NavLink>
      </Nav>

      <Page title={__('Tools')}>
        <Outlet />
      </Page>
    </>
  );
};

export default Tools;
