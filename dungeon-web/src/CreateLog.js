import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Api from './Api';
import {
    FormGroup, FormControl, ControlLabel, HelpBlock, ListGroupItem, ListGroup, Button,
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
      setTimeout(updateLogs(), 1000);
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
                <form onSubmit={this.handleSubmit}>
                    <FieldGroup
                        id="newLogLabel"
                        type="text"
                        label="Create new log"
                        value={label}
                        placeholder="Write a label"
                        onChange={this.handleChange('label')}
                    />
                    <FieldGroup
                        id="newLogText"
                        type="text"
                        
                        value={text}
                        placeholder="Write a log text"
                        onChange={this.handleChange('text')}
                        
                    />

                    <Button type="submit">Add</Button>
                </form>
            </div>
        );
    }
}

function FieldGroup({
            label, ...text}) {
    return (
        <FormGroup>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...text} />
            
        </FormGroup>
    );
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
