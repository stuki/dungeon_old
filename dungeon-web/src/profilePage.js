import React, { Component } from 'react';
import Sessions from './Sessions';
import SessionPage from './sessionPage';
import Login from './Login';

class ProfilePage extends Component {
    render() {
        return (
            <div className="sessionList">              
                <Login />
                <Sessions />
            </div>
        );
    };

}

export default ProfilePage;