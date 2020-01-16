import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import { GlobalStyle } from './styled/Global';

const Center = styled.div`
  text-align: center;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
  }
`;

const Page = ({ children }) => (
  <Center>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      {children}
    </BrowserRouter>
  </Center>
);

Page.propTypes = {
  children: PropTypes.element || PropTypes.arrayOf(PropTypes.element),
};

export default Page;
