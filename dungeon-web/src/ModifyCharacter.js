import React, { Component } from 'react';
import Api from './Api';
import { connect } from 'react-redux';

class ModifyCharacter extends Component {
  constructor(props) {
    super(props);

    const sessionId = props.match.url.split('/')[2]

    this.state = {
      character: null,
      playerId: props.user.id,
      sessionId: sessionId
    }
    console.log(props)
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  async componentDidMount() {
    const character = await Api.getCharacter(this.state.sessionId, this.state.playerId);
    this.setState({ character })
  }

  handleChange(property) {
    return e => {
      let c = this.state.character
      c[property] = e.target.value
      this.setState({
        character : c
      });
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.character)
    Api.updateCharacter(this.state.sessionId, this.state.playerId, this.state.character)
    const char = await Api.getCharacter(this.state.sessionId, this.state.playerId);

    this.setState({ character: char })
  }

  render() {

    const {character} = this.state

    return (
      <div>
       {character &&        
       <form type="submit" onSubmit={this.handleSubmit}>
        <input type="text" value={character.name} onChange={this.handleChange('name')} required/>
        <input type="text" value={character.constitution} onChange={this.handleChange('constitution')}/>
        <input type="text" value={character.charisma} onChange={this.handleChange('charisma')}/>
        <input type="text" value={character.dexterity} onChange={this.handleChange('dexterity')}/>
        <input type="text" value={character.intelligence} onChange={this.handleChange('intelligence')}/>
        <input type="text" value={character.strength} onChange={this.handleChange('strength')}/>
        <input type="text" value={character.wisdom} onChange={this.handleChange('wisdom')}/>
        <input type="text" value={character.looks} onChange={this.handleChange('looks')}/>
        <input type="text" value={character.armor} onChange={this.handleChange('armor')}/>
        <input type="text" value={character.level} onChange={this.handleChange('level')}/>
        <input type="text" value={character.xp} onChange={this.handleChange('xp')}/>
        <input type="text" value={character.hitpoints} onChange={this.handleChange('hitpoints')}/>
        <input type="text" value={character.damage} onChange={this.handleChange('damage')}/>
        <input type="text" value={character.alignment} onChange={this.handleChange('alignment')}/>
        <input type="text" value={character.gear} onChange={this.handleChange('gear')}/>
        <input type="text" value={character.race} onChange={this.handleChange('race')}/>
        <input type="text" value={character.bonds} onChange={this.handleChange('bonds')}/>
        <input type="text" value={character.startingmoves} onChange={this.handleChange('startingmoves')}/>
        <input type="text" value={character.advancedmoves} onChange={this.handleChange('advancedmoves')}/>
        <input type="text" value={character.coin} onChange={this.handleChange('coin')}/>
        <input type="text" value={character.spells} onChange={this.handleChange('spells')}/>
        <input type="submit" value="Change"/>
        </form>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps)(ModifyCharacter);
