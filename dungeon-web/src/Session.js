import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Session extends Component {

    render() {
        const link = "/session/" + this.props.session.Id
        return (
          <div>
            <Link to={link}>Session Page</Link>
            <div className="Session">
              <p>SESSION</p>
              <p className="sesName"><b>Session name:</b> {this.props.session.name}</p>
              <p className="sesCreated"><b>Created at:</b> {new Date(this.props.session.createdAt).toLocaleString()}</p>
            </div>
          </div>
        );
    }
}

export default Session;
