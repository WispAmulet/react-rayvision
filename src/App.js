import React, { Suspense } from 'react';
import Page from './components/Page';
import Router from './components/Router';

const App = () => (
  <Suspense fallback="Loading">
    <Page>
      <Router />
    </Page>
  </Suspense>
);

export default App;
