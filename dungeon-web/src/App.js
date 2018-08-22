import React, { Component } from 'react';
import Login from './Login';
import Sessions from './Sessions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Sessions/>
      </div>
    );
  }
}

export default App;
