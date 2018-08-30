import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Form, Col, Button,
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
      sessionId,
      playerId: user.id,
      constitution: '',
      charisma: '',
      dexterity: '',
      intelligence: '',
      strength: '',
      wisdom: '',
      looks: '',
      armor: '',
      level: 1,
      xp: '',
      hitpoints: '',
      damage: '',
      alignment: '',
      gear: '',
      race: '',
      bonds: '',
      startingmoves: '',
      advancedmoves: '',
      coin: '',
      spells: '',
    };
  }


  handleSubmit = (e) => {
    const { updateState } = this.props;
    e.preventDefault();
    const character = this.state;
    character.hitpoints = 8 + character.constitution;
    Api.createCharacter(character);
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
      { name: 'Constitution', help: 'How sturdy you are, determines how many hit points you have' },
      { name: 'Charisma', help: 'Can you charm your way out of any situation, and barter anything?' },
      { name: 'Dexterity', help: 'Nimble and agile, useful in tight spots and leaps of faith' },
      { name: 'Intelligence', help: 'How book smart are you, and how is your skill in magic' },
      { name: 'Strength', help: 'Determines how much you can carry, or how much damage you can cause' },
      { name: 'Wisdom', help: 'As opposed to intelligence, wisdom is more about street smarts' },
    ].map(attr => (
      <FieldGroup
        id={attr.name.toLowerCase()}
        type="number"
        label={attr.name}
        help={attr.help}
        value={eval(attr.name.toLowerCase())}
        onChange={this.handleChange(attr.name.toLowerCase())}
        bsSize="small"
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
            bsSize="small"
          />
          <FieldGroup
            id="looks"
            type="text"
            label="Looks"
            help="Describe your looks in a few adjectives, be it handsome or the next bell ringer"
            value={looks}
            onChange={this.handleChange('looks')}
            bsSize="small"
          />
          <Col md={6}>
            {attributes.slice(0, 3)}
          </Col>
          <Col md={6}>
            {attributes.slice(3)}
          </Col>
          <Button type="submit">Create character</Button>
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
