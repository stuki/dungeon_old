import React, { Component } from 'react';
import Sessions from './Sessions';
import SessionPage from './sessionPage';

class ProfilePage extends Component {
    render() {
        return (
            <div className="sessionList">
                    <Sessions/>
                    <SessionPage/>
            </div>
        );
    };

}

export default ProfilePage;