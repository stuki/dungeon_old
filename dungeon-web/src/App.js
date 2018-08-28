import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import SessionPage from './SessionPage';
import 'bootstrap';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ProfilePage} />
      <Route path="/session/:sessionId" component={SessionPage} />
    </Switch>
  </Router>
);

export default App;
