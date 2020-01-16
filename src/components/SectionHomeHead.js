import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Section from './styled/Section';
import Arrow from './styled/Arrow';
import video from '../assets/shenzhen.mp4';
import bg from '../assets/bg_01.jpg';
import line from '../assets/line.png';

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  z-index: 1000;
  width: 100%;
  position: absolute;
  top: 8.6%;
  .line,
  .text {
    width: 52.2rem;
    height: 52.2rem;
    margin: 0 auto;
    color: #fff;
  }
  .line {
    background-image: url(${line});
    background-size: cover;
    animation: spin 10s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .text {
    margin-top: -42.3rem;
    p,
    h3 {
      margin: 0;
      text-transform: uppercase;
    }
    h3 {
      font-size: 6rem;
      font-weight: 800;
      line-height: 6.6rem;
      span {
        color: #2bbfa5;
      }
    }
    p:first-child {
      font-size: 1.8rem;
      line-height: 3rem;
      letter-spacing: 0px;
      margin-bottom: 1rem;
    }
    p:last-child {
      margin-top: 3.5rem;
      font-size: 2rem;
      line-height: 3.84rem;
    }
  }
`;

const SectionHomeHead = ({ play }) => {
  // console.log('section1');
  const { t, i18n } = useTranslation();

  const videoRef = useRef(null);

  useEffect(() => {
    if (play) {
      videoRef.current.play();
    }
  }, [play]);

  return (
    <Section className="section" bg={bg}>
      <Content>
        <div className="line" />
        <div className="text">
          <p>
            Rayvision visual
            <br />
            Cloud computing platform
          </p>
          <h3>
            Rayvision
            <br />
            视觉<span>云计算</span>
            <br />
            服务平台
          </h3>
          {/* <p>{t('sectionHomeHead.p3')}</p> */}
          <p>123</p>
        </div>
      </Content>
      <Video muted loop autoPlay ref={videoRef}>
        <source src={video} type="video/mp4" />
      </Video>
      <Arrow />
    </Section>
  );
};

SectionHomeHead.propTypes = {
  play: PropTypes.bool.isRequired,
};

export default SectionHomeHead;
