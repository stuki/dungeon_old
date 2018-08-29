import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import SessionPage from './SessionPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './bootstrap-3.3.7-dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ProfilePage} />
      <Route path="/session/:sessionId" component={SessionPage} />
    </Switch>
  </Router>
);

export default App;
