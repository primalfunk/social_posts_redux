import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FetchPosts from './components/FetchPosts';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/posts" component={FetchPosts} />
    <Route component={NoMatch} />
  </Switch>
)


export default App;