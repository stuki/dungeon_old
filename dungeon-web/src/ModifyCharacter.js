import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import Api from './Api';

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
    const character = await Api.getCharacter(sessionId, playerId);
    this.setState({ character });
  }


  handleSubmit = async (e) => {
    e.preventDefault();

    const { sessionId, playerId, character } = this.state;

    Api.updateCharacter(sessionId, playerId, character);
    const char = await Api.getCharacter(sessionId, playerId);
    toastr.success('sara', 'on kakka');
    this.setState({ character: char });
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
       <form type="submit" onSubmit={this.handleSubmit}>
         <input type="text" value={character.name} onChange={this.handleChange('name')} required />
         <input type="text" value={character.constitution} onChange={this.handleChange('constitution')} />
         <input type="text" value={character.charisma} onChange={this.handleChange('charisma')} />
         <input type="text" value={character.dexterity} onChange={this.handleChange('dexterity')} />
         <input type="text" value={character.intelligence} onChange={this.handleChange('intelligence')} />
         <input type="text" value={character.strength} onChange={this.handleChange('strength')} />
         <input type="text" value={character.wisdom} onChange={this.handleChange('wisdom')} />
         <input type="text" value={character.looks} onChange={this.handleChange('looks')} />
         <input type="text" value={character.armor} onChange={this.handleChange('armor')} />
         <input type="text" value={character.level} onChange={this.handleChange('level')} />
         <input type="text" value={character.xp} onChange={this.handleChange('xp')} />
         <input type="text" value={character.hitpoints} onChange={this.handleChange('hitpoints')} />
         <input type="text" value={character.damage} onChange={this.handleChange('damage')} />
         <input type="text" value={character.alignment} onChange={this.handleChange('alignment')} />
         <input type="text" value={character.gear} onChange={this.handleChange('gear')} />
         <input type="text" value={character.race} onChange={this.handleChange('race')} />
         <input type="text" value={character.bonds} onChange={this.handleChange('bonds')} />
         <input type="text" value={character.startingmoves} onChange={this.handleChange('startingmoves')} />
         <input type="text" value={character.advancedmoves} onChange={this.handleChange('advancedmoves')} />
         <input type="text" value={character.coin} onChange={this.handleChange('coin')} />
         <input type="text" value={character.spells} onChange={this.handleChange('spells')} />
         <input type="submit" value="Change" />
       </form>
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
