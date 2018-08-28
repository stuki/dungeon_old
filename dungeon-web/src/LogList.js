import React, { Component } from 'react';
import Logs from './Logs';
import fetchival from 'fetchival';
import CreateLog from './CreateLog';
import Api from './Api';
const baseurl = "https://dungeon.azurewebsites.net/api";


class LogList extends Component {
  constructor(props) {
    super(props);
    this.state = { logs: [] };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const logs = await Api.getLogs(this.props.sessionId);
    if (logs) {
      this.setState({ logs })
    }
  }

  updateLogs = () => {
    this.componentDidMount();
  }

  render() {
    console.log("logs", this.state, this.props);
    var allLogs = this.state.logs.map(function (logs) {
      return (<Logs logs={logs} key={logs.id} label={logs.label} text={logs.text} />)
    });

    return (
      <div>
        <ul className="LogList">
          {allLogs}

          <CreateLog sessionId={this.props.sessionId} updateLogs={this.updateLogs} />
        </ul>
      </div>
    );
  }
}

export default LogList;
