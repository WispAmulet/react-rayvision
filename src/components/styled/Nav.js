import styled from 'styled-components';

export const StyledNav = styled.ul`
  list-style: none;
  width: 20rem;
  height: 3.6rem;
  margin: 0;
  padding-left: 0;
  display: flex;
  align-items: center;

  > li {
    color: #fff;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      /* justify-content: space-around; */
      &:hover {
        ul {
          transform: translateX(0);
        }
      }
    }

    img {
      margin-right: 1rem;
    }
    button {
      color: #fff;
      background: transparent;
      border: none;
      outline: none;
    }
  }
  .language,
  .more,
  .more div {
    z-index: 1001;
    color: #fff;
    cursor: pointer;
  }
  span {
    color: #fff;
  }
`;

export const StyledNavList = styled.ul`
  z-index: 1;
  list-style: none;
  padding-left: 0;
  padding-top: 10rem;
  width: 20rem;
  height: 100vh;
  background: #000000cc;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(20rem);
  transition: all 0.2s ease;
  > li {
    text-align: left;
    height: 6rem;
    padding: 2rem 0;
    cursor: pointer;
    &:hover {
      a {
        background: #333333e6;
      }
    }
    a {
      color: #fff;
      cursor: pointer;
      padding-left: 2rem;
      height: 4rem;
      display: flex;
      align-items: center;
    }
  }
`;
