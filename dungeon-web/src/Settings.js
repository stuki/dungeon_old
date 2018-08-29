import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, FormControl, ControlLabel, HelpBlock, ListGroupItem, ListGroup, Button,
} from 'react-bootstrap';

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

  getCharacterById = (id) => {
    const { characters, dungeonMasterId } = this.state;

    if (id === dungeonMasterId) {
      return 'Game Master';
    }

    const char = characters.find(c => c.playerId === id);

    if (!char) {
      return 'No character created';
    }

    return char.name;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Api.updateSession(this.state);
    this.componentDidMount();
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
    let players;

    const {
      playerSessions,
      dungeonMasterId,
      password,
      name,
    } = this.state;

    let url = window.location.href.split('/');
    url.pop();
    url = url.join('/');

    if (playerSessions) {
      options = playerSessions.map(ps => (
        <option value={ps.player.id} key={ps.player.id}>
          {ps.player.name}
        </option>
      ));

      players = playerSessions.map(ps => (
        <ListGroupItem key={ps.player.id} header={ps.player.name}>
          {this.getCharacterById(ps.player.id)}
        </ListGroupItem>
      ));

      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <ControlLabel>Session url</ControlLabel>
              <FormControl.Static>{url}</FormControl.Static>
            </FormGroup>
            <FieldGroup
              id="name"
              type="text"
              label="Session name"
              value={name}
              onChange={this.handleChange('name')}
            />
            <FieldGroup
              id="pincode"
              type="text"
              label="Password"
              value={password}
              onChange={this.handleChange('password')}
              minLength="4"
              maxLength="4"
            />
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Game Master</ControlLabel>
              <FormControl
                componentClass="select"
                value={dungeonMasterId}
                onChange={this.handleChange('dungeonMasterId')}
              >
                {options}
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Players</ControlLabel>
              <ListGroup>
                {players}
              </ListGroup>
            </FormGroup>

            <Button type="submit">Update session</Button>
          </form>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

function FieldGroup({
  id, label, help, ...props
}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

Settings.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      sessionId: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default Settings;
