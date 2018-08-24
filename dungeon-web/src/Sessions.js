import React, { Component } from 'react';
import Session from './Session';
import fetchival from 'fetchival';
import {Button} from 'react-bootstrap';
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
        const api = fetchival(baseurl);
        var sessions = api("sessions")
        const session = await sessions.get().catch(err => console.log(err));
        this.setState({ userSessions: session })
    }

    render() {
        var allSessions = this.state.userSessions.map(function (session) {
            return (<Session session={session} key={session.id} />)
        });

        return (
            <div>
                <Button onClick={this.props.handleLogOut}>Log Out</Button>
                <ul className="sessionList">
                    {allSessions}
                </ul>
            </div>
        );
    }
}

export default Sessions;
