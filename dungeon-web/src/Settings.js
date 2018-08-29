import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, FormControl, ControlLabel, HelpBlock, ListGroupItem, ListGroup, Button
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

  handleChange(property) {
    return (e) => {
      this.setState({
        [property]: e.target.value,
      });
    };
  }

  delete = () => {
    const { id } = this.state;
    Api.deleteSession(id);
    this.props.history.push('/')
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
      options = playerSessions.map(ps => <option value={ps.player.id} key={ps.player.id}>{ps.player.name}</option>);
      players = playerSessions.map(ps => <ListGroupItem data-id={ps.player.id} header={ps.player.name}>omom</ListGroupItem>);
      return (
        <div>
          <form>
            <FieldGroup
              id="name"
              type="text"
              label="Session name"
              placeholder={name}
            />
            <FieldGroup
              id="pincode"
              type="text"
              label="Password"
              placeholder={password}
              minLength="4"
              maxLength="4"
            />
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Game Master</ControlLabel>
              <FormControl componentClass="select" value={dungeonMasterId}>
                {options}
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Session url</ControlLabel>
              <FormControl.Static>{url}</FormControl.Static>
            </FormGroup>
            <ListGroup>
              {players}
            </ListGroup>
          </form>
          <Button bsStyle="danger" onClick={this.delete}>Delete Session</Button>
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
