import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import {
  Navbar, Nav, NavItem, NavbarBrand,
} from 'react-bootstrap';
import CreateCharacter from './CreateCharacter';
import CreateSession from './CreateSession';
import LogList from './LogList';
import Api from './Api';
import ModifyCharacter from './ModifyCharacter';
import Login from './Login';
import Password from './Password';
import Settings from './Settings';
import Moves from './Moves';

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: props.match.params.sessionId,
      session: null,
      player: props.user,
      playerCharacter: null,
      isLoading: true,
    };  
  }

  async componentDidMount() {
    const { sessionId, player } = this.state;

    if (player != null) {
      const session = await Api.getSession(sessionId);
      console.log('SESSION PASSWORD:', session.password);
      const character = await Api.getCharacter(sessionId, player.id);
      if (session && character) {
        this.setState({ session, playerCharacter: character, isLoading: false });
      }
      if (session && character === undefined) {
        this.setState({ session, isLoading: false });
      }
    }
  }

  handleLogin = async () => {
    const { sessionId } = this.state;
    const { user } = this.props;

    const session = await Api.getSession(sessionId);
    const character = await Api.getCharacter(sessionId, user.id);

    if (session && character) {
      this.setState({ session, playerCharacter: character, isLoading: false });
    }
    if (session && character === undefined) {
      this.setState({ session, isLoading: false });
    }
  }

  handlePassword = async (pin) => {
    const { session, player } = this.state;
    if (session.password === pin) {
      Api.joinSession(session.id, player);
      const newSession = await Api.getSession(session.id);
      this.setState({
        session: newSession,
      });
    }
  }
  
  render() {
    const {
      session, player, playerCharacter,
    } = this.state;

    const {
      match,
    } = this.props;
    if (!player) {
      return (
        <div>
          <Login handleLogin={this.handleLogin} />
        </div>
      );
    } if (!session) {
      return (
        <CreateSession />
      );
    }
    if (session.playerSessions.findIndex(p => p.playerId === player.id) < 0) {
      return (
        <div>
          <p>Join session give password</p>
          <Password handlePassword={this.handlePassword} />
        </div>
      );
    }
    return (
      <div>
        {session && (player.id === session.dungeonMasterId)
              && (
                <Navbar expand="md">
                  <NavbarBrand to="/">Dungeon</NavbarBrand>
                  <Nav navbar>
                    <NavItem>
                      <NavLink to={`${match.url}/journey`}>Journey</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to={`${match.url}/settings`}>Settings</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to={`${match.url}/moves`}>Moves</NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              )}
        {session && playerCharacter
              && (
              <Nav>
                <NavItem>
                  <NavLink to={`${match.url}/journey`} active>Journey</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={`${match.url}/character`}>Character</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={`${match.url}/moves`}>Moves</NavLink>
                </NavItem>
              </Nav>
              )
            }
        {!session && <CreateSession /> }
        {session && !playerCharacter && (player.id !== session.dungeonMasterId)
          && <CreateCharacter SessionId={session.id} />
        }
        <Route path={`${match.url}/character`} component={ModifyCharacter} />
        <Route path={`${match.url}/journey`} component={LogList} />
        <Route path={`${match.url}/settings`} component={Settings} />
        <Route path={`${match.url}/moves`} component={Moves} />
      </div>
    );
  }
}

SessionPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      sessionId: PropTypes.node,
    }).isRequired,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps)(SessionPage);
