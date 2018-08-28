import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Session from './Session';
import Api from './Api';
import CreateSession from './CreateSession';

class SessionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.user,
      sessions: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { player } = this.state;
    const sessions = await Api.getSessions(player.id);
    if (sessions) {
      this.setState({ sessions });
    }
  }

  updateSessions = () => {
    this.componentDidMount();
  }

  render() {
    const { sessions } = this.state;
    const { handleLogOut } = this.props;

    const allSessions = sessions.map(s => (<Session session={s} key={s.id} />));

    return (
      <div>
        <Button onClick={handleLogOut}>Log Out</Button>
        <ul className="sessionList">
          {allSessions}
          <p>* * * * * * * * *</p>
          <CreateSession updateSessions={this.updateSessions} />
          {' '}
          <br />
        </ul>
      </div>
    );
  }
}

SessionList.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps)(SessionList);
