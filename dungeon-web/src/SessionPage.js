import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';
import { updateUser } from './Actions/UserActions';
import NavigationBar from './NavigationBar';
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
      const character = await Api.getCharacter(sessionId, player.id);

      if (session && character) {
        console.log('SESSION PASSWORD:', session.password);
        this.setState({ session, playerCharacter: character, isLoading: false });
      }
      if (session && character === undefined) {
        console.log('SESSION PASSWORD:', session.password);
        this.setState({ session, isLoading: false });
      }
    }
  }

  handleLogin = async () => {
    const { user } = this.props;
    this.setState({ player: user });
    this.componentDidMount();
  }

  handleLogout = () => {
    const { onUpdateUser } = this.props;
    onUpdateUser(null);
    this.setState({ player: null });
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

  updateState = () => {
    this.componentDidMount();
  }

  render() {
    const {
      session, sessionId, player, playerCharacter, isLoading,
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
    }

    if (!session) {
      return (
        <CreateSession sessionId={sessionId} updateState={this.updateState} />
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

    if (playerCharacter === null && session.dungeonMasterId !== player.id) {
      return (
        <CreateCharacter updateState={this.updateState} sessionId={sessionId} />
      );
    }

    if (isLoading) {
      return (
        <MDSpinner
          color1="#e91e63"
          color2="#673ab7"
          color3="#009688"
          color4="#ff5722"
          className="spinner"
        />
      );
    }

    return (
      <div>
        <NavigationBar
          match={match}
          dm={session.dungeonMasterId === player.id}
          handleLogout={this.handleLogout}
        />
        <Route exact path={match.url} component={LogList} />
        <Route path={`${match.url}/character`} component={ModifyCharacter} />
        <Route path={`${match.url}/settings`} component={Settings} />
        <Route path={`${match.url}/moves`} component={Moves} />
        <Route path={`${match.url}/createCharacter`} component={CreateCharacter} />
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
  }),
  onUpdateUser: PropTypes.func.isRequired,
};

SessionPage.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapActionsToProps = {
  onUpdateUser: updateUser,
};

export default connect(mapStateToProps, mapActionsToProps)(SessionPage);
