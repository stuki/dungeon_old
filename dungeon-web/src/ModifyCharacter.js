import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Api from './Api';
import './ModifyCharacter.css';
import {
  FormGroup, FormControl, Form, Col, ControlLabel, Button,
} from 'react-bootstrap';
import FieldGroup from './FieldGroup';

class ModifyCharacter extends Component {
  constructor(props) {
    super(props);

    const { match, user } = props;

    const sessionId = match.url.split('/')[2];

    this.state = {
      playerId: user.id,
      sessionId,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { sessionId, playerId } = this.state;
    const character = await Api.getCharacter(sessionId, playerId);
    this.setState(character);
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    Api.updateCharacter(this.state);
  }

  handleChange(property) {
    return (e) => {
      this.setState({
        [property]: e.target.value,
      });
    }
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
      armor,
      level,
      xp,
      hitpoints,
      damage,
      alignment,
      gear,
      race,
      bonds,
      startingmoves,
      advancedmoves,
      coin,
      spells,
    } = this.state;


    const properties = [
      'Name',
      'Constitution',
      'Charisma',
      'Dexterity',
      'Intelligence',
      'Strength',
      'Wisdom',
      'Looks',
      'Armor',
      'Level',
      'Xp',
      'Hitpoints',
      'Damage',
      'Alignment',
      'Gear',
      'Race',
      'Bonds',
      'Startingmoves',
      'Advancedmoves',
      'Coin',
      'Spells'].map(attr => (
        <FieldGroup
          id={attr.toLowerCase()}
          type="text"
          label={attr}
          value={eval(attr.toLowerCase())}
          onChange={this.handleChange(attr.toLowerCase())}
          bsSize="small"
        />
    ));

    return (
      <div className="container">
        {name
       && (
       <Form onSubmit={this.handleSubmit}>
         {properties}
         <FormGroup controlId="submit">
           <Button type="submit" bsStyle="primary">Update</Button>
         </FormGroup>

       </Form>
       )}
      </div>
    );
  }
}

ModifyCharacter.propTypes = {
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

export default connect(mapStateToProps)(ModifyCharacter);
