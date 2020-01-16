import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  z-index: 1000;
  list-style: none;
  margin: 0;
  padding-left: 0;
  position: fixed;
  top: 50%;
  left: 2.5rem;
  transform: translateY(-50%);
  li {
    width: 3rem;
    height: 4rem;
    border-top: 2px solid #fff;
    &.active {
      border-color: #02a6bc;
      a {
        color: #02a6bc;
      }
    }
    a {
      line-height: 4rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Menu = ({ anchors }) => (
  // console.log('menu');
  <StyledMenu id="myMenu">
    {anchors.map((anchor, i) => (
      <li data-menuanchor={anchor} key={i}>
        <a href={`#${anchor}`}>0{i + 1}</a>
      </li>
    ))}
  </StyledMenu>
);

Menu.propTypes = {
  anchors: PropTypes.array.isRequired,
};

export default Menu;
