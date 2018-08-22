import React, { Component } from 'react';
import Session from './Session';

class Sessions extends Component {
    render() {

    var allSessions = this.props.userSessions.map(function (session) {
            return (<Session session={session} key={session.id}/>);
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