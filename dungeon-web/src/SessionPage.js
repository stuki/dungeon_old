import React, { Component } from 'react';
import CreateCharacter from './CreateCharacter';
import ModifyCharacter from './ModifyCharacter';
import CreateSession from './CreateSession';
import LogList from './LogList';
import CreateLog from './CreateLog';
import fetchival from 'fetchival';
import { connect } from 'react-redux';
import Api from './Api';
const baseurl = "https://dungeon.azurewebsites.net/api";

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: props.match.params.sessionId,
      session: null,
      player: props.user,
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
    const { sessionId, player } = this.state

    const session = await Api.getSession(sessionId);
    const character = await Api.getCharacter(sessionId, player.id);

    if (session) {
      this.setState({ session: session, playerCharacter: character, isLoading: false })
    }
  }

  render() {
    const { session, sessionId, player, playerCharacter } = this.state
    return (
      <div>
        {session && (player.id === session.dungeonMasterId) && <LogList sessionId={sessionId}/>}
        {session && playerCharacter &&
          <React.Fragment>
            <LogList sessionId={sessionId}/>
            <ModifyCharacter />
          </React.Fragment>
        }
        {!session && <CreateSession /> }
        {session && !playerCharacter && (player.id !== session.dungeonMasterId) && <CreateCharacter /> }

      </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user
  })

  // mapStateToProps basically receives the state of the store
  export default connect(mapStateToProps)(SessionPage);
