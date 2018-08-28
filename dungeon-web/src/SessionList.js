import React, { Component } from 'react';
import Session from './Session';
import Api from './Api';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import CreateSession from './CreateSession';

class SessionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        player: props.user,
        sessions: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { player } = this.state
    const sessions = await Api.getSessions(player.id);
    if (sessions) {
    this.setState({ sessions })
    }
  }

  updateSessions = () => {
    this.componentDidMount();
  }

  render() {
    var allSessions = this.state.sessions.map(function (sessions) {
      return (<Session session={sessions} key={sessions.id} />)
    });

    return (
      <div>
        <Button onClick={this.props.handleLogOut}>Log Out</Button>
        <ul className="sessionList">
          {allSessions}
          <p>* * * * * * * * *</p>
          <CreateSession updateSessions={this.updateSessions}/> <br/>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps)(SessionList);
