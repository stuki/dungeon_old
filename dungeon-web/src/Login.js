import React, { Component } from 'react';
// Tämän avulla komponentit
// connectoidaan storeen
import { connect } from 'react-redux';
import { updateUser } from './Actions/UserActions';
import Api from './Api';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      register: false
    }
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(user) {
    this.props.onUpdateUser(user);
  }

  nameChanged = (e) => {
    this.setState({ name: e.target.value });
  }

  login = async (e) => {
    e.preventDefault();
    if (this.state.name) {
      const player = await Api.getPlayer(this.state.name);
      if (player !== undefined) {
        this.onUpdateUser(player);
        setTimeout(this.props.handleLogin(), 1000);
      } else {
        this.setState({ register: true })
      }
    }
  }

  register = async (e) => {
    e.preventDefault();
    if (this.state.name) {
      Api.createPlayer(this.state.name);
      setTimeout(this.login(e), 1000);
    }
  }

  render() {
    const { register } = this.state;
    return (
      <div className="Login">
        {!register &&
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
        }
        {register &&
          <form onSubmit={this.register}>
            <table>
              <tbody>
                <tr>
                  <td>Name: </td><td><input value={this.state.name} onChange={this.nameChanged}/></td>
                </tr>
                <tr>
                  <td><input type="submit" defaultValue="Register"/></td>
                </tr>
              </tbody>
            </table>
          </form>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapActionsToProps = {
  // Käytetään onUpdateUser, jotta vältytään
  // variable collisionilta
  onUpdateUser: updateUser
};

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps, mapActionsToProps)(Login);
