import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './styled/Section';
import ArrowB from './styled/Arrow_b';

const Content = styled.div`
  z-index: 1000;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  .text {
    width: 41%;
    padding: 6rem 3rem;
    background: #00000080;
    color: #fff;
    text-align: left;
    display: flex;
    flex-direction: column;
    .sub-title {
      font-size: 1.6rem;
      height: 3rem;
      margin: 5rem 0 2rem 0;
    }
    .title {
      font-size: 4.8rem;
      line-height: 6rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    .descriptions,
    .details {
      font-size: 1.4rem;
      line-height: 2.4rem;
      margin-bottom: 5rem;
    }
    .rewards {
      margin-bottom: 2rem;
      display: flex;
      justify-content: flex-start;
      .reward {
        max-width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          max-width: 20%;
        }
        .reward-name {
          font-size: 1.2rem;
          line-height: 1.8rem;
        }
      }
    }
    .description {
      display: block;
    }
    .arrow {
      align-self: flex-end;
      margin-right: 2rem;
    }
  }
`;

const SectionCaseContent = ({
  bg,
  title,
  descriptions,
  rewards,
  details,
  hasArrow,
}) => (
  <Section className="section" bg={bg}>
    <Content>
      <div className="text">
        <p className="sub-title">瑞云渲染案例</p>
        <h3 className="title">{title}</h3>
        {descriptions.length > 0 ? (
          <p className="descriptions">
            {descriptions.map((desc, i) => (
              <span className="description" key={i}>
                {desc}
              </span>
            ))}
          </p>
        ) : null}
        {rewards.length > 0 ? (
          <div className="rewards">
            {rewards.map((reward, i) => (
              <div className="reward" key={i}>
                <img src={reward.img} alt="" />
                {reward.names.map((name, j) => (
                  <div className="reward-name" key={j}>
                    {name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : null}
        <p className="details">{details}</p>
        {hasArrow && <ArrowB className="arrow" />}
      </div>
    </Content>
  </Section>
);

SectionCaseContent.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  rewards: PropTypes.array,
  details: PropTypes.string.isRequired,
  hasArrow: PropTypes.bool.isRequired,
};

export default SectionCaseContent;
