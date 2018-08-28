import React, { Component } from 'react';
import CreateCharacter from './CreateCharacter';
import CreateSession from './CreateSession';
import LogList from './LogList';
import { connect } from 'react-redux';
import Api from './Api';
import { NavLink, Route } from 'react-router-dom'
import ModifyCharacter from './ModifyCharacter';
import Login from './Login'
import Password from './Password'
import Settings from './Settings'

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
        console.log("SESSION PASSWORD:", session.password);
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

    if (session && character) {
      this.setState({ session: session, playerCharacter: character, isLoading: false })
    }
    if (session && character === undefined) {
      console.log("mo");
      this.setState({ session: session, isLoading: false })
    }
  }

  handlePassword = async (pin) => {
    const { session, player } = this.state
    if (session.password === pin) {
      Api.joinSession(session.id, player);
      const newSession = await Api.getSession(session.id);
      this.setState({
        session: newSession
      });
    }
  }
  
  render() {
    const { session, sessionId, player, playerCharacter } = this.state;
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
            {session && (player.id === session.dungeonMasterId) &&
              <React.Fragment>
                <NavLink to='/'>Profile Page</NavLink>
                <NavLink to={`${this.props.match.url}/journey`}>Journey</NavLink>
                <NavLink to={`${this.props.match.url}/settings`}>Settings</NavLink>
              </React.Fragment>}
            {session && playerCharacter &&
              <React.Fragment>
                <NavLink to='/'>Profile Page</NavLink>
                <NavLink to={`${this.props.match.url}/journey`}>Journey</NavLink>
                <NavLink to={`${this.props.match.url}/character`}>Character Sheet</NavLink>
              </React.Fragment>
            }
            {!session && <CreateSession /> }
            {session && !playerCharacter && (player.id !== session.dungeonMasterId) && <CreateCharacter SessionId={this.state.sessionId}/> }
            <Route path={`${this.props.match.url}/character`} component={ModifyCharacter}/>
            <Route path={`${this.props.match.url}/journey`} component={LogList}/>
            <Route path={`${this.props.match.url}/settings`} component={Settings}/>
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
