import React, { Component } from 'react';
// Tämän avulla komponentit 
// connectoidaan storeen
import { connect } from 'react-redux';
import { updateUser } from './Actions/UserActions';
import fetchival from 'fetchival';
const baseurl = "https://dungeon.azurewebsites.net/api";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
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
    const api = fetchival(baseurl);
    const players = api('players');
    const player = await players(this.state.name).get().catch(function(err) {console.log(err)})
    this.onUpdateUser(player);
    this.props.handleLogin();
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
