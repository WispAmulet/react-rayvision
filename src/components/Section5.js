import React from 'react';
import Section from './styled/Section';
import Content from './styled/Content';
import Footer from './Footer';
import bg from '../assets/bg_05.jpg';
import logo from '../assets/qingjiaocloud_logo.png';

const Section5 = () => (
  <Section className="section" bg={bg}>
    <Content width={100}>
      <div className="text">
        <img src={logo} alt="" />
        <h3>您的专属云端图形工作站</h3>
        <p>随时随地解决您的云上办公和制作需求</p>
        <a
          href="https://www.raysync.cloud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          访问镭速官网
        </a>
      </div>
    </Content>
    <Footer />
  </Section>
);

export default Section5;
