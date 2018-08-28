import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Api from './Api';

class Settings extends Component {
  constructor(props) {
    super(props);

    const { match } = props;

    const id = match.url.split('/')[2];

    this.state = {
      id,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { id } = this.state;
    const session = await Api.getSession(id);
    this.setState(session);
  }

  handleChange(property) {
    return (e) => {
      this.setState({
        [property]: e.target.value,
      });
    };
  }

  render() {
    let options;

    const { playerSessions, dungeonMasterId, password } = this.state;

    if (playerSessions) {
      options = playerSessions.map(ps => <option value={ps.player.id} key={ps.player.id}>{ps.player.name}</option>);
      return (
        <div>
          <form>
            <select name="Game Master" value={dungeonMasterId}>
              {options}
            </select>
            <input value={password} onChange={this.handleChange} />
          </form>
        </div>
      );
    }
    return (
      <div />
    );
  }
}
Settings.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      sessionId: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default Settings;
