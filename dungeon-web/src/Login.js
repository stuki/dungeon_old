import React, { Component } from 'react';
import { getUser } from "./Service";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  nameChanged = (e) => {
    this.setState({ name: e.target.value });
  }

  login = (e) => {
    e.preventDefault();
    getUser(this.state.name, function() {
      this.setState({ name: ''});
    }.bind(this));
  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.login}>
          <table>
            <tbody>
              <tr>
                <td>Name: </td><td><input value={this.state.name} onChange={this.nameChanged}/></td>
              </tr>
              <tr>
                <td><input type="submit" defaultValue="Login"/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default Login;
