import React from 'react';
import { Link } from 'react-router-dom';
import s from 'styled-components';

const NavStyled = s.nav`
  height: 100vh;
  min-width: 200px;
  border-right: 1px solid var(--faint-weak);
  padding: 20px 12px;
`;

const LinkStyled = s.div`
  a {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    text-decoration: none;
  }
`;

const Nav: React.FC = () => {
  return (
    <NavStyled>
      <LinkStyled>
        <Link to="/buttons">Buttons</Link>
        <Link to="/typography">Typography</Link>
      </LinkStyled>
    </NavStyled>
  );
};

export default Nav;
