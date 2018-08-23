import React, { Component } from 'react';
import { createSession } from './Service';

class CreateSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    createSession(this.state.name, 1)
  }

  render() {
    return (
      <div>
        <form>
          <p>Create new session</p>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default CreateSession;
