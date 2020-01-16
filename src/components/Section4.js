import React from 'react';
import styled from 'styled-components';
import Section from './styled/Section';
import Content from './styled/Content';
import bg from '../assets/bg_04.jpg';
import logo from '../assets/cat-logo.png';
import pc from '../assets/cat-icon-pc.png';
import mac from '../assets/cat-icon-mac.png';
import pad from '../assets/cat-icon-pad.png';
import phone from '../assets/cat-icon-phone.png';
import ar from '../assets/cat-icon-ar.png';

const Img = styled.div`
  display: flex;
  .container {
    margin: 2rem 0 0 2rem;
    min-width: 5rem;
    text-align: center;
    &:first-child {
      margin-left: 0;
    }
    img {
      height: 5rem;
    }
    p {
      margin: 0;
      margin-top: 1rem;
      font-size: 1.4rem;
    }
  }
`;

const Section4 = () => (
  <Section className="section" bg={bg}>
    <Content width={100}>
      <div className="text">
        <img src={logo} alt="" />
        <h3>随时随地访问3D交互内容/应用</h3>
        <p>支持多终端访问</p>
        <Img>
          <div className="container">
            <img src={pc} alt="" />
            <p>PC</p>
          </div>
          <div className="container">
            <img src={mac} alt="" />
            <p>Mac</p>
          </div>
          <div className="container">
            <img src={pad} alt="" />
            <p>Pad</p>
          </div>
          <div className="container">
            <img src={phone} alt="" />
            <p>Phone</p>
          </div>
          <div className="container">
            <img src={ar} alt="" />
            <p>VR/AR</p>
          </div>
        </Img>
        <a
          href="https://www.raysync.cloud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          访问镭速官网
        </a>
      </div>
    </Content>
  </Section>
);

export default Section4;
