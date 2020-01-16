import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Case from './Case';
import About from './About';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/case" component={Case} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Router;
