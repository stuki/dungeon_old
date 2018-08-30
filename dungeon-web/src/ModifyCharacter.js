import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Api from './Api';
import './ModifyCharacter.css';
import { FormGroup, FormControl, Form, Col, ControlLabel, Button } from 'react-bootstrap';

class ModifyCharacter extends Component {
  constructor(props) {
    super(props);

    const { match, user } = props;

    const sessionId = match.url.split('/')[2];

    this.state = {
      character: null,
      playerId: user.id,
      sessionId,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { sessionId, playerId } = this.state;
    const character = await Api.getCharacter( sessionId, playerId);
    this.setState({ character });
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    const { character } = this.state;
    Api.updateCharacter(character);
  }

  handleChange(property) {
    const { character } = this.state;
    return (e) => {
      const c = character;
      c[property] = e.target.value;
      this.setState({
        character: c,
      });
    };
  }

  render() {
    const { character } = this.state;

    return (
      <div>
        {character
       && (
        <Form horizontal onSubmit={this.handleSubmit}>
            
            <FormGroup controlId="modifyField">
                <Col componentClass={ControlLabel} lg={4}>
                    Character qualities
                </Col>
            </FormGroup>
            
            <FormGroup controlId="charName">
            <Col componentClass={ControlLabel} lg={4}>
                Name:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.name} onChange={this.handleChange('name')} required />
            </Col>
            </FormGroup>

            <FormGroup controlId="charLooks">
            <Col componentClass={ControlLabel} lg={4}>
                Looks:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.looks} onChange={this.handleChange('looks')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charConstitution">
            <Col componentClass={ControlLabel} lg={4}>
                Constitution:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.constitution} onChange={this.handleChange('constitution')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charCharisma">
            <Col componentClass={ControlLabel} lg={4}>
                Charisma:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.charisma} onChange={this.handleChange('charisma')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charDexterity">
            <Col componentClass={ControlLabel} lg={4}>
                Dexterity:
            </Col>
            <Col lg={1}>
            <FormControl type="text" value={character.dexterity} onChange={this.handleChange('dexterity')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charIntelligence">
            <Col componentClass={ControlLabel} lg={4}>
                Intelligence:
            </Col>
            <Col lg={1}>
            <FormControl type="text" value={character.intelligence} onChange={this.handleChange('intelligence')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charStrenght">
            <Col componentClass={ControlLabel} lg={4}>
                Strength:
            </Col>
            <Col lg={1}>
            <FormControl type="text" value={character.strength} onChange={this.handleChange('strength')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charWisdom">
            <Col componentClass={ControlLabel} lg={4}>
                Wisdom:
            </Col>
            <Col lg={1}>
            <FormControl type="text" value={character.wisdom} onChange={this.handleChange('wisdom')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charArmor">
            <Col componentClass={ControlLabel} lg={4}>
                Armor:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.armor} onChange={this.handleChange('armor')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charLevel">
            <Col componentClass={ControlLabel} lg={4}>
                Level:
            </Col>
            <Col lg={1}>
            <FormControl type="text" value={character.level} onChange={this.handleChange('level')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charXp">
            <Col componentClass={ControlLabel} lg={4}>
                Xp:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.xp} onChange={this.handleChange('xp')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charHitpoints">
            <Col componentClass={ControlLabel} lg={4}>
                Hitpoints:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.hitpoints} onChange={this.handleChange('hitpoints')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charDamage">
            <Col componentClass={ControlLabel} lg={4}>
                Damage:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.damage} onChange={this.handleChange('damage')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charAlignment">
            <Col componentClass={ControlLabel} lg={4}>
                Alignment:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.alignment} onChange={this.handleChange('alignment')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charGear">
            <Col componentClass={ControlLabel} lg={4}>
                Gear:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.gear} onChange={this.handleChange('gear')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charRace">
            <Col componentClass={ControlLabel} lg={4}>
                Race:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.race} onChange={this.handleChange('race')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charBonds">
            <Col componentClass={ControlLabel} lg={4}>
                Bonds:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.bonds} onChange={this.handleChange('bonds')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charStartingMoves">
            <Col componentClass={ControlLabel} lg={4}>
                Starting moves:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.startingmoves} onChange={this.handleChange('startingmoves')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charAdvancedMoves">
            <Col componentClass={ControlLabel} lg={4}>
                Advanced moves:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.advancedmoves} onChange={this.handleChange('advancedmoves')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charCoin">
            <Col componentClass={ControlLabel} lg={4}>
                Coins:
            </Col>
            <Col lg={4}>
            <FormControl type="text" value={character.coin} onChange={this.handleChange('coin')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="charSpells">
            <Col componentClass={ControlLabel} lg={4}>
                Spells:
            </Col>
            <Col lg={1}>
            <FormControl type="text" value={character.spells} onChange={this.handleChange('spells')} />
            </Col>
            </FormGroup>

            <FormGroup controlId="submit">
            <Col lg={9}>
                <Button type="submit" bsStyle="primary">Change</Button>
            </Col>
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