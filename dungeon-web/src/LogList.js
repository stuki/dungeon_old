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
    this.setState({ logs })
    // this.getLogsAndUpdate();
  }

  getLogsAndUpdate = async () => {
    const api = fetchival(baseurl);
    var logs = api("logs")
    const log = await logs(this.props.sessionId).get().catch(err => console.log("Logs fetch:", err));
    if (log) {
      this.setState({ userLogs: log })
    }
  }
  render() {
    console.dir(this.state, this.props);
    var allLogs = this.state.logs.map(function (logs) {
      return (<Logs logs={logs} key={logs.id} label={logs.label} text={logs.text} />)
    });

    return (
      <div>
        <ul className="LogList">
          {allLogs}

          <CreateLog />
        </ul>
      </div>
    );
  }
}

export default LogList;
