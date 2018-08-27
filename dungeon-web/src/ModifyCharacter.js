import React, { Component } from 'react';
import Api from './Api';
import { connect } from 'react-redux';

class ModifyCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
      playerId: props.user.id,
      sessionId: props.sessionId
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  async componentDidMount() {
    const char = await Api.getCharacter(this.state.sessionId, this.state.playerId);
    console.log(char)
    this.setState({ character: char })
  }

  render() {

    const {character} = this.state

    return (
      <div>
       {character &&        <ul>
        <li>{character.name}</li>
        <li>{character.constitution}</li>
        <li>{character.charisma}</li>
        <li>{character.dexterity}</li>
        <li>{character.intelligence}</li>
        <li>{character.strength}</li>
        <li>{character.wisdom}</li>
        <li>{character.looks}</li>
        <li>{character.armor}</li>
        <li>{character.level}</li>
        <li>{character.xp}</li>
        <li>{character.hitpoints}</li>
        <li>{character.damage}</li>
        <li>{character.alignment}</li>
        <li>{character.gear}</li>
        <li>{character.race}</li>
        <li>{character.bonds}</li>
        <li>{character.startingmoves}</li>
        <li>{character.advancedmoves}</li>
        <li>{character.coin}</li>
        <li>{character.spells}</li>
        </ul>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps)(ModifyCharacter);
