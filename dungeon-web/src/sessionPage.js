import React, { Component } from 'react';
import CreateCharacter from './createCharacter';
import ModifyCharacter from './ModifyCharacter';
import CreateSession from './CreateSession';
import LogList from './LogList';
import CreateLog from './CreateLog';
import fetchival from 'fetchival';

const baseurl = "https://dungeon.azurewebsites.net/api";

class sessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: props.match.params.sessionId,
      session: null,
      playerId: 1,
      playerCharacter: null,
      isLoading: true
    };
  }

  async componentDidMount() {
    const { sessionId, playerId } = this.state

    const api = fetchival(baseurl);
    var sessions = api("sessions")
    var characters = api("characters")
    const session = await sessions(sessionId).get().catch(err => console.log(err));
    const character = await characters(sessionId + '/' + playerId).get().catch(err => console.log(err))

    if (session) {
      this.setState({ session: session, playerCharacter: character, isLoading: false })
    }
  }

  render() {
    const { session, playerId, playerCharacter } = this.state
    return (
      <div>
        {session && (playerId === session.dungeonMasterId) && <LogList />}
        {session && playerCharacter &&
          <LogList /> &&
          <CreateLog /> &&
          <ModifyCharacter />
        }
        {!session && <CreateSession /> }
        {session && !playerCharacter && (playerId !== session.dungeonMasterId) && <CreateCharacter /> }

      </div>
      );
    }
  }

export default sessionPage;
