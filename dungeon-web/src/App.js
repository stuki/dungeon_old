import React, { Component } from 'react';
import Login from './Login';
import Sessions from './Sessions';
import sessionPage from './sessionPage';
import LogList from './LogList';
import CreateCharacter from './createCharacter';
import CreateLog from './CreateLog';
import CreateSession from './CreateSession';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/> <br/>
        <Sessions/> <br/>
        <CreateSession/> <br/>
        <CreateCharacter/> <br/>
        <CreateLog/> <br/>
        <LogList/>
      </div>
    );
  }
}

export default App;
