import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Section from './styled/Section';
import Content from './styled/Content';
import bg from '../assets/bg_02.jpg';
import render from '../assets/Render.png';
import lldq from '../assets/lldq_hover.png';
import ne from '../assets/ne_hover.png';
import zl from '../assets/zl_hover.jpg';

const Img = styled.div`
  float: right;
  width: 68rem;
  display: flex;
  margin-top: -5rem;
  margin-right: 10rem;
  .box {
    position: relative;
    height: 32.9rem;
    &:hover {
      .blank {
        background: #00000000;
        margin-top: -7.5rem;
      }
      img {
        margin-top: -7.5rem;
        filter: none;
      }
      .info {
        height: 7.5rem;
      }
    }
    img {
      transition: all 0.3s ease;
      filter: grayscale(1);
    }
    .blank {
      width: 100%;
      height: 32.9rem;
      position: absolute;
      top: 0;
      background: #084dd173;
      opacity: 0.7;
      transition: all 0.3s ease;
    }
    .info {
      height: 0;
      overflow: hidden;
      background: #233343;
      position: absolute;
      bottom: 0;
      width: 100%;
      transition: all 0.3s ease;
      p {
        margin: 0;
        line-height: 7.5rem;
        font-size: 1.4rem;
        color: #d6d6d6;
      }
    }
  }
`;

const Section2 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Section className="section" bg={bg}>
      <Content>
        <div className="text">
          <img src={render} alt="" />
          <h3>全球知名的云渲染平台</h3>
          <p>7天24小时技术支持 · 奥斯卡专业服务团队 · 随时可用</p>
          <p>影视 · 动画 · 效果图 · 一站渲染</p>
          <a href="/" target="_blank">
            访问Renderbus官网
          </a>
        </div>
        <Img>
          <div className="first box">
            <img src={ne} alt="" />
            <div className="info">
              <p>中国动画电影票房冠军</p>
            </div>
            <div className="blank" />
          </div>
          <div className="second box">
            <img src={zl} alt="" />
            <div className="info">
              <p>刷新中国电影票房新纪录</p>
            </div>
            <div className="blank" />
          </div>
          <div className="third box">
            <img src={lldq} alt="" />
            <div className="info">
              <p>中国首部硬核科幻巨作</p>
            </div>
            <div className="blank" />
          </div>
        </Img>
      </Content>
    </Section>
  );
};

export default Section2;
