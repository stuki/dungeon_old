import React, { Component } from 'react';

class Password extends Component {
  state = { password: [] }
  componentDidMount() {

  }

  handleKeyUp = (e) => {
    if (isFinite(e.key)) {
      e.target.nextSibling.focus()
    }
    //console.log(e.target.form, e.target.nextSibling, isFinite(e.key));
  }

  handleChange = (e) => {
    let password = this.state.password
    password.push(e.target.value)
    this.setState({
      password
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handlePassword(this.state)
  }

  render() {
    return (
      <form onSubmit={this.props.handlePassword}>
        <input type="number" max="9" onChange={this.handleChange} onKeyUp={this.handleKeyUp} autoFocus="true" />
        <input type="number" max="9" onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
        <input type="number" max="9" onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
        <input type="number" max="9" onChange={this.handleChange} onKeyUp={this.handleSubmit} />
      </form>
    );
  }

}

export default Password;
