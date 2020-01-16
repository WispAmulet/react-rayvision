import styled from 'styled-components';

const Content = styled.div`
  z-index: 1000;
  max-width: 140rem;
  padding-top: 12%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin: 0 auto;
  height: 100%;
  > .text {
    width: ${props => props.width || 60}rem;
    margin-left: 10%;
    text-align: left;
    color: #fff;
    > img {
      margin-bottom: 4rem;
    }
    > h3 {
      font-size: 5.8rem;
      line-height: 6.7rem;
      font-weight: 700;
      margin: 0;
      margin-bottom: 2.5rem;
    }
    > p {
      font-size: 2rem;
      line-height: 3rem;
      margin: 0;
    }
    > a {
      display: inline-block;
      text-align: center;
      padding: 0 4.8rem;
      margin-top: 3.8rem;
      color: #fff;
      font-size: 1.6rem;
      text-decoration: none;
      border: 1px solid #fff;
      border-radius: 2rem;
      cursor: pointer;
      line-height: 4rem;
      transition: all 0.2s ease;
      &:hover {
        background: #2dbec3;
        border-color: #2dbec3;
      }
    }
  }
`;

export default Content;
