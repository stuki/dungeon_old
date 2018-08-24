import React, { Component } from 'react';
import Session from './Session';
import fetchival from 'fetchival';
const baseurl = "https://dungeon.azurewebsites.net/api";

class Sessions extends Component {
    constructor(props) {
        super(props);
        this.state = { userSessions: [] };
    }

    componentDidMount() {
        this.getSessionsAndUpdate();
    }

    getSessionsAndUpdate = async () => {
        var sessions = fetchival(baseurl + "/api/sessions/")
        const session = await sessions.get();
        this.setState({ userSessions: session })
    }

    render() {
        var allSessions = this.state.userSessions.map(function (session) {
            return (<Session session={session} key={session.id} />)
        });

        return (
            <div>
                <ul className="sessionList">
                    {allSessions}
                </ul>
            </div>
        );
    }
}

export default Sessions;
