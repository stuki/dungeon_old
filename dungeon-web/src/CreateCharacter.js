import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Api from './Api';
import 'bootstrap';

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
    setTimeout(updateState(), 1000);
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
        <div>Add character qualities</div>
        <form className="characterSheet" onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name: </td>
                <td><input type="text" value={Name} onChange={this.handleChange('Name')} required /></td>
              </tr>
              <tr>
                <td>Constitution: </td>
                <td><input type="number" value={Constitution} onChange={this.handleChange('Constitution')} /></td>
              </tr>
              <tr>
                <td>Charisma: </td>
                <td><input type="number" value={Charisma} onChange={this.handleChange('Charisma')} /></td>
              </tr>
              <tr>
                <td>Dexterity: </td>
                <td><input type="number" value={Dexterity} onChange={this.handleChange('Dexterity')} /></td>
              </tr>
              <tr>
                <td>Intelligence: </td>
                <td><input type="number" value={Intelligence} onChange={this.handleChange('Intelligence')} /></td>
              </tr>
              <tr>
                <td>Strength: </td>
                <td><input type="number" value={Strength} onChange={this.handleChange('Strength')} /></td>
              </tr>
              <tr>
                <td>Wisdom: </td>
                <td><input type="number" value={Wisdom} onChange={this.handleChange('Wisdom')} /></td>
              </tr>
              <tr>
                <td>Looks: </td>
                <td><input type="text" value={Looks} onChange={this.handleChange('Looks')} /></td>
              </tr>
              <tr>
                <td>Armor: </td>
                <td><input type="number" value={Armor} onChange={this.handleChange('Armor')} /></td>
              </tr>
              <tr>
                <td>Level: </td>
                <td><input type="number" value={Level} onChange={this.handleChange('Level')} /></td>
              </tr>

              <tr><td><input type="submit" defaultValue="Add new character" /></td></tr>
            </tbody>
          </table>
        </form>
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
