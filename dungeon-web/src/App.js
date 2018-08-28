import React, { Component } from 'react';
import ProfilePage from './ProfilePage';
import SessionPage from './SessionPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap';
import Moves from './Moves';

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
