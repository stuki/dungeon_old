import React, { Component } from 'react';
import Logs from './Logs';
import CreateLog from './CreateLog';
import Api from './Api';


class LogList extends Component {
  constructor(props) {
    super(props);
    console.log(props, this.state);

    const sessionId = props.match.url.split('/')[2]
    
    this.state = { 
      logs: [], 
      sessionId: sessionId
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const logs = await Api.getLogs(this.state.sessionId);
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
          <CreateLog sessionId={this.state.sessionId} updateLogs={this.updateLogs} />
        </ul>
      </div>
    );
  }
}

export default LogList;
