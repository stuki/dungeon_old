import React, { Component } from 'react';
import ProfilePage from './profilePage';
import SessionPage from './sessionPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ProfilePage} />
          <Route path='/session/:sessionId' component={SessionPage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
