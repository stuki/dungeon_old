import React, { Component } from 'react';
import Api from './Api';
import { connect } from 'react-redux';


class CreateSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      CreatorId: props.user.id
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Api.createSession(this.state)
    this.setState({ name: "" })
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

const mapStateToProps = (state) => ({
  user: state.user
})

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps)(CreateSession);
