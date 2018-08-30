import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Api from './Api';
import 'bootstrap';
import {
    FormGroup, FormControl, Form, Col, ControlLabel, Button,
  } from 'react-bootstrap';

class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    const { sessionId, user } = props;
    this.state = {
      Name: '',
      Constitution: 0,
      Charisma: 0,
      Dexterity: 0,
      Intelligence: 0,
      Strength: 0,
      Wisdom: 0,
      Looks: '',
      Armor: 0,
      Level: 0,
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
      Name,
      Constitution,
      Charisma,
      Dexterity,
      Intelligence,
      Strength,
      Wisdom,
      Looks,
      Armor,
      Level,
    } = this.state;
    
    return (
      <div>
        <Form horizontal className="characterSheet" onSubmit={this.handleSubmit}>
            
            <FormGroup controlId="labelField">
                <Col componentClass={ControlLabel} sm={2}>
                    Add character qualities
                </Col>
            </FormGroup>
            
            <FormGroup controlId="nameField">
            <Col componentClass={ControlLabel} sm={2}>
                Name:
            </Col>
            <Col sm={4}>
            <FormControl type="text" placeholder="Give name to your character" onChange={this.handleChange('Name')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="looksField">
            <Col componentClass={ControlLabel} sm={2}>
                Looks:
            </Col>
            <Col sm={4}>
            <FormControl type="text" placeholder="Describe the looks of the character" onChange={this.handleChange('Looks')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="constitutionField">
            <Col componentClass={ControlLabel} sm={2}>
                Constitution:
            </Col>
            <Col sm={1}>
            <FormControl type="number" placeholder="0-50" onChange={this.handleChange('Constitution')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charismaField">
            <Col componentClass={ControlLabel} sm={2}>
                Charisma:
            </Col>
            <Col sm={1}>
            <FormControl type="number" placeholder="0-50" onChange={this.handleChange('Charisma')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="dexterityField">
            <Col componentClass={ControlLabel} sm={2}>
                Dexterity:
            </Col>
            <Col sm={1}>
            <FormControl type="number" placeholder="0-50" onChange={this.handleChange('Dexterity')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="intelligenceField">
            <Col componentClass={ControlLabel} sm={2}>
                Intelligence:
            </Col>
            <Col sm={1}>
            <FormControl type="number" placeholder="0-50" onChange={this.handleChange('Intelligence')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="stregthField">
            <Col componentClass={ControlLabel} sm={2}>
                Strength:
            </Col>
            <Col sm={1}>
            <FormControl type="number" placeholder="0-50" onChange={this.handleChange('Strength')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="wisdomField">
            <Col componentClass={ControlLabel} sm={2}>
                Wisdom:
            </Col>
            <Col sm={1}>
            <FormControl type="number" placeholder="0-50" onChange={this.handleChange('Wisdom')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="armorField">
            <Col componentClass={ControlLabel} sm={2}>
                Armor:
            </Col>
            <Col sm={1}>
            <FormControl type="number" placeholder="0-50" onChange={this.handleChange('Armor')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="levelField">
            <Col componentClass={ControlLabel} sm={2}>
                Level:
            </Col>
            <Col sm={1}>
            <FormControl type="number" placeholder="0-50" onChange={this.handleChange('Level')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="submit">
            <Col smOffset={2} sm={10}>
                <Button type="submit">Add</Button>
            </Col>
            </FormGroup>
            
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
