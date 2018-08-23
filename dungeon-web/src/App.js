import React, { Component } from 'react';
import ProfilePage from './profilePage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ProfilePage/>
      </div>
      </Router>
    );
  }
}

export default App;
