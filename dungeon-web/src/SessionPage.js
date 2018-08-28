import React, { Component } from 'react';
import CreateCharacter from './CreateCharacter';
import ModifyCharacter from './ModifyCharacter';
import CreateSession from './CreateSession';
import LogList from './LogList';
import { connect } from 'react-redux';
import Api from './Api';
import Login from './Login'
import Password from './Password'

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
  }

  async componentDidMount() {
    const { sessionId, player } = this.state;

    if (player != null) {
      const session = await Api.getSession(sessionId);
      const character = await Api.getCharacter(sessionId, player.id);
      if (session && character) {
        this.setState({ session: session, playerCharacter: character, isLoading: false })
      }
      if (session && character === undefined) {
        this.setState({ session: session, isLoading: false })
      }
    }
  }

  handleLogin = async () => {
    const { sessionId } = this.state

    const session = await Api.getSession(sessionId);
    const character = await Api.getCharacter(sessionId, this.props.user.id);

    this.setState({player: this.props.user, session: session, playerCharacter: character, isLoading: false })
  }

  handlePassword = async (pin) => {
    const { session, player } = this.state
    // debugger;
    console.log("before",session, player);
    let password = pin.password.join('');
    if (session.password === password) {
      console.log("wihtihn", session);
      Api.joinSession(session.id, player);
      const newSession = await Api.getSession(session.id);
      this.setState({
        session: newSession
      });
      // console.log("hoi");
      // SET PLAYER AS A MEMBER OF THE SESSION, REFRESH THE PAGE TO THE CHARACTER CREATION SCREEN
    }
  }
  render() {
    const { session, sessionId, player, playerCharacter } = this.state;
    console.log(this.state);
    if (!player) {
      return (
        <div>
          <Login handleLogin={this.handleLogin}/>
        </div>
      )
    } else if (session) {
      if (session.playerSessions.findIndex(p => p.playerId === player.id) < 0) {
        return (
          <div>
            <p> JOin session give password</p>
            <Password handlePassword={this.handlePassword}/>
          </div>
        )
      } else {
        return (
          <div>
            { session && (player.id === session.dungeonMasterId) && <LogList sessionId={sessionId} /> }
            { session && playerCharacter &&
              <React.Fragment>
                <LogList sessionId={sessionId} />
                <ModifyCharacter sessionId={this.state.sessionId} />
              </React.Fragment>
            }
            { session && !playerCharacter && (player.id !== session.dungeonMasterId) && <CreateCharacter sessionId={this.state.sessionId} /> }
          </div>
        );
      }
    } else if (!session) {
      return (
        <CreateSession />
      )
    }
  }
}


const mapStateToProps = (state) => ({
  user: state.user
})

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps)(SessionPage);
