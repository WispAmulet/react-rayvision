import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import wechat from '../assets/wechat2.png';
import wechatQr from '../assets/wechat_q.png';
import weibo from '../assets/weibo2.png';
import facebook from '../assets/facebook2.png';
import linkedin from '../assets/linkedin2.png';

const StyledFooter = styled.div`
  width: 100%;
  padding: 0 2rem;
  position: absolute;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .links {
    width: 60rem;
    height: 6rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      position: relative;
      .hover {
        position: absolute;
        top: -15.1rem;
        left: -4rem;
        max-height: 0;
        filter: grayscale(0);
        /* transition: max-height 0.4s ease-in; */
      }
      &:hover {
        img {
          filter: none;
        }
        .hover {
          max-height: 15.1rem;
        }
      }
      img {
        filter: grayscale(1);
        transition: filter 0.2s ease;
      }
    }
  }
  .about {
    /* width: 60rem; */
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 1rem 0;
    li {
      list-style: none;
      padding: 0 3rem;
      border-right: 1px solid #fff;
      &:last-child {
        border-right: 0;
      }
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  p {
    color: #ccc;
    font-size: 1.2rem;
    letter-spacing: 0;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="links">
      <li>
        <img src={wechat} alt="wechat_logo" />
        <img className="hover" src={wechatQr} alt="wechat_qr_logo" />
      </li>
      <li>
        <img src={weibo} alt="weibo_logo" />
      </li>
      <li>
        <img src={facebook} alt="facebook_logo" />
      </li>
      <li>
        <img src={linkedin} alt="linkedin_logo" />
      </li>
    </div>
    <div className="about">
      <li>
        <Link to="/about">关于瑞云</Link>
      </li>
      <li>
        <a href="/">新闻中心</a>
      </li>
      <li>
        <a href="/">成功案例</a>
      </li>
      <li>
        <a href="/">联系我们</a>
      </li>
      <li>
        <a href="/">加入瑞云</a>
      </li>
    </div>
    <p>
      © 2019 深圳市瑞云科技有限公司 <a href="/">粤ICP备12028569号-3</a>
    </p>
  </StyledFooter>
);

export default Footer;
