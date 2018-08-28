import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Session extends Component {

    render() {
        const {session} = this.props
        const link = "/session/" + session.id + '/journey'
        return (
          <div>
            <Link to={link}>Session Page</Link>
            <div className="Session">
              <p className="sesName"><b>Session name:</b> {session.name}</p>
              <p className="sesCreated"><b>Created at:</b> {new Date(session.createdAt).toLocaleString()}</p>
            </div>
          </div>
        );
    }
}

export default Session;
