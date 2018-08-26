import React, { Component } from 'react';
import Logs from './Logs';
import fetchival from 'fetchival';
import CreateLog from './CreateLog';
const baseurl = "https://dungeon.azurewebsites.net/api";


class LogList extends Component {
  constructor(props) {
    super(props);
    this.state = { userLogs: [] };
  }

  componentDidMount() {
    this.getLogsAndUpdate();
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
    console.dir(this.state.userLogs);
    var allLogs = this.state.userLogs.map(function (logs) {
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
