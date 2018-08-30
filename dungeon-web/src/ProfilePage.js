import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from './Actions/UserActions';
import SessionList from './SessionList';
import NavigationBar from './NavigationBar';
import Login from './Login';

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

    handleLogout = () => {
      const { onUpdateUser } = this.props;
      onUpdateUser(null);
      this.setState({ player: null });
    }

    render() {
      const { player } = this.state;

      if (!player) {
        return (
          <Login handleLogin={this.handleLogin} />
        );
      }
      return (
        <div className="SessionList">
          <NavigationBar
            handleLogout={this.handleLogout}
          />
          <SessionList clearLoading={this.clearLoading} />
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
  onUpdateUser: updateUser,
};

export default connect(mapStateToProps, mapActionsToProps)(ProfilePage);
