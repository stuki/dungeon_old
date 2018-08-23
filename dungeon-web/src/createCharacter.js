import React, { Component } from 'react';
import { createCharacter } from './Service';

class CreateCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = { Name:'',  Constitution:'', Charisma:'',
                       Dexterity:'', Intelligence:'', Strength:'',
                       Wisdom:'', Looks:'', Armor:'', Level:'', 
                       SessionId:3, PlayerId:1};
    }

    handleChange(property) {
        return e => {
          this.setState({
            [property]: e.target.value
          });
        };
      }

      handleSubmit = (e) => {
        e.preventDefault();
        createCharacter(this.state);

        this.setState({ Name:'', Constitution:'', Charisma:'', 
                        Dexterity:'', Intelligence:'', Strength:'',
                        Wisdom:'', Looks:'', Armor:'', Level:'' });
    }

  render() {

    return (
        <div>
        <div>Add character qualities</div>
        <form className="characterSheet" onSubmit={this.handleSubmit}>
            <table>
                <tbody>
                    <tr><td>Name: </td><td><input type="text" value={this.state.Name} onChange={this.handleChange('Name')} required/></td></tr>
                    <tr><td>Constitution: </td><td><input type="number" value={this.state.Constitution} onChange={this.handleChange('Constitution')} /></td></tr>
                    <tr><td>Charisma: </td><td><input type="number" value={this.state.Charisma} onChange={this.handleChange('Charisma')} /></td></tr>
                    <tr><td>Dexterity: </td><td><input type="number" value={this.state.Dexterity} onChange={this.handleChange('Dexterity')} /></td></tr>
                    <tr><td>Intelligence: </td><td><input type="number" value={this.state.Intelligence} onChange={this.handleChange('Intelligence')} /></td></tr>
                    <tr><td>Strength: </td><td><input type="number" value={this.state.Strength} onChange={this.handleChange('Strength')} /></td></tr>
                    <tr><td>Wisdom: </td><td><input type="number" value={this.state.Wisdom} onChange={this.handleChange('Wisdom')} /></td></tr>
                    <tr><td>Looks: </td><td><input type="text" value={this.state.Looks} onChange={this.handleChange('Looks')} /></td></tr>
                    <tr><td>Armor: </td><td><input type="number" value={this.state.Armor} onChange={this.handleChange('Armor')} /></td></tr>
                    <tr><td>Level: </td><td><input type="number" value={this.state.Level} onChange={this.handleChange('Level')} /></td></tr>

                    <tr><td><input type="submit" defaultValue="Add new character"/></td></tr>
                </tbody>
            </table>
        </form>
    </div>
    );
  }
}

export default CreateCharacter;