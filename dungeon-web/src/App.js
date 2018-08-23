import React, { Component } from 'react';
import Login from './Login';
import Sessions from './Sessions';
import SessionPage from './sessionPage';
import LogList from './LogList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Sessions/>
        <LogList/>
        <SessionPage/>
      </div>
    );
  }
}

export default App;
