import React from 'react';
import styled from 'styled-components';
import Section from './styled/Section';
import Arrow from './styled/Arrow';
import bg from '../assets/case_bg.jpg';
import star from '../assets/case_star.png';
import logo1 from '../assets/case_logo1.png';
import logo2 from '../assets/case_logo2.png';
import logo3 from '../assets/case_logo3.png';
import logo4 from '../assets/case_logo4.png';

const Content = styled.div`
  z-index: 1000;
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
  animation: up 0.5s linear;
  @keyframes up {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(0);
    }
  }
  .star {
    text-align: left;
    margin-top: -10rem;
    margin-left: 10rem;
    .text {
      width: 60rem;
      color: #fff;
      margin-top: -27rem;
      margin-left: -2rem;
      h3 {
        font-size: 6rem;
        margin-top: 0;
        margin-bottom: 3rem;
      }
      p {
        font-size: 2rem;
      }
    }
  }
  .logos {
    margin-top: 20rem;
    display: flex;
    flex-wrap: wrap;
    img {
      max-width: 50%;
      padding: 0 5rem 5rem 5rem;
    }
  }
`;

const SectionCaseHead = () => (
  <Section className="section" bg={bg}>
    <Content>
      <div className="star">
        <img src={star} alt="case star" />
        <div className="text">
          <h3>瑞云客户如繁星般璀璨</h3>
          <p>
            瑞云的客户包括世界顶级动画电影制作工作室、视效工作室以及国内大部分主流动画制作公司，来自世界50多个国家和地区，其中还包括奥斯卡奖得主。
          </p>
        </div>
      </div>
      <div className="logos">
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
      </div>
    </Content>
    <Arrow />
  </Section>
);

export default SectionCaseHead;
