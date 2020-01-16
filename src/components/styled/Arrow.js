import styled from 'styled-components';
import ic from '../../assets/ic_spr24.png';

const Arrow = styled.div`
  z-index: 1000;
  width: 3.8rem;
  height: 2.1rem;
  position: absolute;
  bottom: 4rem;
  left: 50%;
  margin-left: -1.9rem;
  background: url(${ic}) no-repeat -12.4rem 0;
  animation: page_arr 3.5s both linear infinite;
  @keyframes page_arr {
    0% {
      bottom: 45px;
    }
    25% {
      bottom: 50px;
    }
    50% {
      bottom: 45px;
    }
    75% {
      bottom: 40px;
    }
    100% {
      bottom: 45px;
    }
  }
`;

export default Arrow;
