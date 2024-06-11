import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styling for the Navbar.
const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background-color: #1a254a;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Brand = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin: 0 16px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

// NavBar Component
const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Brand>Pet Corner</Brand>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavLinks>
    </NavBarContainer>
  );
};

export default NavBar;
