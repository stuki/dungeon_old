import React, { Component } from 'react';
import Api from './Api';

class Settings extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.url.split('/')[2];
    this.state = {
      id
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const session = await Api.getSession(this.state.id)
    this.setState(session);
  }

  handleChange(property) {
    return e => {
      this.setState({
        [property]: e.target.value
      });
    };
  }

  render() {
    let options
    if (this.state.playerSessions) {
      console.log(this.state.playerSessions);
      options = this.state.playerSessions.map(ps =>
        <option value={ps.player.id} key={ps.player.id}>{ps.player.name}</option>
      )
      return (
        <div>
          <form>
            <select name="Game Master" value={this.state.dungeonMasterId}>
              {options}
            </select>
            <input value={this.state.password} onChange={this.handleChange} />
          </form>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }

}

export default Settings;
