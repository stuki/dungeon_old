import React, { Component } from 'react';


class Session extends Component {
   
    render() {
        return (

            <div className="Session">
                <p>SESSION</p>
                <p className="sesName"><b>Session name:</b> {this.props.session.name}</p>
                <p className="sesCreated"><b>Created at:</b> {new Date(this.props.session.createdAt).toLocaleString()}</p>
            </div>

        );
    }
}

export default Session;