import styled from 'styled-components';
import d from '../../assets/case_d.png';

const Arrow = styled.span`
  z-index: 1000;
  display: inline-block;
  width: 3.1rem;
  height: 3.7rem;
  background: url(${d});
  animation: page_arr 3.5s both linear infinite;
`;

export default Arrow;
