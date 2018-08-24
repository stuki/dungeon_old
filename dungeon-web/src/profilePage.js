import React, { Component } from 'react';
import Sessions from './Sessions';
import Login from './Login';
import { connect } from 'react-redux';
import { updateUser } from './Actions/UserActions';

class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: props.user,
          };
    }

    handleLogin = () => {
        this.setState({player: this.props.user})
    }

    handleLogOut = () => {
        this.props.onUpdateUser(null);
        setTimeout(() => this.setState({player: this.props.user}), 1000);
        
    }

    render() {
        const { player } = this.state
        return (
            <div className="sessionList">
            {!player && <Login handleLogin={this.handleLogin} />}
            {player && <Sessions handleLogOut={this.handleLogOut}/>}
            </div>
        );
    };
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
  export default connect(mapStateToProps, mapActionsToProps)(ProfilePage);