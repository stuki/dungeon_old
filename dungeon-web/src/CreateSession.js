import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Api from './Api';


class CreateSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      CreatorId: props.user.id,
      id: props.sessionId,
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    const { updateState } = this.props;
    e.preventDefault();
    Api.createSession(this.state);
    updateState();
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Create new session</p>
          <label>
            Name
            <input type="text" value={name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

CreateSession.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  updateState: PropTypes.func,
  sessionId: PropTypes.string.isRequired,
};

CreateSession.defaultProps = {
  updateState: null,
};


const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(CreateSession);
