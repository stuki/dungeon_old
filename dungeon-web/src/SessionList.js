import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PanelGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Session from './Session';
import Api from './Api';
import CreateSession from './CreateSession';
import './SessionList.css';
import NameGen from './NameGen';

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
    if (sessions.length > 0) {
      this.setState({ sessions });
    }
  }

  updateSessions = () => {
    this.componentDidMount();
  }

  generateUrl = () => {
    const name = NameGen.names[Math.floor(Math.random() * NameGen.names.length)];
    const adjective = NameGen.adjectives[Math.floor(Math.random() * NameGen.adjectives.length)];
    const dndclass = NameGen.class[Math.floor(Math.random() * NameGen.class.length)];
    return `${name}The${adjective}${dndclass}`;
  }

  render() {
    const { sessions } = this.state;

    const allSessions = sessions.map(s => (<Session session={s} key={s.id} />));

    const url = this.generateUrl();

    return (
      <div>
        <PanelGroup id="sessionList">
          {allSessions}
          {/* <CreateSession updateSessions={this.updateSessions} /> */}
        </PanelGroup>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          component={Link}
          to={`/session/${url}`}
          className="new-session"
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

SessionList.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(SessionList);
