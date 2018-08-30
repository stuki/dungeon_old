import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FormGroup, FormControl, Form, Col, ControlLabel, Button,
} from 'react-bootstrap';
import Api from './Api';
import 'bootstrap';
import FieldGroup from './FieldGroup';
import './CreateCharacter.css';

class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    const { sessionId, user } = props;
    this.state = {
      name: '',
      constitution: 0,
      charisma: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
      wisdom: 0,
      looks: '',
      armor: 0,
      level: 0,
      sessionId,
      playerId: user.id,
    };
  }


  handleSubmit = (e) => {
    const { updateState } = this.props;
    e.preventDefault();
    Api.createCharacter(this.state);
    setTimeout(() => updateState(), 500);
  }

  handleChange(property) {
    return (e) => {
      this.setState({
        [property]: e.target.value,
      });
    };
  }

  render() {
    const {
      name,
      constitution,
      charisma,
      dexterity,
      intelligence,
      strength,
      wisdom,
      looks,
    } = this.state;

    const attributes = [
      'Constitution',
      'Charisma',
      'Dexterity',
      'Intelligence',
      'Strength',
      'Wisdom',
    ].map(attr => (
      <FieldGroup
        id={attr.toLowerCase()}
        type="number"
        label={attr}
        value={eval(attr.toLowerCase())}
        onChange={this.handleChange(attr.toLowerCase())}
      />
    ));
    return (
      <div id="character-form">
        <h1 id="title">Add your character information</h1>
        <Form className="characterSheet" onSubmit={this.handleSubmit}>
          <FieldGroup
            id="name"
            type="text"
            label="Character name"
            help="Give your character a proper name, but beware, you cannot change it afterwards"
            value={name}
            onChange={this.handleChange('name')}
          />
          <FieldGroup
            id="looks"
            type="text"
            label="Looks"
            help="Describe your looks, be it handsome or puke worthy"
            value={looks}
            onChange={this.handleChange('looks')}
          />
          {attributes}
        </Form>
      </div>
    );
  }
}

CreateCharacter.propTypes = {
  sessionId: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  updateState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(CreateCharacter);
