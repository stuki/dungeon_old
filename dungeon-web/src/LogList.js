import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from 'react-bootstrap';
import Logs from './Logs';
import CreateLog from './CreateLog';
import Api from './Api';

class LogList extends Component {
  constructor(props) {
    super(props);
    console.log(props, this.state);

    const { match } = this.props;

    const sessionId = match.url.split('/')[2];

    this.state = {
      logs: [],
      sessionId,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { sessionId } = this.state;

    const logs = await Api.getLogs(sessionId);
    if (logs) {
      this.setState({ logs: logs.reverse() });
    }
  }

  updateLogs = () => {
    this.componentDidMount();
  }

  render() {
    const { logs, sessionId } = this.state;
    const allLogs = logs.map(l => <Logs log={l} key={l.id} />);

    return (
      <PanelGroup>
        {allLogs} <br/>
        <CreateLog sessionId={sessionId} updateLogs={this.updateLogs} />
      </PanelGroup>
    );
  }
}

LogList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      sessionId: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default LogList;
