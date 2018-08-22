import React, { Component } from 'react';
import Logs from './Logs';
import fetchival from 'fetchival';
const baseurl = "https://dungeon-api20180821104258.azurewebsites.net/";


class LogList extends Component {
    constructor(props) {
        super(props);
        this.state = { userLogs: [] };
    }

    componentDidMount() {
        this.getLogsAndUpdate();
    }

    getLogsAndUpdate = async () => {
        var logs = fetchival(baseurl + "api/logs/")
        const log = await logs.get();
        this.setState({ userLogs: log })
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
                </ul>
            </div>
        );
    }
}

export default LogList;