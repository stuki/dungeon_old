import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PanelGroup, Badge } from 'react-bootstrap';
import MDSpinner from 'react-md-spinner';
import Logs from './Logs';
import CreateLog from './CreateLog';
import Api from './Api';

class LogList extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    const sessionId = match.url.split('/')[2];

    this.state = {
      logs: [],
      filter: null,
      sessionId,
      isLoading: true,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { sessionId } = this.state;

    const logs = await Api.getLogs(sessionId);
    if (logs) {
      this.setState({ logs: logs.reverse(), isLoading: false });
    }
  }

  updateLogs = () => {
    this.componentDidMount();
  }

  filterLogs = (label) => {
    let { filter } = this.state;

    filter = label;

    this.setState({
      filter,
    });
  }

  render() {
    const { filter, sessionId, isLoading } = this.state;
    let { logs } = this.state;

    if (filter) {
      logs = logs
        .filter(l => l.label === filter)
        .map(l => <Logs log={l} key={l.id} filter={this.filterLogs} />);
    } else {
      logs = logs.map(l => <Logs log={l} key={l.id} filter={this.filterLogs} />);
    }

    if (isLoading) {
      return (
        <MDSpinner
          color1="#e91e63"
          color2="#673ab7"
          color3="#009688"
          color4="#ff5722"
          className="spinner"
        />
      );
    }

    return (
      <PanelGroup id="LogList" className="container">
        <CreateLog sessionId={sessionId} updateLogs={this.updateLogs} />
        {filter && <Badge onClick={() => this.filterLogs(null)}>{filter}</Badge>}
        {logs}
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
