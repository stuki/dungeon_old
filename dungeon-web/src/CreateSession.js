import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Api from './Api';
import { FormGroup, FormControl, ControlLabel, Button, }
from 'react-bootstrap';


class CreateSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      CreatorId: props.user.id,
    };
  }

  handleChange (property)  {
    return (e) => {
     this.setState({ 
       [property]: e.target.value,
       }); 
    };
  }

  handleSubmit = (e) => {
    const { updateSessions } = this.props;
    e.preventDefault();
    Api.createSession(this.state);
    setTimeout(updateSessions(), 1000);
    this.setState({ name: '' });
  }

  render() {
    const { 
      name 
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
          id="newSession"
          type="text"
          label="Create new session"
          value={name}
          placeholder="Write session name"
          onChange={this.handleChange('name')}
          />
          <Button type="submit">Add</Button>
        </form>
      </div>
    );
  }
}

function FieldGroup({ label, ...name }) {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...name} />
    </FormGroup>
  )
}

CreateSession.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  updateSessions: PropTypes.func,
};

CreateSession.defaultProps = {
  updateSessions: null,
};


const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(CreateSession);
