import React, { Component } from 'react';
import Login from './Login';
import Sessions from './Sessions';
import sessionPage from './sessionPage';
import LogList from './LogList';
import CreateCharacter from './createCharacter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Sessions/>
        <CreateCharacter/>
        <LogList/>
      </div>
    );
  }
}

export default App;
