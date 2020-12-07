import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE } from '@root/constants/routes';

import s from 'styled-components';

const NavStyled = s.nav`
  height: 100vh;
  min-width: 200px;
  padding: 20px 0;
  border-right: 1px solid var(--faint-weak);
`;

const LinkStyled = s.div`
  a {
    display: block;
    width: 100%;
    padding: 8px 20px;
    text-decoration: none;
    color: var(--font-accent);
  }

  a:hover {
    background-color: var(--faint-weak-down);
    cursor: pointer;
  }
`;

const Nav: React.FC = () => {
  return (
    <NavStyled>
      <LinkStyled>
        <Link to={ROUTE.BUTTONS}>Buttons</Link>
        <Link to={ROUTE.TYPOGRAPHY}>Typography</Link>
        <Link to={ROUTE.CHECKBOXES}>Checkboxes</Link>
        <Link to={ROUTE.RADIO_BUTTONS}>Radio Buttons</Link>
        <Link to={ROUTE.MODALS}>Modals</Link>
        <Link to={ROUTE.SELECTS}>Selects</Link>
        <Link to={ROUTE.ALERTS}>Alerts</Link>
      </LinkStyled>
    </NavStyled>
  );
};

export default Nav;
