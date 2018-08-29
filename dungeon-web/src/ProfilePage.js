import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SessionList from './SessionList';
import Login from './Login';
import { updateUser } from './Actions/UserActions';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.user,
    };
  }

    handleLogin = () => {
      const { user } = this.props;
      this.setState({ player: user });
    }

    handleLogOut = () => {
      const { onUpdateUser, user } = this.props;
      onUpdateUser(null);
      setTimeout(() => this.setState({ player: user }), 1000);
    }

    render() {
      const { player } = this.state;
      return (
        <div className="SessionList">
          {!player && <Login handleLogin={this.handleLogin} />}
          {player && <SessionList handleLogOut={this.handleLogOut} />}
        </div>
      );
    }
}

ProfilePage.propTypes = {
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
  // Käytetään onUpdateUser, jotta vältytään
  // variable collisionilta
  onUpdateUser: updateUser,
};

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps, mapActionsToProps)(ProfilePage);
