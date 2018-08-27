import React, { Component } from 'react';
import Session from './Session';
import fetchival from 'fetchival';
import Api from './Api';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';

class SessionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        player: props.user,
        userSessions: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { player } = this.state
    const sessions = await Api.getSessions(player.id);
    console.log(sessions);
    this.setState({ userSessions: sessions })
    // this.getSessionsAndUpdate();
  }

  getSessionsAndUpdate = async () => {
      const api = fetchival("https://dungeon.azurewebsites.net/api");
      var sessions = api("sessions")
      const session = await sessions.get().catch(err => console.log("Session fetch:", err));
      this.setState({ userSessions: session })
  }

  render() {
    var allSessions = this.state.userSessions.map(function (session) {
      return (<Session session={session} key={session.id} />)
    });

    return (
      <div>
        <Button onClick={this.props.handleLogOut}>Log Out</Button>
        <ul className="sessionList">
          {allSessions}
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
