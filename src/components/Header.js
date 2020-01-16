import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';

const StyledHeader = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1000;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Nav />
  </StyledHeader>
);

export default Header;
