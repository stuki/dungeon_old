import React, { Component } from 'react';
import {
  Panel, Glyphicon, Badge, Button, FormControl,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Api from './Api';
import './Logs.css';

class Logs extends Component {
  constructor(props) {
    super(props);
    const { log } = props;
    this.state = log;
  }

  toggleEditState = () => {
    const { edit } = this.state;

    const state = !edit;

    this.setState({
      edit: state,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.toggleEditState();

    const log = this.state;
    delete log.edit;

    Api.updateLog(log);

    const newLog = await Api.getLogs(log.id);

    setTimeout(this.setState(newLog), 1000);
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    const { text, label, edit } = this.state;
    if (edit) {
      return (
        <Panel>
          <Panel.Body>
            <Button onClick={this.handleSubmit}>Done</Button>
            <FormControl value={text} onChange={this.handleChange} />
          </Panel.Body>
          <Panel.Footer>
            <Badge>{label}</Badge>
          </Panel.Footer>
        </Panel>
      );
    }
    return (
      <Panel>
        <Panel.Body>
          {text}
          <Glyphicon glyph="pencil" onClick={this.toggleEditState} />
        </Panel.Body>
        <Panel.Footer>
          <Badge>{label}</Badge>
        </Panel.Footer>
      </Panel>
    );
  }
}


Logs.propTypes = {
  log: PropTypes.shape({
    text: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};


export default Logs;
