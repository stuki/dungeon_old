import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Api from './Api';
import './CreateLog.css';
import {
  FormGroup, FormControl, ControlLabel, Button, Form,
} from 'react-bootstrap';

class CreateLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      text: '',
      sessionId: props.sessionId,
      playerId: props.user.id,
    };
  }

  handleSubmit = (e) => {
    const { updateLogs } = this.props;

    e.preventDefault();
    Api.createLog(this.state);
    setTimeout(() => updateLogs(), 500);
    this.setState({ label: '', text: '' });
  }

  handleChange(property) {
    return (e) => {
      this.setState({
        [property]: e.target.value,
      });
    };
  }

  render() {
    const {
      label,
      text,
    } = this.state;

    return (
      <div>
        <div className="createLog">
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup controlId="formInlineLabel">
              <ControlLabel>Log Label</ControlLabel>
              <FormControl id="newLabel" type="text" value={label} placeholder="Write a log label" onChange={this.handleChange('label')} />
            </FormGroup>
            <FormGroup controlId="formInlineLogText">
              <ControlLabel>Log text</ControlLabel>
              <FormControl id="newLogText" type="text" value={text} autoComplete={false} placeholder="Write a log text" onChange={this.handleChange('text')} />
            </FormGroup>
            <Button type="submit" bsStyle="primary">Add</Button>
          </Form>
        </div>
      </div>
    );
  }
}

CreateLog.propTypes = {
  sessionId: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  updateLogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

// mapStateToProps basically receives the state of the store
export default connect(mapStateToProps)(CreateLog);
