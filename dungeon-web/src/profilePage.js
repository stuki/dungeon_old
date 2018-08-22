import React, { Component } from 'react';
import { getSessions } from './Service';

class profilePage extends Component {
    constructor(props) {
        super(props);

    }
    state = { userSessions: [] };


    componentDidMount() {
        this.getSessionsAndUpdate();
    }

    getSessionsAndUpdate = () => {
        getSessions(function (sessions) {
            this.setState({ userSessions: sessions, msg: null });
        }.bind(this));
    }

    render() {

        return (
            <div className="sessionList">
                    <Sessions userSessions={this.state.userSessions}/>
            </div>
        );
    };

}


export default profilePage;