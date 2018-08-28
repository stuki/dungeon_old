import React, { Component } from 'react';
import CreateCharacter from './CreateCharacter';
import CreateSession from './CreateSession';
import LogList from './LogList';
import { connect } from 'react-redux';
import Api from './Api';
import { Link, Route } from 'react-router-dom'
import ModifyCharacter from './ModifyCharacter';

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
    const { sessionId, player } = this.state

    const session = await Api.getSession(sessionId);
    const character = await Api.getCharacter(sessionId, player.id);

    if (session && character) {
      this.setState({ session: session, playerCharacter: character, isLoading: false })
    }
    if (session && character === undefined) {
      console.log("mo");
      this.setState({ session: session, isLoading: false })
    }
  }

  render() {
    const { session, sessionId, player, playerCharacter } = this.state
    return (
      <div>
        {session && (player.id === session.dungeonMasterId) && <LogList sessionId={sessionId}/>}
        {session && playerCharacter &&
          <React.Fragment>
            <Link to='/'>Profile Page</Link>
            <Link to={`${this.props.match.url}/character`}>Character Sheet</Link>
            <LogList sessionId={sessionId}/>
          </React.Fragment>
        }
        {!session && <CreateSession /> }
        {session && !playerCharacter && (player.id !== session.dungeonMasterId) && <CreateCharacter SessionId={this.state.sessionId}/> }
        <Route path={`${this.props.match.url}/character`} component={ModifyCharacter}/>
      </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user
  })

  // mapStateToProps basically receives the state of the store
  export default connect(mapStateToProps)(SessionPage);
