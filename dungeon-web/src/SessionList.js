import React, { Component } from 'react';
import Session from './Session';
import fetchival from 'fetchival';
import Api from './Api';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import CreateSession from './CreateSession';
import Moves from './Moves';
const baseurl = "https://dungeon.azurewebsites.net/api";

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
      const api = fetchival(baseurl);
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
          <p>* * * * * * * * *</p>
          <CreateSession/> <br/>
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
