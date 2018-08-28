import React, { Component } from 'react';
import Api from './Api';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const session = await Api.getSession(this.props.id)
    this.setState(session);
  }

  render() {
    let options
    if (this.state) {
      console.log(this.state.playerSessions);
      options = this.state.playerSessions.map(ps =>
        <option value={ps.player.name} />
      )
    }
    return (
      <div>
        <form>
          <select name="Game Master">
            {options}
          </select>
          {/* <input value={this.state.password} onChange={this.handleChange} /> */}
        </form>
      </div>
    );
  }

}

export default Settings;
