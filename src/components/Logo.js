import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_white.png';

const StyledLogo = styled.h1`
  margin: 0;
  margin-left: 3rem;
  height: 6rem;
  line-height: 6rem;
  /* background: #000; */
  display: flex;
  align-items: center;
  img {
    max-width: 24rem !important;
  }
`;

const Logo = () => (
  <StyledLogo>
    <Link to="/">
      <img src={logo} alt="Rayvision" />
    </Link>
  </StyledLogo>
);

export default Logo;
