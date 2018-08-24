import React, { Component } from 'react';
import { getUser } from "./Service";
// Tämän avulla komponentit 
// connectoidaan storeen
import { connect } from 'react-redux';
import { updateUser } from './Actions/UserActions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
      this.props.onUpdateUser(this.state.name);
    }
  
  nameChanged = (e) => {
    this.setState({ name: e.target.value });
  }

  login = (e) => {
    e.preventDefault();
    this.onUpdateUser(e);
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
