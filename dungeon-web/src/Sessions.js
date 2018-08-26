import React, { Component } from 'react';
import Session from './Session';
import fetchival from 'fetchival';
import Api from './Api';
const baseurl = "https://dungeon.azurewebsites.net/api";

class Sessions extends Component {
    constructor(props) {
        super(props);
        this.state = { userSessions: [] };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount() {
      const sessions = await Api.getSessions(1);
      this.setState({ userSessions: sessions })
    }

    // getSessionsAndUpdate = async () => {
    //     const api = fetchival(baseurl);
    //     var sessions = api("sessions")
    //     const session = await sessions.get().catch(err => console.log("Session fetch:", err));
    //     this.setState({ userSessions: session })
    // }

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
