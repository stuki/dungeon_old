import React, { Component } from 'react';
import CreateCharacter from './createCharacter';
import ModifyCharacter from './ModifyCharacter';
import CreateSession from './CreateSession';
import LogList from './LogList';
import CreateLog from './CreateLog';
import fetchival from 'fetchival';
import { connect } from 'react-redux';
const baseurl = "https://dungeon.azurewebsites.net/api";

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: props.match.params.sessionId,
      session: null,
      playerId: props.user,
      playerCharacter: null,
      isLoading: true
    };
    // store.subscribe(()=>{
    //   this.setState({
    //     playerId: store.getState().user
    //   })
    // })


  }

  async componentDidMount() {
    const { sessionId, playerId } = this.state
    const api = fetchival(baseurl);
    var sessions = api("sessions")
    var characters = api("characters")
    const session = await sessions(sessionId).get().catch(err => console.log("Session fetch:", err));
    const character = await characters(sessionId + '/' + playerId).get().catch(err => console.log("Character fetch:", err))

    if (session) {
      this.setState({ session: session, playerCharacter: character, isLoading: false })
    }
  }

  render() {
    const { session, sessionId, playerId, playerCharacter } = this.state
    return (
      <div>
        {session && (playerId === session.dungeonMasterId) && <LogList sessionId={sessionId}/>}
        {session && playerCharacter &&
          <LogList sessionId={sessionId}/> &&
          <ModifyCharacter />
        }
        {!session && <CreateSession /> }
        {session && !playerCharacter && (playerId !== session.dungeonMasterId) && <CreateCharacter /> }

      </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user
  })

  // mapStateToProps basically receives the state of the store
  export default connect(mapStateToProps)(SessionPage);
