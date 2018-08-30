import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from './Actions/UserActions';
import Api from './Api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      register: false,
    };
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(user) {
    const { onUpdateUser } = this.props;

    onUpdateUser(user);
  }

  nameChanged = (e) => {
    this.setState({ name: e.target.value });
  }

  login = async (e) => {
    e.preventDefault();

    const { name } = this.state;
    const { handleLogin } = this.props;

    if (name) {
      const player = await Api.getPlayer(name);
      if (player !== undefined) {
        this.onUpdateUser(player);
        setTimeout(() => handleLogin(), 500);
      } else {
        this.setState({ register: true });
      }
    }
  }


  register = async (e) => {
    e.preventDefault();
    const player = this.state;
    delete player.register;
    if (player.name) {
      Api.createPlayer(player);
      setTimeout(() => this.login(e), 500);
    }
  }

  render() {
    const { register, name } = this.state;
    return (
      <div className="Login">
        {!register
          && (
          <form onSubmit={this.login}>
            <table>
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td><input value={name} onChange={this.nameChanged} /></td>
                </tr>
                <tr>
                  <td><input type="submit" defaultValue="Login" /></td>
                </tr>
              </tbody>
            </table>
          </form>
          )
        }
        {register
          && (
          <form onSubmit={this.register}>
            <table>
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td><input value={name} onChange={this.nameChanged} /></td>
                </tr>
                <tr>
                  <td><input type="submit" defaultValue="Register" /></td>
                </tr>
              </tbody>
            </table>
          </form>
          )
        }
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  onUpdateUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapActionsToProps = {
  onUpdateUser: updateUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
