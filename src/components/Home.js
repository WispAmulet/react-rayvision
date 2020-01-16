import React, { useState } from 'react';
import ReactFullPage from '@fullpage/react-fullpage';
import Menu from './Menu';
import SectionHomeHead from './SectionHomeHead';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
// import './overrides.css';

const anchors = [
  'rayvision',
  'rayvision2',
  'rayvision3',
  'rayvision4',
  'rayvision5',
];

const Home = () => {
  const [desIndex, setDesIndex] = useState(0);

  return (
    <>
      <Menu anchors={anchors} />
      <ReactFullPage
        anchors={anchors}
        menu="#myMenu"
        // navigation
        // navigationPosition="left"
        // navigationTooltips={anchors}
        scrollingSpeed={1000}
        onLeave={(origin, destination, direction) => {
          setDesIndex(destination.index);
        }}
        render={({ state, fullpageApi }) => (
          <ReactFullPage.Wrapper>
            {/* <Menu /> */}
            <SectionHomeHead play={desIndex === 0} />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            {/* <div className="section">
            <p>Hello World!</p>
            <button type="button" onClick={() => fullpageApi.moveSectionDown()}>
              Click Me!
            </button>
          </div> */}
          </ReactFullPage.Wrapper>
        )}
      />
    </>
  );
};

export default Home;
