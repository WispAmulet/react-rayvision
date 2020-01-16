import React from 'react';
import Section from './styled/Section';
import Content from './styled/Content';
import bg from '../assets/bg_03.jpg';
import logo from '../assets/raysync_logo.png';

const Section3 = () => (
  <Section className="section" bg={bg}>
    <Content>
      <div className="text">
        <img src={logo} alt="" />
        <h3>镭速企业级大文件传输</h3>
        <p>快速解决客户跨国传输、远距离传输、大文件传输等问题</p>
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

export default Section3;
