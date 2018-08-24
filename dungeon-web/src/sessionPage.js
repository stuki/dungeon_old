import React, { Component } from 'react';
import CreateCharacter from './createCharacter';
import ModifyCharacter from './ModifyCharacter';
import CreateSession from './CreateSession';
import LogList from './LogList';
import CreateLog from './CreateLog';

class sessionPage extends Component {
    constructor(props) {
        super(props);
        this.state = { sessionId: props.match.params.sessionId };
    }

    render() {
        return (
          <div>
              <LogList />
              <CreateLog />
              <CreateCharacter />
              <CreateSession />
              <ModifyCharacter />
          </div>
        );
    }
}

export default sessionPage;
